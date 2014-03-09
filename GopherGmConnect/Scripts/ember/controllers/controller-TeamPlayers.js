App.TeamPlayersController = Ember.ArrayController.extend({
    sortProperties: ['overall'],
    sortAscending: false,
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
    }
});