App.TeamStatsRoute = Ember.Route.extend({
    model: function (params) {
        return this.modelFor('team');
    },
    setupController: function (controller, model) {
        this._super(controller, model);
    }
})