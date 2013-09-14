App.TradeController = Em.ObjectController.extend({
    needs: ['teams', 'team', 'eatoken'],
    sessionToken: function () {
        var self = this;
        return self.get('controllers.eatoken.token');
    },
    loadTeams: function () {
        var self = this;
        if (!self.get('controllers.teams').get('teamsIsLoaded'))
        {
            self.get('controllers.teams').loadTeams();
        }
        else
        {
            self.set('allTeams', self.get('controllers.teams').get('content'))
            self.set('teamsIsLoaded', true);
        }
        var allTeams = self.get('controllers.teams').addObserver('teamsIsLoaded', function (a) {
            console.log(a.get('teamsIsLoaded'));
            self.set('allTeams', self.get('controllers.teams').get('content'));
            self.set('teamsIsLoaded', true);
        });
        
    },
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
        return 100;
    }.property(),
    bTeamSalaryAfterTrade: function () {
        return 200;
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
    addToTradeBlock: function (player, teamLetter){
        var self = this;
        var teamString = teamLetter + 'Team';
        console.log(teamString);
        if (self.get(teamString).get('tradeBlock').contains(player)) {
            var existingPlayerIndex = self.get(teamString).get('tradeBlock').indexOf(player);
            self.get(teamString).get('tradeBlock').removeAt(existingPlayerIndex);
        }
        else
        {
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
        if (players.length > 0)
        {
            players.clear();
        }
    },
    aTeamChanged: function () {
        var self = this;
        self.destroyTradeBlock('a');
        self.aTeam.loadTeam(self.sessionToken());
    }.observes('aTeam'),
    bTeamChanged: function () {
        var self = this;
        self.destroyTradeBlock('b');
        self.bTeam.loadTeam(self.sessionToken());
    }.observes('bTeam')
})