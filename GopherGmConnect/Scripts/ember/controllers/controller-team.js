App.TeamController = Ember.ObjectController.extend({
    content: null,
    needs: ['application'],
    currentSortProperty: null,
    currentSortRating: null,
    currentTab: 'showRoster',
    currentSortStat: null,
    pushdate: Ember.computed.readOnly('controllers.application.pushdate'),
    teams: Ember.computed.readOnly('controllers.application.teams'),

    showRoster: Ember.computed.equal('currentTab', 'showRoster'),
    showCalendar: Ember.computed.equal('currentTab', 'showCalendar'),
    showSalaries: Ember.computed.equal('currentTab', 'showSalaries'),
    showStats: Ember.computed.equal('currentTab', 'showStats'),
    showLines: Ember.computed.equal('currentTab', 'showLines'),
    showRatings: Ember.computed.equal('currentTab', 'showRatings'),

    
    

    updateSchedule: function () {
        var self = this;
        self.get('schedule').forEach(function (game) {
            var opposingTeam = game.get('opposingTeam');
            game.set('opposingTeam', self.get('teams').findBy('id', opposingTeam));
        })
    },
    sortRating: function () {
        //this.get('roster').set('sortProperties', ['playerRatings.' + this.get('currentSortRating')]);
        this.set('roster', this.get('roster').sortBy('playerRatings.' + this.get('currentSortRating')).reverse());
    }.observes('currentSortRating'),

    propertySort: function () {
        var r = this.get('roster');
        if (r === null) {
            return;
        }

        var self = this;
        var property = self.get('currentSortProperty');
        self.propertyWillChange('roster');
        if (property == 'potential') {
            //self.get('roster').sortBy('potential', 'potentialColor').reverse();
            self.set('roster', this.get('rosterFull').sortBy('potential', 'potentialColor').reverse());
        }
        else {
            //self.get('roster').sortBy(property).reverse();
            self.set('roster', this.get('rosterFull').sortBy(property).reverse());
        }
        self.propertyDidChange('roster');
     }.observes('currentSortProperty'),

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
        sortByStat: function (stat) {
            this.set('currentSortStat', stat);
        },

        sortByRating: function (rating) {
            var self = this;
            self.set('currentSortRating', rating);
        },

        sortByProperty: function (property) {
            this.set('currentSortProperty', property);
        },

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