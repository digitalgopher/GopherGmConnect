App.TeamSmallplayerComponent = Ember.Component.extend({
    tagName: ['div'],
    classNames: [],
    didInsertElement: function () {
        this.$().hide();
        this.$().fadeIn('slow');
    },
});