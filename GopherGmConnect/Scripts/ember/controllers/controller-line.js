App.LineController = Ember.ObjectController.extend({
    needs: ['team'],
    playerAtPosition: function (position) {
        var self = this;
        //debugger;
       // return self.get('controllers.team').get('roster.players').findProperty('id', self.get(position));
    },
    centre: function () {
        var self = this;
        return self.playerAtPosition('C');
    }.property('controllers.team'),
    leftW: function () {
        var self = this;
        return self.playerAtPosition('LW');
    }.property(),
    rightW: function () {
        var self = this;
        return self.playerAtPosition('RW');
    }.property('controllers.team'),
    leftD: function () {
        var self = this;
        return self.playerAtPosition('LD');
    }.property('controllers.team'),
    rightD: function () {
        var self = this;
        return self.playerAtPosition('RD');
    }.property('controllers.team'),
    goalie: function () {
        var self = this;
        return self.playerAtPosition('G1');
    }.property('controllers.team')
});