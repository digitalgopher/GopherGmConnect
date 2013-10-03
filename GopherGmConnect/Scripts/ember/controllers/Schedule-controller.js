App.ScheduleController = Ember.ObjectController.extend({
    needs: ['application', 'team'],
    pushDate: Ember.computed.alias('controllers.application.pushdate'),
    teams: Ember.computed.alias('controllers.application.teams')
})