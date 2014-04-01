App.PlayerStatsRoute = Ember.Route.extend({
    model: function () {
        return this.modelFor('player');
    },
    setupController: function (controller, model) {
        this._super(controller, model);
    },
})