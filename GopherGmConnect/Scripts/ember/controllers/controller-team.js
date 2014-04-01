App.TeamController = Ember.ObjectController.extend({
    needs: ['application', 'home'],
    //needs home to bind to currentsort...
    currentSortProperty: null,
    currentSortRating: null,
    currentTab: 'showRoster',
    currentSortStat: null,
    pushdate: Ember.computed.oneWay('controllers.application.pushdate'),
    teams: Ember.computed.oneWay('controllers.application.teams'),


    salary: function () {
        return numberWithCommas(this.get('salaryCapSpent'));
    }.property('salaryCapSpent'),

    //isLoaded: function () {
    //    return Ember.computed.and('linesIsLoaded', 'rosterIsLoaded', 'scheduleIsLoaded', 'statsIsLoaded');
    //},

    idWithUnderscore: function () {
        return "_" + this.get('id');
    }.property(),

    teamjsname: function () {
        return "team_" + this.get('id');
    }.property(),

    twitterLink: function () {
        return "http://twitter.com/" + this.get('twitter');
    }.property(),

    teamname: function () {
        return this.get('name');
    }.property(),

    capSpace: function () {
        return numberWithCommas(this.get('salaryCapRemaining'));
    }.property('salaryCapRemaining'),

    dasherizeName: function () {
        var t = this.get('teamjsname');
        var c = this.get('city');
        var n = this.get('teamname');
        c = c.toLowerCase();
        c = c.replace(/ /g, "-");
        n = n.replace(/ /g, "-");
        return full = c + "-" + n;
    },

    populateLines: function () {
        var topLine     = this.get('lines.topLine');
        var secondLine  = this.get('lines.secondLine');
        var thirdLine   = this.get('lines.thirdLine');
        var fourthLine  = this.get('lines.fourthLine');
        var topPair     = this.get('lines.topPair');
        var secondPair  = this.get('lines.secondPair');
        var bottomPair  = this.get('lines.bottomPair');
        var goalies     = this.get('lines.goalies');
    },

    forwardLines: function () {
        var self = this;
        var linesArray = Em.A();
        
        var populatedLines = Em.A();
        var topLine = this.get('lines.topLine');
        var secondLine = this.get('lines.secondLine');
        var thirdLine = this.get('lines.thirdLine');
        var fourthLine = this.get('lines.fourthLine');
         
        linesArray.pushObject(topLine);
        linesArray.pushObject(secondLine);
        linesArray.pushObject(thirdLine);
        linesArray.pushObject(fourthLine);

        
        linesArray.forEach(function (line) {
            var players = Em.A();
            line.forEach(function (player, idx) {                               
                var p = (self.get('players').findBy('id', player));
                switch (idx) {
                    case 0:
                        p['linePosition'] = "LW";
                        break;
                    case 1:
                        p['linePosition'] = 'C';
                        break;
                    case 2:
                        p['linePosition'] = 'RW';
                        break;
                    default:
                        throw new Error('something went wrong when setting the lines. Index not 0, 1, or 2');
                }
                players.pushObject(p);
            });
            populatedLines.pushObject(players);
        })
        return populatedLines;
    }.property('id'),




    dpairs: function () {
        var self = this;
        var linesArray = Em.A();

        var populatedLines = Em.A();
        var topLine = this.get('lines.topPair');
        var secondLine = this.get('lines.secondPair');
        var thirdLine = this.get('lines.bottomPair');

        linesArray.pushObject(topLine);
        linesArray.pushObject(secondLine);
        linesArray.pushObject(thirdLine);

        linesArray.forEach(function (line) {
            var players = Em.A();
            line.forEach(function (player, idx) {
                var p = (self.get('players').findBy('id', player));
                switch (idx) {
                    case 0:
                        p['linePosition'] = "LD";
                        break;
                    case 1:
                        p['linePosition'] = 'RD';
                        break;
                    default:
                        throw new Error('something went wrong when setting the lines. Index not 0, 1, or 2');
                }
                players.pushObject(p);
            });
            populatedLines.pushObject(players);
        })
        return populatedLines;
    }.property('id'),

    imageUrl: function () {
        var full = this.dasherizeName();
        return "/content/images/logos/59/" + full + ".png";
    }.property('teamname', 'city', 'name'),

    imageUrlMedium: function () {
        var full = this.dasherizeName();
        return "/content/images/logos/90/" + full + ".png";
    }.property('teamname', 'city', 'name'),

    imageUrlLarge: function () {
        var full = this.dasherizeName();
        return "/content/images/logos/200/" + full + ".png";
    }.property('teamname', 'city', 'name'),














    //showRoster: Ember.computed.equal('currentTab', 'showRoster'),
    //showCalendar: Ember.computed.equal('currentTab', 'showCalendar'),
    //showSalaries: Ember.computed.equal('currentTab', 'showSalaries'),
    //showStats: Ember.computed.equal('currentTab', 'showStats'),
    //showLines: Ember.computed.equal('currentTab', 'showLines'),
    //showRatings: Ember.computed.equal('currentTab', 'showRatings'),



    //updateSchedule: function () {
    //    var self = this;
    //    self.get('schedule').forEach(function (game) {
    //        var opposingTeam = game.get('opposingTeam');
    //        game.set('opposingTeam', self.get('teams').findBy('id', opposingTeam));
    //    })
    //},

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

    rankPenaltyKill: function (withSuffix) {
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
        return (++place);
    },


    //projectedPlayoffMatchup: function () {
    //    var rankConf = this.get('rankConference');
    //    if(rankConf > 8) 
    //    {
    //        return "Not in playoffs";
    //    }
    //    else
    //    {
    //        var isConfLeader = rankConf === 1 ? true : false;
    //        if (isConfLeader)
    //        {

    //        }
    //    }
    //}.property('id'),


    sortRating: function () {
        //this.get('roster').set('sortProperties', ['playerRatings.' + this.get('currentSortRating')]);
        this.set('roster', this.get('roster').sortBy('playerRatings.' + this.get('currentSortRating')).reverse());
    }.observes('currentSortRating'),

    sortStat: function () {
        if (typeof this.get('rosterFull') == 'undefined') {
            return;
        }
        var self = this;
        var fixedStat = 'singleYearStats.' + this.get('currentSortStat');
        var rosterContent = self.get('rosterFull').filterBy('isOnMainRoster', true);
        self.set('roster', rosterContent.sortBy(fixedStat).reverse());
    }.observes('currentSortStat'),


    actions: {
        showTab: function (tab) {
            switch (tab) {
                case 'showRoster':
                    this.set('currentSortProperty', 'potential');
                    break;
                case 'showSalaries':
                    this.set('currentSortProperty', 'salary');
                    break;
                case 'showRatings':
                    this.set('currentSortRating', 'speed');
                    break;
                case 'showStats':
                    this.set('currentSortStat', 'minutes')
                    break;
            }
            this.set('currentTab', tab);
        },
    },
});