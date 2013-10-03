
App.TopplayersRoute = Ember.Route.extend({
    model: function (params) {
        return Em.Object.create();
    },
    setupController: function (controller, model) {
        var token = this.controllerFor('application').get('token');
        App.Roster.findTopPlayers(token).then(function (_loadedRoster) {
            controller.setProperties({
                model: _loadedRoster,
                playersIsLoaded: true
            })
        });
    }
});