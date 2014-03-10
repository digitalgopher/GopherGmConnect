﻿App.TeamRoute = Ember.Route.extend({
    

    model: function (params, transition) {
        return App.Team.find(params.team_id);
    },


    setupController: function (controller, model) {
        var isDownloadTeam = model.get('isLoaded');
        if (isDownloadTeam) {
            var team = this.controllerFor('application').get('teams').findBy('id', model.get('id'));
            model.setProperties
                ({
                    city: team.get('city'),
                    name: team.get('name'),
                    abr: team.get('abr'),
                    twitter: team.get('twitter'),
                    isFullyLoaded: true,
                });
        }
        else {
            App.Team.find(model.get('id')).then(function (_team) {
                model.setProperties(_team);
                model.set('isFullyLoaded', true);
            });
        }
        controller.set('model', model);
    }
});