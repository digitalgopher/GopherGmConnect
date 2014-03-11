App.TeamController = Ember.ObjectController.extend({
    content: null,
    needs: ['application'],
    currentSortProperty: null,
    currentSortRating: null,
    currentTab: 'showRoster',
    currentSortStat: null,
    pushdate: Ember.computed.oneWay('controllers.application.pushdate'),
    teams: Ember.computed.oneWay('controllers.application.teams'),

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