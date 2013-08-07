
Ember.Handlebars.helper('stat', function (value, options) {
    var escaped = Handlebars.Utils.escapeExpression(value);
    if (value > 84) {
        return new Handlebars.SafeString('<span class="text-success">' + escaped + '</span>');
    }
    if (value > 80) {
        return new Handlebars.SafeString('<span class="text-info">' + escaped + '</span>');
    }
    if (value > 75) {
        return new Handlebars.SafeString('<span class="">' + escaped + '</span>');
    }
    else {
        return new Handlebars.SafeString('<span class="text-warning">' + escaped + '</span>');
    }
});