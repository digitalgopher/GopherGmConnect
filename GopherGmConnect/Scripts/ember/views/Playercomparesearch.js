
App.Playercomparesearch = Ember.TextField.extend({
    map: {},
    didInsertElement: function () {
        var self = this;
        console.log(self.$());
        this.$().typeahead({
            name: 'player_list',
            local: player_list,
            template: '<p><img style="width: 40px" src="{{ImageUrl}}"/>{{value}} ({{Overall}})</p>',
            engine: Hogan
        });

        this.$().on("typeahead:selected", function (a, datum) {
            //router = self.get('controller');
            var ap = App.Player.create({
                id: self.get('targetObject.content').get('id')
                //id: self.get('context').get('id')
            });
            var bp = App.Player.create({
                id: datum.id
            })

            var players = Em.A();
            players.pushObject(ap);
            players.pushObject(bp);
            //router.transitionToRoute('playercompare', players);
            //self.transitionTo('playercompare', players);
            self.get('targetObject').transitionToRoute('playercompare', players);
        })
    },
    attributeBindings: ['placeholder', 'style'],
    placeholder: "Compare to...",
    classNames: ['search-query', 'form-control'],
    style: function () {
        return "width: 400px";
    }.property(),

    //valueChange: function (event) {
    //    var self = this;
    //    var v = event.get('value');
    //    this.$().typeahead({
    //        minLength: 3,
    //        updater: function (item) {
    //            router = self.get('controller');
    //            var seachedPlayerId = (self.get('map')[item].id);
    //            var ap = App.Player.create({
    //                id: self.get('context').get('id')
    //            });
    //            var bp = App.Player.create({
    //                id: seachedPlayerId
    //            })

    //            var players = Em.A();
    //            players.pushObject(ap);
    //            players.pushObject(bp);
    //            var player = App.Playercompare.create({

    //            });
    //            router.transitionToRoute('playercompare', players);
    //        },
    //        source: function (query, process) {
    //            players = [];
    //            var data = PLAYERS;
    //            $.each(data, function (i, player) {
    //                self.map[player.FirstName + " " + player.LastName] = player;
    //                players.push(player.FirstName + " " + player.LastName);
    //            });
    //            process(players);
    //        }
    //    });
    //}.observes('value')
});