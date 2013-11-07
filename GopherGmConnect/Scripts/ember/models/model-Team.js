
App.Team = Ember.Object.extend({
    content: null,
    findFastestPlayer: function () {
        var self = this;
        var array = self.get('roster.content');
        var bestOv = Math.max.apply(self, array.map(function (o) {
            return o.playerRatings.speed;
        }));

        self.set('fastestPlayer', self.get('roster.content').findProperty('playerRatings.speed', bestOv));
    },

    findStrongestPlayer: function () {
        var self = this;
        var array = self.get('roster.content');
        var bestOv = Math.max.apply(self, array.map(function (o) {
            return o.playerRatings.strength;
        }));

        self.set('strongestPlayer', self.get('roster.content').findProperty('playerRatings.strength', bestOv));
    },

    findBestShooter: function () {
        var self = this;
        var array = self.get('roster.content');
        var bestOv = Math.max.apply(self, array.map(function (o) {
            return o.playerRatings.wristShotAccuracy;
        }));

        self.set('bestShootingPlayer', self.get('roster.content').findProperty('playerRatings.wristShotAccuracy', bestOv));
    },

    findBestOverallPlayer: function () {
        var self = this;
        var array = self.get('roster.content');
        var bestOv = Math.max.apply(self, array.map(function (o) {
            return o.overall;
        }));

        self.set('bestOverallPlayer', self.get('roster.content').findProperty('overall', bestOv));
    },
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
    idWithUnderscore: function () {
        return "_" + this.get('id');
    }.property(),

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
    find: function (token, id, twittername) {
        var team = App.Team.create();
        return Ember.RSVP.hash({
            //roster: App.Player.findAll(token, id),
            //lines: App.Line.findAll(token, id),
            team: App.Team.findTeam(token, id),
            schedule: App.Team.findSchedule(id),
            tweets: App.Tweet.findAll(twittername)
        }).then(function (results) {

            var allPlayers = Em.A();
            results.team.players.forEach(function (p) {
                var player = App.Player.create();
                player.setProperties(p);
                allPlayers.pushObject(player);
            });

            var rosterController = App.PlayersController.create({
                content: allPlayers
            });

            var filteredRosterController = App.PlayersController.create({
                content: allPlayers
            });

            team.set('roster', rosterController);
            team.set('filteredRoster', filteredRosterController);
            //team.set('lines', results.lines);
            team.set('schedule', results.schedule);
            team.setProperties(results.team);
            team.set('tweets', results.tweets);
            return team;
        }).fail(function () {
            alert('something failed;');
        });

    },


    findTeam: function (token, id) {
        var data = {
            id: id,
            token: token
        }
        return $.getJSON("/api/gopher/teams", data).then(function (_team) {
            return _team;
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
