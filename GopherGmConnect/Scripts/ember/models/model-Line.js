
App.Line = Ember.Object.extend({
    linename: function () {
        var self = this;
        var name = self.get('Name');
        name = name.replace(/ /g, "-");
        return name;
    }.property('Name'),
    lineid: function () {
        var self = this;
        var name = "#";
        name += self.get('Name');
        name = name.replace(/ /g, "-");
        return name;
    }.property('Name'),
});
