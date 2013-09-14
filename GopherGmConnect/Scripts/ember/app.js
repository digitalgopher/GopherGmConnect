var App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true
});
App.register('controller:roster', App.RosterController, { singleton: false });


$('body').on('click', '.teamTabs a', function (e) {
    e.preventDefault();
    $(this).tab('show');
    $('#calendar').fullCalendar('render');
})