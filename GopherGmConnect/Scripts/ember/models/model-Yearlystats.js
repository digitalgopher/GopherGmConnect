App.Yearlystats = Ember.Object.extend({
    yearWithHash: function () {
        var self = this;
        return "#" + self.get('year');
    }.property('year'),
    pointspergame: function () {
        var self = this;
        var ppg = self.get('points') / self.get('gamesPlayed');
        return ppg.toFixed(2);
    }.property("gamesPlayed", "points")
})
