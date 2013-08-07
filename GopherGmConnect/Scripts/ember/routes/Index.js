App.IndexRoute = Ember.Route.extend({
    redirect: function () {
        //this.transitionTo('home');
        this.transitionToAnimated('home', { main: 'flip' });
    }
});