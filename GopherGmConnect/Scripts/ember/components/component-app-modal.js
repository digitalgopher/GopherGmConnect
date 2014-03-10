App.AppModalComponent = Ember.Component.extend({
    actions: {
        closeThisModal: function () {
            return this.sendAction('closeThisModal');
        },
        sortProp: function (prop) {
            return this.sendAction('sortProp', prop);
        }
    }
})