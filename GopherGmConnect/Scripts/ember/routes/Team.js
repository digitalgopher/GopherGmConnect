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
        var token = this.controllerFor('application').get('token');
        var team = this.controllerFor('application').get('teams').findBy('id', model.get('id'));
        var twittername = team.get('twitter');
        controller.setProperties({
            model: team
        });
        App.Team.find(token, model.id, twittername).then(function (_team) {
            controller.setProperties({
                model: _team,
                rosterIsLoaded: true,
                scheduleIsLoaded: true,
                linesIsLoaded: true,
                isLoaded: true,
                twitterIsLoaded: true,
            });
            _team.findFastestPlayer();
            _team.findBestOverallPlayer();
            _team.findBestShooter();
            _team.findStrongestPlayer();

        })

    }
});