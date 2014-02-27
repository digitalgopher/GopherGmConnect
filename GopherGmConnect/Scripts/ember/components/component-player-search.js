App.PlayerSearchComponent = Ember.TextField.extend({
    map: {},
    didInsertElement: function () {
        var self = this;
        self.$().typeahead({
            name: 'playersearch',
            valueKey: 'id',
            remote: {             
                url: '/api/gopher/playersearch?query=%QUERY',
                filter: function (parseResponse) {
                    return parseResponse;
                },
            },
            template: [
                '<h5>{{firstName}} {{lastName}} - Overall: {{overall}} <span class="potentialColor"><i class="fa fa-star {{potentialColorString}}"></i></span> {{potential}}</h5>'
            ].join(''),            
            engine: Hogan
        });

        //$('.tt-query').css('background-color', '#fff');

        self.$().on("typeahead:selected", function (a, datum) {
            //router = self.get('controller.target.router');
            var player = App.Player.create({
                id: datum.id
            });
            self.get('targetObject').transitionTo('player', player);
            //self.controller.send('testing', player);

            //self.sendAction('gotoPlayerPage', player);
            //self.get('parentView.controller').send('testing', player);
            //self.get('parentView.controller').transitionToRoute('player', player);            
        })
    },
    //attributeBinding: ['placeholder'],
    placeholder: "Player Search",
    classNames: ['search-query', 'form-control'],
    attributeBindings: ["style", "placeholder"],
    style: function () {
        return "width: 345px";
    }.property(),
    //valueChange: function (event) {
    //    var self = this;
    //    var v = event.get('value');

    //    //this.$().typeahead({
    //    //    minLength: 3,
    //    //    updater: function (item) {
    //    //        router = self.get('controller.target.router');
    //    //        var id = (self.get('map')[item].id);
    //    //        var player = App.Player.create({
    //    //            id: id
    //    //        });
    //    //        router.transitionTo('player', player);
    //    //    },
    //    //    source: function (query, process) {
    //    //        players = [];
    //    //        var data = PLAYERS;
    //    //        $.each(data, function (i, player) {
    //    //            self.map[player.FirstName + " " + player.LastName] = player;
    //    //            players.push(player.FirstName + " " + player.LastName);
    //    //        });
    //    //        process(players);
    //    //    },
    //    //    //source: function (v, process) {
    //    //    //    console.log('blah');
    //    //    //    var playerNames = [];
    //    //    //    $.getJSON("/api/values/searchplayers", { searchterm: v }, function (response) {
    //    //    //        process(response);
    //    //    //        $.each(response.Players, function (index, data) {
    //    //    //            var name = this.FirstName + " " + this.LastName + " " + this.overall;
    //    //    //            playerNames.push(name);
    //    //    //            self.get('map')[name] = data;
    //    //    //        });
    //    //    //        return process(playerNames);
    //    //    //    })
    //    //    //}
    //    //});
    //}.observes('value')
});