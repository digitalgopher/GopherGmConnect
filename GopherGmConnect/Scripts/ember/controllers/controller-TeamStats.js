App.TeamStatsController = Ember.ObjectController.extend({
    needs: ['application'],
    teams: Ember.computed.readOnly('controllers.application.teams'),

    rankOverall: function () {
        return this.rank('points');
    }.property('id'),

    rankConference: function () {
        return this.rank('points', 'conference');
    }.property('id'),

    rankDivision: function () {
        return this.rank('points', 'division');
    }.property('id'),

    rankPowerPlay: function () {
        return this.rank('powerPlayPercent');
    }.property('id'),

    rankPenaltyKill: function () {
        return this.rank('penaltyKillPercent');
    }.property('id'),

    rankGoalsForPerGame: function () {
        return this.rank('goalsForPerGame');
    }.property('id'),

    rankGoalsAgainstPerGame: function () {
        return this.rank('goalsAgainstPerGame', false, false);
    }.property('id'),

    rank: function (rankBy, filterBy, sortDesc) {
        var allTeams = this.get('teams');
        filterBy = typeof filterBy !== 'undefined' ? filterBy : false;
        sortDesc = typeof sortDesc !== 'undefined' ? sortDesc : true;
        if (filterBy) {
            allTeams = allTeams.filterBy(filterBy, this.get(filterBy));
        }
        allTeams = allTeams.sortBy(rankBy);
        if (sortDesc) {
            allTeams = allTeams.reverse();
        }
        var team = allTeams.findBy('id', this.get('id'));
        var place = allTeams.indexOf(team);
        return this.getNumberSuffix(++place);
    },


    getNumberSuffix: function (i) {
        var j = i % 10;
        if (j == 1 && i != 11) {
            return i + "st";
        }
        if (j == 2 && i != 12) {
            return i + "nd";
        }
        if (j == 3 && i != 13) {
            return i + "rd";
        }
        return i + "th";
    }

})