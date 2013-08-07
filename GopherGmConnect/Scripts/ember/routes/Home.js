
App.HomeRoute = Ember.Route.extend({
    model: function (params) {
        return Em.A();
    },
    setupController: function (controller, model) {
        controller.set('content', model);
        controller.get('controllers.teams').loadTeams();
        //controller.loadTeams();
    }
    ,
    renderTemplate: function () {
        var controller = this.controllerFor('home');
        // Render the `favoritePost` template into
        // the outlet `posts`, and display the `favoritePost`
        // controller.
        this.render('tlist', {
            outlet: 'teamtest',
            controller: controller
        });
        this.render('home');
    }
});