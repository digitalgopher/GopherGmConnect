App.ModalController = Ember.ObjectController.extend({
    actions: {
        close: function () {
            return this.send('closeModal');
        },
        sortByProperty: function (property) {
            return this.send('sortRoster', property);
        }
    }
});