App.TeamPlayersView = Ember.View.extend({
    willInsertElement: function () {
        NProgress.start();
    },
    didInsertElement: function () {
        NProgress.done();
    }
})