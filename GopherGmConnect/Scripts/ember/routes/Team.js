App.TeamRoute = Ember.Route.extend({
    model: function (params) {
        return App.Team.create({ id: params.team_id });
    },
    setupController: function (controller, model) {
        controller.set('content', model);
        model.loadTeam();
        controller.loadSchedule();
        //controller.loadTeam(model.id);
        controller.get('controllers.teams').loadTeams();
    }
    //renderTemplate: function () {
    //    //var controller = this.controllerFor('home');
    //    //// Render the `favoritePost` template into
    //    //// the outlet `posts`, and display the `favoritePost`
    //    //// controller.
    //    //this.render('tlist', {
    //    //    outlet: 'teamtest',
    //    //    controller: controller
    //    //});
    //    //this.render('team');
    //}
});