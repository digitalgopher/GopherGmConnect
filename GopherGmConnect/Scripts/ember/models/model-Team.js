
App.Team = Ember.Object.extend({
    content: null,
    tradeBlock: function () {
        return Em.A(Em.MutableEnumerable.mixin);
    }.property(),
    newTradeSalary: function () {
        return 0;
    }.property(),
    tradeBlockChanged: function () {
        debugger;
        var self = this;
        var totalSalary = 0;
        self.get('tradeBlock').forEach(function (item, index, enumerable) {
            totalSalary += item.get('salary');
        })
        var actualSalary = self.get('salaryCapSpent');
        var salaryCap = self.get('salaryCapTotal');
        var newSalary = salaryCap - (actualSalary - GetContractNumbers(totalSalary));
        self.set('tradeSalaryEnum', totalSalary);
        self.set('newTradeSalaryInt', newSalary);
        self.set('tradeSalary', GetContractAmount(totalSalary));
        self.set('newTradeSalary', numberWithCommas(newSalary));
    }.observes('tradeBlock.@each'),


    isLoaded: function () {
        return Ember.computed.and('linesIsLoaded', 'rosterIsLoaded', 'scheduleIsLoaded', 'statsIsLoaded');
    },


    teamjsname: function () {
        return "team_" + this.get('id');
    }.property('id'),

    city: function () {
        return teams[this.get('teamjsname')].city;
    }.property('teamjsname'),

    twitter: function () {
        return "@" + teams[this.get('teamjsname')].twitter;
    }.property('teamjsname'),

    twitterLink: function () {
        return "http://twitter.com/" + teams[this.get('teamjsname')].twitter;
    }.property('teamjsname'),

    teamname: function () {
        return teams[this.get('teamjsname')].name;
    }.property('teamjsname'),

    abr: function () {
        return teams[this.get('teamjsname')].abr;
    }.property('teamjsname'),

    capSpace: function () {
        return numberWithCommas(this.get('salaryCapRemaining'));
    }.property('salaryCapRemaining'),

    conference: function () {
        return Conference(this.get('conference'));
    }.property('conference'),

    division: function () {
        return Division(this.get('division'));
    }.property('division'),

    imageUrl: function () {
        var t = this.get('teamjsname');
        var c = this.get('city');
        var n = this.get('teamname');
        c = c.toLowerCase();
        c = c.replace(/ /g, "-");
        n = n.replace(/ /g, "-");
        full = c + "-" + n;
        return "/content/images/logos/59/" + full + ".png";
    }.property('teamname', 'city', 'name'),

    imageUrlMedium: function () {
        var t = this.get('teamjsname');
        var c = this.get('city');
        var n = this.get('teamname');
        c = c.toLowerCase();
        c = c.replace(/ /g, "-");
        n = n.replace(/ /g, "-");
        full = c + "-" + n;
        return "/content/images/logos/90/" + full + ".png";
    }.property('teamname', 'city', 'name'),

    imageUrlLarge: function () {
        var t = this.get('teamjsname');
        var c = this.get('city');
        var n = this.get('teamname');
        c = c.toLowerCase();
        c = c.replace(/ /g, "-");
        n = n.replace(/ /g, "-");
        full = c + "-" + n;
        return "/content/images/logos/200/" + full + ".png";
    }.property('teamname', 'city', 'name')
});


/*
Loads everything about the team using RSVP hashes to load all promises at the same time. 
*/
App.Team.reopenClass({
    find: function (token, id) {
        var team = App.Team.create();
        return Ember.RSVP.hash({
            roster: App.Roster.find(token, id),
            lines: App.Line.findAll(token, id),
            stats: App.Team.findStats(token, id),
            schedule: App.Team.findSchedule(id)
        }).then(function (results) {

            var rosterController = App.RosterController.create({
                content: results.roster
            });

            var filteredRosterController = App.RosterController.create({
                content: results.roster
            });

            team.set('roster', rosterController);
            team.set('filteredRoster', filteredRosterController);
            team.set('lines', results.lines);
            team.set('schedule', results.schedule);
            team.setProperties(results.stats);
            return team;
        }).fail(function () {
            alert('something failed;');
        });

    },
    findStats: function (token, id) {
        var data = {
            id: id,
            token: token
        }
        return $.getJSON("/api/gopher/teams", data).then(function (_stats) {
            return _stats;
        });
    },
    findSchedule: function (id) {
        return $.getJSON("/scripts/seasonSchedule.json").then(function (_scheduleArray) {
            function containsTeam(element, index, array) {
                if (element.homeTeamId.toString() == id || element.awayTeamId.toString() == id) {
                    return element
                }
            }
            var schedule = Em.A();
            var teamSched = _scheduleArray.filter(containsTeam);
            teamSched.forEach(function (_game) {
                var game = App.Game.create();
                game.setProperties(_game);
                schedule.pushObject(game);
            });
            return schedule;
        });
    }
});
