
App.Player = Ember.Object.extend({
    playerIsLoaded: false,
    salaryYears: function () {
        var years = Em.A();
        var yearsLeft = this.get('yearsLeft');
        if (yearsLeft > 5) {
            yearsLeft = 5;
        }

        for (var i = 1; i <= yearsLeft ; i++)
        {
            if (yearsLeft === 0) break;
            var yearSalaryObject = {
                salary: this.get('salaryString'),
                salaryClass: "salaryNumber",
                salarySmall: '$' + this.get('salarySmall')
            }

            if (i === yearsLeft && i != 5) {

            }
            years.pushObject(yearSalaryObject);

            if (i === yearsLeft && i != 5) {
                var status = "ufa";
                if (this.get('isTwoWay')) {
                    status = "rfa";
                }
                var contractExpired = {
                    salary: status.toUpperCase(),
                    salaryClass: status,
                    salarySmall: status.toUpperCase()
                    
                }
                years.pushObject(contractExpired);
            
            }
            

        }
        return years;
    }.property(),


    salarySmall: function () {
        var amt = this.get('salaryReadable');
        return amt / 1000000;
    }.property('salaryReadable'),

    handed: function () {
        var shoots = this.get('shoots');
        if (shoots == 0) {
            return "L";
        }
        return "R";
    }.property('shoots'),

    readPotential: Ember.computed.alias('potential'),

    //readPotentialColor: function () {
    //    var p = this.get('potentialColor');
    //    return PotentialColor[p];
    //}.property('potenticalColor'),

    isGoalie: function () {
        if (this.get('position') == "G") {
            return true;
        }
        return false;
    }.property('position'),

    salaryString: function () {
        return numberWithCommas(this.get('salaryReadable'));
    }.property('salaryReadable'),

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
    find: function (pid) {
        var yearlyStats = [];
        var playerRates = Em.A();
        var player = App.Player.create();
        var data = {
            id: pid
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