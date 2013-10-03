App.PlayerController = Ember.ObjectController.extend({
    content: null,
    isLoaded: null,
    needs: ['application'],
    allTeams: Ember.computed.alias('controllers.application.teams.content'),
    team: function () {
        var self = this;
        return self.get('allTeams').findBy('id', self.get('teamId').toString());
    }.property('teamId'),
    actions: {
        getNewRatings: function () {
            var self = this;
            self.set('isNewNHL', true);      
            $.getJSON("Scripts/nhl_14_players.json").then(function (list) {
                var filtered = list.filter(function (player) {
                    return player.LastName == self.get('lastName');
                });

                if (filtered.length > 1) {
                    console.log('found more than 1....');
                    console.log(filtered);
                    console.log(filtered.length);
                    var sameLastNameList = filtered.filter(function (p) {
                        return p.FirstName == self.get('firstName');
                    });
                    
                    self.loadPlayer(parseInt(sameLastNameList[0].id));
                }
                else if (filtered.length == 1)
                {
                    console.log('found one!');
                    self.loadPlayer(parseInt(filtered[0].id));
                }
                else {
                    console.log('oh noes, ');
                    alert('oh no! I cant find that player... sorry');
                    return;
                }
            })     
        }
    }
});


App.PlayerController.reopen({
    container: App.__container__
})
