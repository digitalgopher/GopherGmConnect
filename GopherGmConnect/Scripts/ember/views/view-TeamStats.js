App.TeamStatsView = Ember.View.extend({
    willInsertElement: function () {
        NProgress.start();
    },
    didInsertElement: function () {
        Ember.run.scheduleOnce('afterRender', this, function () {
            Pizza.init();
            NProgress.done();
        });
    }
})