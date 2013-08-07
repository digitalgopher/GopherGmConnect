App.HomeController = Ember.ObjectController.extend({
    content: null,
    needs: ['teams'],
    loadTeams: function () {
        var self = this;
    },

    filterConference: function (conf) {
        var self = this;
        var confInt = parseInt(conf);

        if (confInt == 3) {
            $('#teamrankTable').removeClass('teamranks');
            self.get('controllers.teams').set('sortedTeams', self.get('controllers.teams').get('content'));
            return;
        }
        self.get('controllers.teams').set('sortedTeams', self.get('controllers.teams').get('content').filterProperty('conference', confInt));
    }
});