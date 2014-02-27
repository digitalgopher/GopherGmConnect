App.GameController = Ember.ObjectController.extend({
    needs: ['teams'],
    awayTeam: function () {
        var self = this;
        var team = self.get('controllers.teams').get('content').findProperty('id', self.get('awayTeamId').toString());
        return team;
    }.property(),
    homeTeam: function () {
        var self = this;
        var team = self.get('controllers.teams').get('content').findProperty('id', self.get('homeTeamId').toString());
        return team;
    }.property(),
    //using toString() because the schedule is coming from a js file that has them as ints... 
    //TODO change ints to strings in seasonSchedule.js
    homeImage: function () {
        var self = this;
        var url = self.get('controllers.teams').get('content').findProperty('id', self.get('homeTeamId').toString()).get('imageUrl');
        return url;
    }.property('controllers.teams'),
    awayImage: function () {
        var self = this;
        var url = self.get('controllers.teams').get('content').findProperty('id', self.get('awayTeamId').toString()).get('imageUrl');
        return url;
    }.property('controllers.teams'),
})