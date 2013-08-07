
App.TopplayersRoute = Ember.Route.extend({
    model: function (params) {
        return Em.Object.create();
    },
    setupController: function (controller, model) {
        controller.set('content', model);
        controller.loadPlayers();
    }
});