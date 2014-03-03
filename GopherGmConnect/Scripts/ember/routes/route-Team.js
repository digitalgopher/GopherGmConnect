App.TeamRoute = Ember.Route.extend({
    //beforeModel: function (params, transition) {
    //    if (!this.controllerFor('application').get('teamsIsLoaded')) {
    //        this.controllerFor('application').addObserver('teamsIsLoaded', function () {
    //            alert('ooooomg');
    //        });
    //    }
    //},
    model: function (params, transition) {
        return App.Team.create({
            id: params.team_id
        });
    },
    setupController: function (controller, model) {
        
        var team = this.controllerFor('application').get('teams').findBy('id', model.get('id'));
        
        //team.setProperties(model);
        var twittername = team.get('twitter');

        controller.set('model', team);


        controller.setProperties({
            twitterIsLoaded: false,
            rosterIsLoaded: false,
            scheduleIsLoaded: false,
            isLoaded: false,
            linesIsLoaded: false,
            currentTab: 'showRoster',
            currentSortProperty: null,
            currentSortRating: null,
            currentSortStat: null,
            roster: null,
        })



        App.Tweet.findAll(twittername).then(function (result) {
            team.setProperties({
                tweets: result,
                twitterIsLoaded: true
            });
        });

        

        App.Team.find(team.id).then(function (_team) {
            team.setProperties(_team);
            team.setProperties({
                rosterIsLoaded: true,
                scheduleIsLoaded: true,
                isLoaded: true,
            });

            App.Line.findAll(team.id).then(function (lines) {
                team.setProperties({
                    linesIsLoaded: true,
                    lines: lines,
                })
            });

            //model.setProperties(team);
            //team.setProperties(model);
            controller.set('model', team);
            controller.setProperties({
                roster: App.PlayersController.create({ content: team.roster })
            })
            //controller.setProperties(team);
            controller.updateSchedule();
        })
        
        
    }
});