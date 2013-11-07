App.TeamController = Ember.ObjectController.extend({
    content: null,
    needs: [/*'roster',*/ 'teams', 'eatoken', 'application', 'team'],
    token: Ember.computed.alias('controllers.application.token'),
    team: Ember.computed.alias('controllers.team'),
    //bestPlayer: Ember.computed.alias('roster.content.bestPlayer'),
    changeNavColor: function (teamabr) {
        $('#app-nav')
            .attr('class', 'navbar')
            .addClass(teamabr);
    },


    tweetsLoaded: function () {
        var self = this;
        if (self.get('twitterIsLoaded')) {
            $('#Team-Box').css({'max-height': 'auto'});
            console.log('ooomog');
        }
    }.observes('twitterIsLoaded'),

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
                self.set('filteredRoster.content', self.get('roster.content'));
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
                self.set('filteredRoster.content', self.get('roster.content').filterBy('position', position));
            }
        }
    }
});