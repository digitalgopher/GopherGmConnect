
App.TeamsController.reopen({
    needs: ['application'],
    sortProperties: ['Points'],
    actions: {
        filterConference: function (x) {
            alert('ooomog');
        }
    },
    sortAscending: false,
    sessionToken: Ember.computed.alias('controllers.application.token'),
});