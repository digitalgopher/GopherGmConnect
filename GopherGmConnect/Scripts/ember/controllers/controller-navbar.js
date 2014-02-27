App.NavbarController = Ember.Controller.extend({
    needs: ['application'],
    title: Ember.computed.alias("controllers.application.title")
});