App.EatokenController = Ember.Controller.extend({
    content: null,
    getToken: function () {
        var self = this;
        $.getJSON("/api/gopher/GetToken", { token: sessionStorage.getItem('token') }).then(function (newToken) {
            sessionStorage.setItem('token', newToken);
            self.set('token', newToken);
        });
    },
});
