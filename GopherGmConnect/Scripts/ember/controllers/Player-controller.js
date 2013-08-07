﻿App.PlayerController = Ember.ObjectController.extend({
    content: null,
    needs: ["team", "Yearlystats", "teams", "playercompare"],
    loadPlayer: function (pid) {
        var self = this;
        var yearlyStats = [];
        var playerRates = [];
        var player = App.Player.create();
        $.getJSON("/api/gopher/players", { id: pid }).then(function (p) {
            player.setProperties(p);
            player.set('playerIsLoaded', true);
            self.set('content', player);
            p.playerStats.forEach(function (stat) {
                var playerStat = App.Yearlystats.create();
                playerStat.setProperties(stat);
                yearlyStats.pushObject(playerStat);
            });
            for (var r in p.playerRatings) {
                if (p.playerRatings.hasOwnProperty(r)) {
                    var playerRate = App.Playerrating.create({ name: r, rating: p.playerRatings[r] });
                    playerRate.setProperties(r);
                    playerRates.pushObject(playerRate);
                }
            }

            self.set('playerRates', playerRates);
            self.set('playerStats', yearlyStats);
            self.set('playerIsLoaded', true);

            var currentTeamid = self.get('controllers.team').get('id');
            if (self.get('team') != currentTeamid) {
                //loaed team and player team are different.
                if (self.get("team") == -1) {
                    //palyer doesn't currently belong to a team...
                    return;
                }
                self.get('controllers.team').set('content', App.Team.create({ id: self.get("team") }));
                self.get('controllers.team').loadTeam();
            }
        });
        return player;
    },
    stats: null
});
