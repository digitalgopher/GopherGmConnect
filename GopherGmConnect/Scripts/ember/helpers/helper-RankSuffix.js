Ember.Handlebars.registerBoundHelper('ranksuffix', function () {
    var number = arguments[0];
    var suffix = '';
    var suffixset = false;
    var j = number % 10;
    if (j == 1 && number != 11) {
        suffix = 'st';
        suffixset = true;
    }
    if (j == 2 && number != 12) {
        suffix = 'nd';
        suffixset = true;
    }
    if (j == 3 && number != 13) {
        suffix = 'rd';
        suffixset = true;
    }
    if(!suffixset) {
        suffix = 'th';
    }
    

    //return number + "th";
    return new Handlebars.SafeString('<span>' + arguments[0] + suffix + '</span>');
});