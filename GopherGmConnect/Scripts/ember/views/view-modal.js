App.ModalView = Ember.View.extend({
    willDestroyElement: function () {
        $('#myModal').foundation('reveal', 'close');
    },
    didInsertElement: function () {

        Ember.run.next(this, function () {
            this.$('#myModal').foundation('reveal');
            this.$('#myModal').foundation('reveal', 'open');
        });
    }
})