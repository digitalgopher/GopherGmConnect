App.Team = Ember.Object.extend({
    content: null,
    //currentSort: 'overall',
    //currentSortStat: 'minutes',

    //forwards: Ember.computed.filter('roster', function (player) {
    //        return player.isForward && player.isOnMainRoster     
    //}),
    //dmen: Ember.computed.filter('roster', function (player) {
    //    return player.isDefence && player.isOnMainRoster;
    //}),
    //goalies: Ember.computed.filter('roster', function (player) {
    //    return player.isGoalie && player.isOnMainRoster;
    //}),
    //prospects: Ember.computed.filterBy('roster', 'isOnMainRoster', false),
    //mainRoster: Ember.computed.filterBy('roster', 'isOnMainRoster', true),

    //leadingScorers: function () {
    //    if (typeof this.get('roster') != 'undefined') {
    //        var self = this;
    //        var leadingScorers = self.get('roster').sortBy('singleYearStats.points').reverse();
    //        return leadingScorers.slice(0, 3);
    //    }
    //}.property(),

    //startingGoalie: function () {
    //    if (typeof this.get('roster') != 'undefined') {
    //        var self = this;
    //        var goalie = self.get('goalies').sortBy('singleYearStats.gamesPlayed').reverse()[0];
    //        return goalie;
    //    }
    //}.property(),

    lastTenWins: function () {
        return this.get('lastTenRecord').split('-')[0];
    }.property(),

    lastTenLosses: function () {
        return this.get('lastTenRecord').split('-')[1];
    }.property(),

    lastTenOvertimeLosses: function () {
        return this.get('lastTenRecord').split('-')[2];
    }.property(),


    salary: function () {
        return numberWithCommas(this.get('salaryCapSpent'));
    }.property('salaryCapSpent'),

    //isLoaded: function () {
    //    return Ember.computed.and('linesIsLoaded', 'rosterIsLoaded', 'scheduleIsLoaded', 'statsIsLoaded');
    //},

    idWithUnderscore: function () {
        return "_" + this.get('id');
    }.property(),

    teamjsname: function () {
        return "team_" + this.get('id');
    }.property(),

    twitterLink: function () {
        return "http://twitter.com/" + this.get('twitter');
    }.property(),

    teamname: function () {
        return this.get('name');
    }.property(),

    capSpace: function () {
        return numberWithCommas(this.get('salaryCapRemaining'));
    }.property('salaryCapRemaining'),

    dasherizeName: function () {
        var t = this.get('teamjsname');
        var c = this.get('city');
        var n = this.get('teamname');
        c = c.toLowerCase();
        c = c.replace(/ /g, "-");
        n = n.replace(/ /g, "-");
        return full = c + "-" + n;
    },

    imageUrl: function () {
        var full = this.dasherizeName();
        return "/content/images/logos/59/" + full + ".png";
    }.property('teamname', 'city', 'name'),

    imageUrlMedium: function () {
        var full = this.dasherizeName();
        return "/content/images/logos/90/" + full + ".png";
    }.property('teamname', 'city', 'name'),

    imageUrlLarge: function () {
        var full = this.dasherizeName();
        return "/content/images/logos/200/" + full + ".png";
    }.property('teamname', 'city', 'name')
});


/*
Loads everything about the team using RSVP hashes to load all promises at the same time. 
*/
App.Team.reopenClass({
    findAll: function () {
        return $.getJSON("/api/gopher/teams").then(function (response) {
            var teamsArray = Em.A();
            response.forEach(function (team) {
                var _t = App.Team.create();
                _t.setProperties(team);
                teamsArray.pushObject(_t);
            });
            return teamsArray;
        });

    },


    find: function (id) {
        var team = App.Team.create();
        return Ember.RSVP.hash({
            //roster: App.Player.findAll(id),
            //lines: App.Line.findAll(id),
            team: App.Team.findTeam(id),
            schedule: App.Team.findSchedule(id),
            //tweets: App.Tweet.findAll(twittername)
        }).then(function (results) {

            //var allPlayers = Em.A();
            //results.team.players.forEach(function (p) {
            //    var player = App.Player.create();
            //    player.setProperties(p);
            //    allPlayers.pushObject(player);
            //});

            var allPlayers = results.team.players.map(function (player) {
                return App.Player.create().setProperties(player);
            });

            //var rosterController = App.PlayersController.create({
            //    content: allPlayers
            //});

            //var filteredRosterController = App.PlayersController.create({
            //    content: allPlayers
            //});

            //allPlayers = allPlayers.sortBy('overall').reverse();

            
            //team.set('roster', allPlayers);
            //team.set('rosterFull', allPlayers);
            //team.set('schedule', results.schedule);           
            team.setProperties(results.team);
            team.set('players', allPlayers);
            team.set('isLoaded', true);
            return team;
        }).fail(function () {
            alert('something failed;');
        });

    },


    findTeam: function (id) {
        var data = {
            id: id
        }
        return $.getJSON("/api/gopher/teams", data).then(function (_team) {
            return _team;
        });
    },
    findSchedule: function (id) {
        var data = { id: id };
        return $.getJSON("/api/gopher/getschedule", data).then(function (_scheduleArray) {
            var schedule = Em.A();
            _scheduleArray.forEach(function (_game) {
                var game = App.Game.create();
                game.setProperties(_game);
                schedule.pushObject(game);
            });
            return schedule;
        });
    },

    findAllSalaries: function () {
        return $.getJSON('/api/gopher/TeamSalaries').then(function (teams) {
            return teams;
        })
    }
});
