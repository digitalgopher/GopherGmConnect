
App.Playersearch = Ember.TextField.extend({
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
            router = self.get('controller.target.router');
            var player = App.Player.create({
                id: datum.id
            });
            router.transitionTo('player', player);
        })
    },
    //attributeBinding: ['placeholder'],
    placeholder: "Player Search",
    classNames: ['search-query', 'form-control'],
    attributeBindings: ["style", "placeholder"],
    style: function () {
        return "width: 275px";
    }.property(),
    valueChange: function (event) {
        var self = this;
        var v = event.get('value');

        //this.$().typeahead({
        //    minLength: 3,
        //    updater: function (item) {
        //        router = self.get('controller.target.router');
        //        var id = (self.get('map')[item].id);
        //        var player = App.Player.create({
        //            id: id
        //        });
        //        router.transitionTo('player', player);
        //    },
        //    source: function (query, process) {
        //        players = [];
        //        var data = PLAYERS;
        //        $.each(data, function (i, player) {
        //            self.map[player.FirstName + " " + player.LastName] = player;
        //            players.push(player.FirstName + " " + player.LastName);
        //        });
        //        process(players);
        //    },
        //    //source: function (v, process) {
        //    //    console.log('blah');
        //    //    var playerNames = [];
        //    //    $.getJSON("/api/values/searchplayers", { searchterm: v }, function (response) {
        //    //        process(response);
        //    //        $.each(response.Players, function (index, data) {
        //    //            var name = this.FirstName + " " + this.LastName + " " + this.overall;
        //    //            playerNames.push(name);
        //    //            self.get('map')[name] = data;
        //    //        });
        //    //        return process(playerNames);
        //    //    })
        //    //}
        //});
    }.observes('value')
});