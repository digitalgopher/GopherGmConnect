App.HomeController = Ember.ObjectController.extend({
    content: null,
    needs: ['application'],
    teams: Ember.computed.alias('controllers.application.teams'),
    teamsIsLoaded: Ember.computed.alias('controllers.application.teamsIsLoaded'),
    actions: {
        filterConference: function (conf) {
            var self = this;
            var confInt = parseInt(conf);
            if (confInt === 3)
            {
                $('#teamrankTable').removeClass('teamranks');
            }
            else {
                $('#teamrankTable').addClass('teamranks');
            }
            self.get('teams').filterConference(confInt);
        }
    },

});