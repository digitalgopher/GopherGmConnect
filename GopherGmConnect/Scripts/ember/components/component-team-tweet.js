App.TeamTweetComponent = Ember.Component.extend({
    tagName: ['div'],
    classNames: ['row tweet'],
    didInsertElement: function () {
        this.$().hide();
        this.$().slideDown();
    },
});