App.FwdlineController = Ember.ObjectController.extend({
    needs: ['team'],
    roster: Ember.computed.alias('controllers.team.roster'),
    player: function (position) {
        return this.get('roster').findProperty('id', this.get(position));
    },
    leftW: function () {
        return this.player('lw');
    }.property(),
    rightW: function () {
        return this.player('rw');
    }.property(),
    center: function () {
        return this.player('c');
    }.property()
})