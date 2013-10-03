


var App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true
});


/*

    Do this to ensure we have a proper token before the app has started. 

*/

App.ApplicationController = Ember.Controller.extend({
    token: null,
    teams: null,
    pushdate: null
});

App.TeamsController = Ember.ArrayController.extend();

Ember.Application.initializer({
    name: "token",
    initialize: function (container, application) {
        console.log('App initializer...');
        App.deferReadiness();
        //let's start nesting json calls!
        $.getJSON("/api/gopher/GetToken", { token: sessionStorage.getItem('token') }).then(function (newToken) {
            sessionStorage.setItem('token', newToken);

            Ember.RSVP.hash({
                teams: App.Teams.getTeams(newToken),
                pushdate: App.Pushdate.find(newToken)
            }).then(function (results) {
                App.ApplicationController.reopen({
                    token: newToken,
                    teams: results.teams,
                    teamsIsLoaded: true,
                    pushdate: results.pushdate,
                    pushDateSet: true
                })
                App.advanceReadiness();
            })            
        });
    }
});

//App.register('controller:roster', App.RosterController, { singleton: false });


$('body').on('click', '.teamTabs a', function (e) {
    e.preventDefault();
    $(this).tab('show');
    $('#calendar').fullCalendar('render');
})