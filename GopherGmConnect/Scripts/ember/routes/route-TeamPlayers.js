App.TeamPlayersRoute = Ember.Route.extend({
    model: function () {
        return this.modelFor('team').get('players');
    },
    setupController: function (controller, model) {
        this._super(controller, model);
    }
})