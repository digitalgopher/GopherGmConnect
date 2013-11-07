//App.Roster = Em.ArrayProxy.extend(Ember.Copyable, {
//    content: null,
//    players: null,
//    bestPlayer: null,
//    FindBestPlayer: function () {
//        var self = this;
//        var array = self.get('content');
//        var bestOv = Math.max.apply(Math, array.map(function (o) {
//            return o.overall;
//        }));
//        self.set('bestPlayer', self.get('content').findProperty('overall', bestOv));
//        console.log(self.get('bestPlayer.lastName'));
//    }
//});

//App.Roster.reopenClass({
   
//    getTest: function () {
//        var self = this;
//        var tempRoster = Em.A();
//        return $.getJSON("/api/gopher/GetPlayersTest").then(function (playerList) {
//            playerList.forEach(function (p) {
//                var player = App.Player.create();
//                player.setProperties(p);
//                var _playerController = App.PlayerController.create({
//                    content: player               
//                });
//                tempRoster.pushObject(_playerController);
//            });
//            return loadedRosterController;
//        });
//    },
//    }
//});