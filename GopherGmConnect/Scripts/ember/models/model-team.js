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
        //var team = App.Team.create();
        return Ember.RSVP.hash({
            roster: App.Team.findRoster(id),

            //schedule: App.Team.findSchedule(id),
        }).then(function (results) {
            var team = App.Team.create();
            team.set("players", results.roster);
            team.set('isLoaded', true);
            team.set('id', id);
            return team;
        }).fail(function () {
            alert('something failed;');
        });

    },

    findRoster: function (id) {
        var data = {
            id: id
        }
        return $.getJSON('/api/gopher/roster', data).then(function (roster) {
            return roster;
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
