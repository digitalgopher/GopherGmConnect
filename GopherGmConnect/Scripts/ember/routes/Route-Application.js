App.ApplicationRoute = Ember.Route.extend({
    actions: {
        selectTab: function (name) {
            this.controllerFor('team').set('activeTab', name);
            this.render(name, {
                into: 'team',
                outlet: 'teammain',
                controller: this.controllerFor('team'),
            });
            Ember.run.scheduleOnce('afterRender', this, function () {
                Pizza.init();
            })           
        },
    },
})