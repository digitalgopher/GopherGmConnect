App.HomeView = Em.View.extend({
    didInsertElement: function () {
        $('#app-nav').attr('class', 'navbar navbar-inverse');
        console.log(this.get('controller').toString());
    }
});
