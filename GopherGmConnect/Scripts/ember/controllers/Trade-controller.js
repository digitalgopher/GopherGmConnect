App.TradeController = Em.ObjectController.extend({
    needs: ['application'],
    token: Ember.computed.alias('controllers.application.token'),
    allTeams: Ember.computed.alias('controllers.application.teams'),
    randomTeam: {
        id: Math.floor(Math.random() * (30 - 0) + 0).toString()     
    },
    randomTeamB: {
        id: Math.floor(Math.random() * (30 - 0) + 0).toString()
    },
    actions: {
        playerSelected: function (player, team) {
            var self = this;
            if (team.get('tradeBlock').contains(player)) {
                team.get('tradeBlock').removeObject(player);
            }
            else {
                team.get('tradeBlock').pushObject(player);
            }
            
        }
    },
    //TODO : Clean this up...
    updateAfterTradeSalaries: function () {
        var self = this;
        if (typeof self.get('aTeam.tradeSalaryEnum') == "undefined") {
            return;
        };
        if (typeof self.get('bTeam.tradeSalaryEnum') == "undefined") {
            return;
        }
        var aTeamOnBlock = GetContractNumbers(self.get('aTeam.tradeSalaryEnum'));
        var bTeamOnBlock = GetContractNumbers(self.get('bTeam.tradeSalaryEnum'));

        var aTeamMinusBlock = self.get('aTeam.newTradeSalaryInt');
        var bTeamMinusBlock = self.get('bTeam.newTradeSalaryInt');

        var aAfterTrade = aTeamMinusBlock - bTeamOnBlock;
        var bAfterTrade = bTeamMinusBlock - aTeamOnBlock;

        self.set('aTeamSalaryAfterTrade', numberWithCommas(aAfterTrade));
        self.set('bTeamSalaryAfterTrade', numberWithCommas(bAfterTrade));
    },
    aTeamSalaryAfterTrade: function () {
        return 'Please Select a Player.';
    }.property(),
    bTeamSalaryAfterTrade: function () {
        return 'Please Select a Player.';
    }.property(),
    aTeamSalaryChange: function () {
        var self = this;
        self.updateAfterTradeSalaries();
    }.observes('aTeam.newTradeSalary'),
    bTeamSalaryChange: function () {
        var self = this;
        self.updateAfterTradeSalaries();
    }.observes('bTeam.newTradeSalary'),
    bTeamAddToBlock: function (player) {
        var self = this;
        self.addToTradeBlock(player, 'b');
    },
    aTeamAddToBlock: function (player) {
        var self = this;
        self.addToTradeBlock(player, 'a');
    },
    addToTradeBlock: function (player, teamLetter) {
        var self = this;
        var teamString = teamLetter + 'Team';
        console.log(teamString);
        if (self.get(teamString).get('tradeBlock').contains(player)) {
            var existingPlayerIndex = self.get(teamString).get('tradeBlock').indexOf(player);
            self.get(teamString).get('tradeBlock').removeAt(existingPlayerIndex);
        }
        else {
            self.get(teamString).get('tradeBlock').pushObject(player);
        }
    },

    tradeTeamsLoaded: function () {
        var self = this;
        if (self.aTeam != null && self.bTeam != null) {
            return true;
        }
        return false;
    },
    aTeam: null,
    bTeam: null,
    aLoadedTeam: null,
    bLoadedTeam: null,
    destroyTradeBlock: function (block) {
        var self = this;
        var teamBlock = block + 'Team';
        var players = self.get(teamBlock).get('tradeBlock');
        if (players.length > 0) {
            players.clear();
        }
    },
    teamChanged: function () {
        var self = this;
        var teamChanged = arguments[1];
        var teamid = self.get(teamChanged).get('id');
        App.Team.find(self.get('token'), teamid).then(function (_loadedTeam) {
            self.get(teamChanged).setProperties({
                salaryCapSpent: _loadedTeam.get('salaryCapSpent'),
                salaryCapRemaining: _loadedTeam.get('salaryCapRemaining'),
                salaryCapTotal: _loadedTeam.get('salaryCapTotal'),
                roster: _loadedTeam.get('roster'),
                rosterIsLoaded: true
            });
            
        });
    }.observes('aTeam', 'bTeam'),
    //bTeamChanged: function () {
    //    var self = this;
    //    self.destroyTradeBlock('b');
    //    self.bTeam.loadTeam(self.sessionToken());
    //}.observes('bTeam')
})