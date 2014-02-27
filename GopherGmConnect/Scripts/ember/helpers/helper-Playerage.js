
Ember.Handlebars.helper('playerage', function (value, options) {
    var escaped = Handlebars.Utils.escapeExpression(value);
    if (value < 23) {
        return new Handlebars.SafeString('<span class="numberBoxValue player-age-young">' + value + '</span>');
    }

    if (value < 27) {
        return new Handlebars.SafeString('<span class="numberBoxValue player-age-prime">' + value + '</span>');
    }

    if (value < 35) {
        return new Handlebars.SafeString('<span class="numberBoxValue player-age-medium">' + value + '</span>');
    }

    else {
        return new Handlebars.SafeString('<span class="numberBoxValue player-age-old">' + value + '</span>');
    }
});