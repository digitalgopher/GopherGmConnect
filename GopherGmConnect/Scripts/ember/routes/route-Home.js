App.HomeRoute = Ember.Route.extend({
    model: function (params) {
        return this.controllerFor('application').get('teams');
    },
    setupController: function (controller, model) {
        controller.set('isLoaded', false);
        controller.set('content', this.controllerFor('application').get('teams'));
        controller.set('isLoaded', true);
    }
});