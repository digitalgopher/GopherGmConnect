App.GameController = Ember.ObjectController.extend({
    needs: ['teams'],
    homeImage: function () {
        var self = this;
        var url = self.get('controllers.teams').get('content').findProperty('id', self.get('homeTeam')).get('imageUrl');
        return url;
    }.property('controllers.teams'),
    awayImage: function () {
        var self = this;
        var url = self.get('controllers.teams').get('content').findProperty('id', self.get('awayTeam')).get('imageUrl');
        return url;
    }.property('controllers.teams'),
})