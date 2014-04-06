App.PlayersController = Ember.ArrayController.extend({
    needs: ['team'],
    sortProperties: ['overall'],
    sortAscending: false,
    itemController: 'player',
    


    showLineup: true,
    showRoster: false,
    showSalaries: false,



    showUnsigned: false,
    showStats: true,
    showBasicInfo: false,
    forwardLines: Ember.computed.oneWay('controllers.team.forwardLines'),

    goalies: Ember.computed.filterBy('arrangedContent', 'isGoalie', true),
    defence: Ember.computed.filterBy('arrangedContent', 'isDefence', true),
    forwards: Ember.computed.filterBy('arrangedContent', 'isForward', true),
    nonroster: Ember.computed.filterBy('arrangedContent', 'isOnMainRoster', false),

    propertySort: function (property) {
        var self = this;
        if (property == 'potential') {
            self.set('sortProperties', ['potential', 'potentialColor']);
        }
        else {
            self.set('sortProperties', [property]);
        }
    },

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
            //this.set('currentSortProperty', property);
            Ember.run.once(this, this.propertySort, property);
        },

        toggleView: function () {
            this.toggleProperty('showStats');
            this.toggleProperty('showBasicInfo');
        },

        toggleTest: function () {
            this.set('showLineup', false);
            this.set('showRoster', true);
            this.set('showSalaries', false);;
        },

        toggleTestAgain: function () {
            this.set('showLineup', false);
            this.set('showRoster', false);
            this.set('showSalaries', true);
        }


    }
});