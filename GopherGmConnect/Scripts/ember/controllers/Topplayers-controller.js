App.TopplayersController = Ember.ObjectController.extend({
    needs: ['eatoken'],
    sessionToken: function () {
        var self = this;
        return self.get('controllers.eatoken.token');
    },
    loadPlayers: function () {
        var tempRoster = Em.A();
        var self = this;
        self.set('playersIsLoaded', false);
        var data = {
            token: self.sessionToken()
        }
        $.getJSON("/api/gopher/TopPlayers", data).then(function (playerList) {
            playerList.forEach(function (p) {
                var player = App.Player.create();
                player.setProperties(p);
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
    },
    sortStat: function (property) {
        var self = this;
        property = "singleYearStats." + property;
        self.get('roster').set('sortProperties', [property]).set('sortAscending', false);
        //self.get('controllers.roster').set('sortProperties', [property]).set('sortAscending', false);
    },
})