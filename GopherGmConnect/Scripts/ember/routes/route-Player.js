﻿App.PlayerRoute = Ember.Route.extend({
    model: function (params) {
        return App.Player.create({ id: params.player_id });
    },
    setupController: function (controller, model) {
        //controller.get('controllers.teams').loadTeams();
        controller.set('isLoaded', false);
        App.Player.find(model.id).then(function (player) {
            controller.setProperties({
                model: player,
                isLoaded: true,              
            })
            controller.updatePlayerTeam();
        })
    }
});