
App.Player = Ember.Object.extend({
});

App.Player.reopenClass({
    findy: function (pid) {
        //var yearlyStats = [];
        //var playerRates = Em.A();
        //var player = App.Player.create();
        var data = {
            id: pid
        };
        return $.getJSON("/api/gopher/players", data).then(function (p) {
            //player.setProperties(p);
            //p.playerStats.forEach(function (stat) {
            //    var playerStat = App.Yearlystats.create();
            //    playerStat.setProperties(stat);
            //    yearlyStats.pushObject(playerStat);
            //});
            //for (var r in p.playerRatings) {
            //    if (p.playerRatings.hasOwnProperty(r)) {
            //        var playerRate = App.Playerrating.create({ name: r, rating: p.playerRatings[r] });
            //        playerRate.setProperties(r);
            //        playerRates.pushObject(playerRate);
            //    }
            //}
            //player.set('playerRates', playerRates);
            return p;
        });       
    },
    findAll: function (teamId) {
        //var roster = App.Roster.create();
        var allPlayers = Em.A();
        var data = {
            id: teamId
        }
        return $.getJSON("/api/gopher/roster", data).then(function (playerList) {
            playerList.forEach(function (p) {
                var player = App.Player.create();
                player.setProperties(p);
                allPlayers.pushObject(player);
            });
            //roster.set('content', tempRoster);
            //roster.FindBestPlayer();
            return allPlayers;
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
    },
});