
App.Line = Ember.Object.extend({
    linename: function () {
        var self = this;
        var name = self.get('name');
        name = name.replace(/ /g, "-");
        return name;
    }.property('name'),
    lineid: function () {
        var self = this;
        var name = "#";
        name += self.get('name');
        name = name.replace(/ /g, "-");
        return name;
    }.property('name'),
});
