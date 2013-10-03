App.TradeRoute = Ember.Route.extend({
    model: function (params) {
        return App.Trade.create();
    },
    setupController: function (controller, model) {
        controller.set('content', model);
    }
});