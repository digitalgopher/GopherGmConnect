var App = Ember.Application.create({
    //LOG_TRANSITIONS: true,
    //LOG_BINDINGS: true

});
App.register('controller:roster', App.RosterController, { singleton: false });

