
App.Line = Ember.Object.extend({







});

/*
    Return an array of App.Line objects. 
*/
App.Line.reopenClass({
    findAll: function (token, id) {
        var loadedLines = Em.A();
        var data = {
            id: id,
            token: token
        }
        return $.getJSON("/api/gopher/getlines", data).then(function (lines) {
            return lines;
        });
    
    }
})
