
Ember.Handlebars.helper('playeroverall', function (value, options) {
    var escaped = Handlebars.Utils.escapeExpression(value);
    if (value > 87) {
        return new Handlebars.SafeString('<span class="numberBoxValue player-great">' + escaped + '</span>');
    }
    if (value > 83) {
        return new Handlebars.SafeString('<span class="numberBoxValue player-good">' + escaped + '</span>');
    }
    if (value > 79) {
        return new Handlebars.SafeString('<span class="numberBoxValue player-okay">' + escaped + '</span>');
    }
    if (value > 74) {
        return new Handlebars.SafeString('<span class="numberBoxValue player-caution">' + escaped + '</span>');
    }
    else {
        return new Handlebars.SafeString('<span class="numberBoxValue player-bad">' + escaped + '</span>');
    }
});