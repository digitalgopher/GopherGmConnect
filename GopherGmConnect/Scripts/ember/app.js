


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
                //pushdate: App.Pushdate.find(newToken)
            }).then(function (results) {
                App.ApplicationController.reopen({
                    token: newToken,
                    teams: results.teams,
                    teamsIsLoaded: true,
                    //pushdate: results.pushdate,
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

console.log('imaged credit: ' + 'http://www.flickr.com/photos/slaunay/7052882117/sizes/o/in/photolist-bKeS8P-bKeS8r-8Bqujq-7E41wf-7DZbhR-7E41h1-7DZaCp-7DZbXn-7DZbvM-7DZaqR-7DZaJp-7DZa5V-7DZbqn-7E424d-7E3Zxu-7P7a3H-7yQJU7-7yLYzH-7yLYqk-7yQJBw-7yQJsf-7yLXiF-7yLYjp-7yLXsi-7yQJJS-7z1bo4-7z4Xcj-7yLYGM-7z1bWv-7z1b8i-7z1aWk-7z1av2-7z4WTu-7z4Xpb-7z4WnS-bGrVac-btwQf1-bGrhAk-bGrJnD-bGrfXD-btwwyC-bGrcj4-btxao7-btwPPb-bGrcat-bGrYn4-bGrQyV-bGrfda-bGrB7e-bGrtk2-bGs15n/');