App.PlayerRoute = Ember.Route.extend({
    model: function (params) {
        return this.modelFor('team').get('players').findBy('id', params.player_id)
    }
})