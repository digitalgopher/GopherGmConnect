App.PlayerController = Ember.ObjectController.extend({
    content: null,
    isLoaded: null,
    needs: ['application'],
    allTeams: Ember.computed.alias('controllers.application.teams'),
    updatePlayerTeam: function () {
        var self = this;
        var playerTeam = self.get('allTeams').findBy('id', self.get('teamId').toString());
        self.set('team', playerTeam);
    },
    actions: {
    }
});


App.PlayerController.reopen({
    container: App.__container__
})
