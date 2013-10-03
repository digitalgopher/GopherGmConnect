App.Eatoken = Ember.Object.extend({
    content: null,
    token: null
})

App.Eatoken.reopenClass({
    getToken: function () {
        var self = this;
        var mToken = App.Eatoken.create();
        return $.getJSON("/api/gopher/GetToken", { token: sessionStorage.getItem('token') }).then(function (newToken) {
            sessionStorage.setItem('token', newToken);
            mToken.set('token', newToken);
            return mToken;
        });
    }
})