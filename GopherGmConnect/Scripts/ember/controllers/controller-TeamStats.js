App.TeamStatsController = Ember.ObjectController.extend({
    needs: ['application', 'team'],
    teams: Ember.computed.oneWay('controllers.application.teams'),

    lastTenWins: function () {
        return this.get('lastTenRecord').split('-')[0];
    }.property('team'),

    lastTenLosses: function () {
        return this.get('lastTenRecord').split('-')[1];
    }.property('team'),

    lastTenOvertimeLosses: function () {
        return this.get('lastTenRecord').split('-')[2];
    }.property('team'),
})