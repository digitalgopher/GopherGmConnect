
App.TopplayersRoute = Ember.Route.extend({
    model: function (params) {
        return Em.Object.create();
    },
    setupController: function (controller, model) {
        var token = this.controllerFor('application').get('token');
        App.Player.findTopPlayers(token).then(function (_loadedPlayers) {
            controller.setProperties({
                model: _loadedPlayers,
                playersIsLoaded: true
            })
        });
    }
});