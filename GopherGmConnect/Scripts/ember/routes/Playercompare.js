
App.PlayercompareRoute = Ember.Route.extend({
    serialize: function (model) {
        return {
            aplayer_id: model.objectAt(0).id,
            bplayer_id: model.objectAt(1).id
        }
    },
    model: function (params) {
        var aPlayer = App.Player.create({ id: params.aplayer_id });
        var bPlayer = App.Player.create({ id: params.bplayer_id });
        var abplayers = Em.A();
        abplayers.pushObject(aPlayer);
        abplayers.pushObject(bPlayer);
        return abplayers;

        //var aPlayer = App.Player.create({ id: this.modelFor('player').id });
        //var bPlayer = App.Player.create({ id: params.anotherplayer_id });
        //var abplayers = Em.A();
        //abplayers.pushObject(aPlayer);
        //abplayers.pushObject(bPlayer);
        //return abplayers;

        //return App.Player.create({id: params.anotherplayer_id});
    },
    setupController: function (controller, model) {
        //var bothPlayers = Em.A();
        //var ap = App.Player.create({ id: controller.get('controllers.player').get('content') });
        //bothPlayers.pushObject(model);
        //bothPlayers.pushObject(ap);
        //model = bothPlayers;
        controller.set('content', model);
        controller.loadPlayers();
    }
});