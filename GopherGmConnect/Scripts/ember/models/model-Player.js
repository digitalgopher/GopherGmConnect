
App.Player = Ember.Object.extend({
    playerIsLoaded: false,
    salaryReadable: function () {
        var amt = this.get('salary');
        return GetContractAmount(amt);
    }.property('salary'),

    salarySmall: function () {
        var amt = this.get('salary');
        return GetSmallContractNumber(amt);
    }.property('salary'),

    handed: function () {
        var shoots = this.get('shoots');
        return Shoots(shoots);
    }.property('shoots'),

    readPotential: Ember.computed.alias('potential'),

    readPotentialColor: function () {
        var p = this.get('potentialColor');
        return PotentialColor[p];
    }.property('potenticalColor'),

    isGoalie: function () {
        if (this.get('position') == "G") {
            return true;
        }
        return false;
    }.property('position'),

    tradeValuePercent: function () {
        return "width: " + (this.get('tradeValue') / 1000) * 100 + "%;";
    }.property('tradeValue'),

    contractType: function () {
        if (this.get('isTwoWay')) {
            return "Two";
        }
        return "One";
    }.property("isTwoWay")
});

App.Player.reopenClass({
    find: function (pid, token, isNew) {
        var yearlyStats = [];
        var playerRates = Em.A();
        var player = App.Player.create();
        var data = {
            id: pid,
            token: token,
            isNewNHL: isNew
        };
        return $.getJSON("/api/gopher/players", data).then(function (p) {
            player.setProperties(p);
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
            player.set('playerRates', playerRates);
            return player;
        });       
    }
});



//var currentTeamid = self.get('controllers.team').get('id');
//if (self.get('team') != currentTeamid) {
//    //loaed team and player team are different.
//    if (self.get("team") == -1) {
//        //palyer doesn't currently belong to a team...
//        return;
//    }
//    self.get('controllers.team').set('content', App.Team.create({ id: self.get("team") }));
//    self.get('controllers.team').loadTeam();
//}