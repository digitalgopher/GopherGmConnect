App.TopplayersController = Ember.ObjectController.extend({
    needs: ['eatoken', 'teams'],
    sessionToken: function () {
        var self = this;
        return self.get('controllers.eatoken.token');
    },
    readyToLoadPlayers: function () 
    {
        var self = this;
        if (self.sessionToken() && self.get('controllers.teams.content')) {
            self.loadPlayers();
        }
        
    }.observes('controllers.teams.content', 'controllers.eatoken.token'),
    sessionTokenChanged: function () {
        var self = this;
        self.loadPlayers();
    }.observes('controllers.eatoken.token'),
    loadPlayers: function () {
        var self = this;
        
    },
    sortStat: function (property) {
        var self = this;
        property = "singleYearStats." + property;
        self.get('roster').set('sortProperties', [property]).set('sortAscending', false);
        //self.get('controllers.roster').set('sortProperties', [property]).set('sortAscending', false);
    },
})