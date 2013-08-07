App.TradeRoute = Ember.Route.extend({
    model: function (params) {
        return App.Trade.create();
    },
    setupController: function (controller, model) {
        controller.set('content', model);
        controller.get('controllers.teams').loadTeams();
        controller.loadTeams();
    }
});