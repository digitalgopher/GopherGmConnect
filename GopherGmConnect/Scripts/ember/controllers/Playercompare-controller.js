App.PlayercompareController = Ember.ObjectController.extend({
    needs: ['player', 'eatoken'],
    content: null,
    loadPlayers: function () {
        var self = this;
        var aPlayer = App.Player.create();
        var bPlayer = App.Player.create();
        self.set('aPlayer', aPlayer);
        self.set('bPlayer', bPlayer);

        self.set('aPlayer', self.get('controllers.player').loadPlayer(self.get('content').objectAt(0).get('id')));
        self.set('bPlayer', self.get('controllers.player').loadPlayer(self.get('content').objectAt(1).get('id')));

        self.get('aPlayer').addObserver('playerIsLoaded', function () {
            self.checkPlayerLoaded();
        });

        self.get('bPlayer').addObserver('playerIsLoaded', function () {
            self.checkPlayerLoaded();
        });

    },
    checkPlayerLoaded: function () {
        var self = this;
        if (self.get('aPlayer').get('playerIsLoaded') && self.get('bPlayer').get('playerIsLoaded')) {
            self.set('compareLoaded', true);
        }
    }

})