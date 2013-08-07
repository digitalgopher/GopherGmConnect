
App.PlayerRoute = Ember.Route.extend({
    model: function (params) {
        return App.Player.create({ id: params.player_id });
    },
    setupController: function (controller, model) {
        controller.set('content', model);
        if (typeof model.id === 'undefined') {
            controller.loadPlayer(model);
        }
        else {
            controller.loadPlayer(model.id);
        }
        controller.get('controllers.teams').loadTeams();
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
        this.render('player');
    }
});