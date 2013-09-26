App.TopplayersController = Ember.ObjectController.extend({
    needs: ['eatoken', 'teams'],
    sessionToken: function () {
        var self = this;
        return self.get('controllers.eatoken.token');
    },
    readyToLoadPlayers: function () 
    {
        var self = this;
        if (self.sessionToken() && self.get('controllers.teams.content')) {
            self.loadPlayers();
        }
        
    }.observes('controllers.teams.content', 'controllers.eatoken.token'),
    sessionTokenChanged: function () {
        var self = this;
        self.loadPlayers();
    }.observes('controllers.eatoken.token'),
    loadPlayers: function () {
        var self = this;
        if (self.sessionToken() && self.get('controllers.teams.content')) {
            var tempRoster = Em.A();
            self.set('playersIsLoaded', false);
            var data = {
                token: self.sessionToken()
            }
            $.getJSON("/api/gopher/TopPlayers", data).then(function (playerList) {
                playerList.forEach(function (p) {
                    var player = App.Player.create();
                    player.setProperties(p);
                    player.set('team', self.get('controllers.teams').findProperty('id', player.get('team').toString()));
                    tempRoster.pushObject(player);
                    //loadedRoster.pushObject(player);
                });

                //var loadedRoster = App.Roster.create();
                var loadedRosterController = App.RosterController.create({
                    content: tempRoster
                });

                //loadedRosterController.set('content', tempRoster);
                //loadedRoster.set('controller', loadedRosterController);

                self.set('roster', loadedRosterController);
                //self.set('filteredRoster', loadedRoster);

                //self.get('controllers.roster').set('content', loadedRoster);
                self.set('playersIsLoaded', true);
            });
        }
    },
    sortStat: function (property) {
        var self = this;
        property = "singleYearStats." + property;
        self.get('roster').set('sortProperties', [property]).set('sortAscending', false);
        //self.get('controllers.roster').set('sortProperties', [property]).set('sortAscending', false);
    },
})