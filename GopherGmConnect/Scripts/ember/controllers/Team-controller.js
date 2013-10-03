App.TeamController = Ember.ObjectController.extend({
    content: null,
    needs: ['roster', 'teams', 'eatoken', 'application', 'team'],
    token: Ember.computed.alias('controllers.application.token'),
    team: Ember.computed.alias('controllers.team'),
    changeNavColor: function (teamabr) {
        $('#app-nav')
            .attr('class', 'navbar')
            .addClass(teamabr);
    },

    /***** Actions */
    actions: {
        sortProperty: function (property) {
            var self = this;
            var sortedContent;
            if (property == "potential") {
                self.set('filteredRoster.sortProperties', ['potentialColor', 'potential']).set('sortAscending', false);
                console.log(self.get('filteredRoster').toString());
            }
            else {
                self.set('filteredRoster.sortProperties', [property]).set('sortAscending', false);
                console.log(self.get('filteredRoster').toString());
            }
        },
        filterPosition: function (position) {
            var self = this;
            if (position === 'all') {
                self.set('filteredRoster', self.get('roster'));
            }
            else if(position === 'f') {
                var forwardLines = self.get('roster.content').filter(function (p, i, e) {
                    var pos = p.get('position');
                    if (pos == "C" || pos == "LW" || pos == "RW") {
                        return p;
                    }
                });
                self.set('filteredRoster.content', forwardLines);
            }
            else {
                self.set('filteredRoster.content', self.get('roster').filterBy('position', position));
            }
        }
    }
});