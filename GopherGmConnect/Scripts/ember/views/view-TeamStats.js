App.TeamStatsView = Ember.View.extend({
    didInsertElement: function () {
        Ember.run.scheduleOnce('afterRender', this, function () {
            Pizza.init();
        });
    }
})