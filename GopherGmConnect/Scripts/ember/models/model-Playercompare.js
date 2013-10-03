App.Playercompare = Ember.ArrayProxy.extend({
    content: null
})

App.Playercompare.reopenClass({
    findBoth: function (pid, pid2, token) {
        return Ember.RSVP.hash({
            aPlayer: App.Player.find(pid, token),
            bPlayer: App.Player.find(pid2, token)
        }).then(function (results) {
            var bothPlayers = App.Playercompare.create();
            var bothPlayersTempArray = Em.A();
            bothPlayersTempArray.pushObject(results.aPlayer);
            bothPlayersTempArray.pushObject(results.bPlayer);
            bothPlayers.set('content', bothPlayersTempArray);
            return bothPlayers;
        });
    }

})