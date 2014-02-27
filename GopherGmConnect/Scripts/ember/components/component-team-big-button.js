App.TeamBigbuttonComponent = Ember.Component.extend({
    tagName: ['a'],
    classNames: ['team-info-button'],
    attributeBindings: ['data-toggle', 'href'],
    href: function () {
        return '#' + this.tabContentId;
    }.property(),
    actions: {
        mycoolaction: function (sorter) {
            this.sendAction('mycoolaction', sorter);       
        },

        showTab: function () {
            this.sendAction('showTab', this.get('tabToShow'));
        }
    }
});