
App.Line = Ember.Object.extend({

});

/*
    Return an array of App.Line objects. 
*/
App.Line.reopenClass({
    findAll: function (id) {
        var loadedLines = Em.A();
        var data = {
            id: id
        }
        return $.getJSON("/api/gopher/getlines", data).then(function (lines) {
            return lines;
        });
    
    }
})
