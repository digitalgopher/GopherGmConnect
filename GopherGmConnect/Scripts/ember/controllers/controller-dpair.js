App.DpairController = Ember.ObjectController.extend({
    needs: ['team'],
    roster: Ember.computed.alias('controllers.team.roster'),
    player: function (position) {
        return this.get('roster').findProperty('id', this.get(position));
    },
    leftD: function () {
        return this.player('ld');
    }.property(),
    rightD: function () {
        return this.player('rd');
    }.property()
})