//Ember.STRUCTURED_PROFILE = true;




var App = Ember.Application.create({
    //LOG_TRANSITIONS: true,
    ////LOG_TRANSITIONS_INTERNAL: true,
    //LOG_VIEW_LOOKUPS: true,
    //LOG_ACTIVE_GENERATION: true,
    LOG_BINDINGS: true,
});


Ember.RSVP.configure('onerror', function (error) {
    // ensure unhandled promises raise awareness.
    // may result in false negatives, but visibility is more imporant
    if (error instanceof Error) {
        Ember.Logger.assert(false, error);
        Ember.Logger.error(error.stack);
    }
});


/*

    Do this to ensure we have a proper token before the app has started. 

*/

App.ApplicationController = Ember.Controller.extend({
    token: null,
    teams: null,
    pushdate: null,
    isLite: false
});

App.TeamsController = Ember.ArrayController.extend();

Ember.Application.initializer({
    name: "token",
    initialize: function (container, application) {
        NProgress.start();
        console.log('app start ' + new Date());
        App.deferReadiness();
        $.getJSON('Scripts/static/teams.json', function (basicTeams) {
            NProgress.inc();
            Ember.RSVP.hash({
                teams: App.Team.findAll(),
                pushdate: App.Pushdate.find()
            }).then(function (results) {

                basicTeams.forEach(function (_team, idx) {
                    results.teams.findBy('id', _team.id).setProperties(_team);
                })

                NProgress.set(0.7);

                //var teamsController = App.TeamsController.create();
                //teamsController.setProperties({
                //    content: results.teams
                //});



                App.ApplicationController.reopen({
                    teams: results.teams,
                    pushdate: results.pushdate,
                    teamsIsLoaded: true,
                });

             
                App.advanceReadiness();

            });
        });


        //$.getJSON("/api/gopher/GetToken", { token: sessionStorage.getItem('token') }).then(function (newToken) {
        //    sessionStorage.setItem('token', newToken);

        //    Ember.RSVP.hash({
        //        teams: App.Teams.getTeams(newToken),

        //        //pushdate: App.Pushdate.find(newToken)
        //    }).then(function (results) {
        //        App.ApplicationController.reopen({
        //            token: newToken,
        //            teams: results.teams,
        //            teamsIsLoaded: true,
        //            //pushdate: results.pushdate,
        //            pushDateSet: true
        //        })
        //        App.advanceReadiness();
        //    })            
        //});
    }
});


App.ready = function () {
    console.log('app set up ' + new Date());
    $('#initial-load').slideUp(function () {
        this.remove();
    });

    NProgress.done();
}

//App.register('controller:roster', App.RosterController, { singleton: false });


//$('body').on('click', '.teamTabs a', function (e) {
//    e.preventDefault();
//    $(this).tab('show');
//    $('#calendar').fullCalendar('render');
//});

