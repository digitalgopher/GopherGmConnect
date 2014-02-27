
App.PlayercompareRoute = Ember.Route.extend({
    serialize: function (model) {
        return {
            aplayer_id: model.objectAt(0).id,
            bplayer_id: model.objectAt(1).id
        }
    },
    model: function (params) {
        var tempPlayers = App.Playercompare.create();
        var aPlayer = App.Player.create({ id: params.aplayer_id });
        var bPlayer = App.Player.create({ id: params.bplayer_id });
        var abplayers = Em.A();
        abplayers.pushObject(aPlayer);
        abplayers.pushObject(bPlayer);
        tempPlayers.set('content', abplayers);
        return tempPlayers;
    },
    setupController: function (controller, model) {
        var token = this.controllerFor('application').get('token');
        App.Playercompare.findBoth(model.objectAt(0).id, model.objectAt(1).id, token).then(function (_bothPlayersArray) {
            controller.setProperties({
                aPlayer: _bothPlayersArray.objectAt(0),
                bPlayer: _bothPlayersArray.objectAt(1),
                compareLoaded: true,
                isLoaded: true,
                testing: "aaaa"
            })
        });

    }
});