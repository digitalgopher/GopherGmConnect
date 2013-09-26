App.PlayerController = Ember.ObjectController.extend({
    content: null,
    needs: ["team", "Yearlystats", "teams", "playercompare", 'eatoken'],
    actions: {
        getNewRatings: function () {
            var self = this;
            self.set('isNewNHL', true);
            
            $.getJSON("Scripts/nhl_14_players.json").then(function (list) {
                var filtered = list.filter(function (player) {
                    return player.LastName == self.get('lastName');
                });

                if (filtered.length > 1) {
                    console.log('found more than 1....');
                    console.log(filtered);
                    console.log(filtered.length);
                    var sameLastNameList = filtered.filter(function (p) {
                        return p.FirstName == self.get('firstName');
                    });
                    
                    self.loadPlayer(parseInt(sameLastNameList[0].id));
                }
                else if (filtered.length == 1)
                {
                    console.log('found one!');
                    self.loadPlayer(parseInt(filtered[0].id));
                }
                else {
                    console.log('oh noes, ');
                    alert('oh no! I cant find that player... sorry');
                    return;
                }
            })

            
        }
    },
    sessionToken: function () {
        var self = this;
        return self.get('controllers.eatoken.token');
    },
    sessionTokenChanged: function () {
        var self = this;
        self.loadPlayer(self.get('id'));
    }.observes('controllers.eatoken.token'),
    loadPlayer: function (pid) {
        var self = this;
        if (self.sessionToken())
        {
            var yearlyStats = [];
            var playerRates = [];
            var player = App.Player.create();
            var data = {
                id: pid,
                token: self.sessionToken(),
                isNewNHL: self.get('isNewNHL')
            }
            $.getJSON("/api/gopher/players", data).then(function (p) {
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
        }
    },
    stats: null
});
