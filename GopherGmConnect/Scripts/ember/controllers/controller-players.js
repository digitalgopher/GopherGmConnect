App.PlayersController = Ember.ArrayController.extend({
    needs: ['team'],
    sortProperties: ['overall'],
    sortAscending: false,
    itemController: 'player',
    


    showLineup: true,
    showRoster: false,



    showUnsigned: false,
    showStats: true,
    showBasicInfo: false,
    forwardLines: Ember.computed.oneWay('controllers.team.forwardLines'),

    goalies: Ember.computed.filterBy('arrangedContent', 'isGoalie', true),
    defence: Ember.computed.filterBy('arrangedContent', 'isDefence', true),
    forwards: Ember.computed.filterBy('arrangedContent', 'isForward', true),

    propertySort: function () {
        var self = this;
        var property = self.get('currentSortProperty');
        if (property == 'potential') {
            self.set('sortProperties', ['potential', 'potentialColor']);
            //self.set('roster', this.get('rosterFull').sortBy('potential', 'potentialColor').reverse());
        }
        else {
            self.set('sortProperties', [property]);
            //self.get('roster').sortBy(property).reverse();
            //self.set('roster', this.get('rosterFull').sortBy(property).reverse());
        }

    }.observes('currentSortProperty'),

    onContentChange: function () {
        console.log('changed');
    }.observes('content'),



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

        toggleView: function () {
            this.toggleProperty('showStats');
            this.toggleProperty('showBasicInfo');
        },

        toggleTest: function () {
            this.toggleProperty('showLineup');
            this.toggleProperty('showRoster');
        }


    }
});