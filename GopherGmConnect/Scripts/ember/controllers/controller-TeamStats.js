App.TeamStatsController = Ember.ObjectController.extend({
    needs: ['application', 'team'],
    teams: Ember.computed.oneWay('controllers.application.teams'),
})