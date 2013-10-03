App.Roster = Em.ArrayProxy.extend(Ember.Copyable, {
    content: null,
    players: null
});

App.Roster.reopenClass({
    find: function (token, id) {
        var roster = App.Roster.create();
        var tempRoster = Em.A();
        var data = {
            id: id,
            token: token
        }
        return $.getJSON("/api/gopher/roster", data).then(function (playerList) {
            playerList.forEach(function (p) {
                var player = App.Player.create();
                player.setProperties(p);
                tempRoster.pushObject(player);
            });
            roster.set('content', tempRoster);
            return roster;
        });
    },
    findTopPlayers: function (token) {
        var self = this;
        var tempRoster = Em.A();
        var data = {
            token: token
        }
        return $.getJSON("/api/gopher/TopPlayers", data).then(function (playerList) {
            playerList.forEach(function (p) {
                var player = App.Player.create();
                player.setProperties(p);
                var _playerController = App.PlayerController.create({
                    content: player               
                });
                tempRoster.pushObject(_playerController);
            });

            var loadedRosterController = App.RosterController.create({
                content: tempRoster
            });
            return loadedRosterController;
        });
    }
});