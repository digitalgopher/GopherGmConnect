App.TeamController = Ember.ObjectController.extend({
    content: null,
    needs: ['roster', 'teams'],
    //loadTeam: function () {
    //    var self = this;
    //    self.changeNavColor(self.get('abr'));
    //    //self.loadRoster();
    //    //self.loadStats();
    //    self.loadSchedule();
    //},
    changeNavColor: function (teamabr) {
        $('#app-nav')
            .attr('class', 'navbar navbar-fixed-top')
            .addClass(teamabr);
        //$('#app-nav-team-name').html(this.get('city'));
    },
    sortProperty: function (property) {
        var self = this;

        if (property == "potential") {
            //self.get('controllers.roster').set('sortProperties', ['potentialColor', 'potential']).set('sortAscending', true);
            self.get('filteredRoster').set('sortProperties', ['potentialColor', 'potential']).set('sortAscending', true);
            return;
        }
        //self.get('controllers.roster').set('sortProperties', [property]).set('sortAscending', false);
        self.get('filteredRoster').set('sortProperties', [property]).set('sortAscending', false);

    },

    filterPosition: function (position) {
        var self = this;
        if (position == "all") {
            //self.get('controllers.roster').set('content', self.get('roster'));
            self.set('filteredRoster.content', self.get('roster.content'));
            return;
        }
        if (position == "f") {
            //var forwardLines = self.get('roster').filter(function (item, index, enumerator) {
            var forwardLines = self.get('roster').get('content').filter(function (item, index, enumerator) {

                var _position = item.get('position');
                if (_position == "C" || _position == "LW" || _position == "RW") {
                    return item;
                }
            });
            //self.get('controllers.roster').set('content', forwardLines);
            self.set('filteredRoster.content', forwardLines);
        }
        else {
            self.get('filteredRoster').set('content', self.get('roster.content').filterProperty('position', position));
            //self.get('controllers.roster').set('content', self.get('roster').filterProperty('position', position));
        }
    },
    //loadStats: function () {
    //    var self = this;
    //    $.getJSON("/api/gopher/teams", { id: self.get('id') }).then(function (team) {
    //        self.get('content').setProperties(team);
    //        self.set('statsIsLoaded', true);
    //    });
    //},
    testfunc: function () {
        var self = this;
        console.log('roster.content changed');
        console.log(self.get('roster.content'));
    }.observes('roster.content'),

    test2func: function () {
        console.log('testroster changed.. by magic');
    }.observes('testyRoster.content'),


    //loadRoster: function () {
    //    var loadedRoster = App.Roster.create();
    //    var untouchedRoster = App.Roster.create();
    //    var tempRoster = Em.A();
    //    var self = this;
    //    self.set('rosterIsLoaded', false);
    //    $.getJSON("/api/gopher/roster", { id: self.get('id') }).then(function (playerList) {
    //        playerList.forEach(function (p) {
    //            var player = App.Player.create();
    //            player.setProperties(p);
    //            tempRoster.pushObject(player);
    //            //loadedRoster.pushObject(player);
    //        });
    //        loadedRoster.set('content', tempRoster);
    //        untouchedRoster.set('content', tempRoster);
         
    //        self.set('roster', untouchedRoster);
    //        self.set('filteredRoster', loadedRoster);

    //        //self.get('controllers.roster').set('content', loadedRoster);
    //        self.set('rosterIsLoaded', true);
    //        self.loadLines();
    //    });
    //},

    //depends on a roster being loaded. Call only when sure a roster is loaded
    //loadLines: function () {
    //    var loadedLines = [];
    //    var self = this;
    //    $.getJSON("/api/gopher/getlines", { id: this.get('id') }).then(function (lines) {
    //        lines.Lines.forEach(function (l) {
    //            var line = App.Line.create();
    //            line.setProperties(l);
    //            loadedLines.pushObject(line);
    //        });
    //        self.set('lines', loadedLines);
    //        self.set('linesIsLoaded', true);
    //        self.set('isLoaded', true);
    //        self.loadSchedule();
    //    });
    //},

    loadSchedule: function () {
        var self = this;
        if (self.get('controllers.teams').get('teamsIsLoaded')) {
            var schedule = [];
            
            $.getJSON("/api/gopher/GetSchedule", { id: this.get('id') }).then(function (games) {
                games.forEach(function (g) {
                    var game = App.Game.create();
                    game.setProperties(g);
                    schedule.pushObject(game);
                });
                self.set('schedule', schedule);
                self.set('scheduleIsLoaded', true);

                //console.log(self.get('controllers.teams').get('isLoaded'));
                //if (!self.get('controllers.teams').get('isLoaded')) {
                //    console.log('woo, falsey');
                //    self.get('controllers.teams').loadTeams();               
                //}

            });
        }
        }.observes('controllers.teams.teamsIsLoaded')

});