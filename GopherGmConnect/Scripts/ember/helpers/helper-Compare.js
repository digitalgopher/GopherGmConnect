Ember.Handlebars.helper('compare', function (value, options) {
    var escaped = Handlebars.Utils.escapeExpression(value);
    var self = this;
    var bP = self.get('bPlayer');
    var bPvalue = bP.get('playerRates').findProperty('name', value.name).get('rating');

    var progressContainer = $('<div class="progress"></div>');


    var totalRating = value.rating + bPvalue;

    console.log(value.rating + "-A  B-" + bPvalue)
    var aPlayerPercent = value.rating / totalRating * 100;
    var bPlayerPercent = bPvalue / totalRating * 100;
    console.log(aPlayerPercent);
    console.log(bPlayerPercent);

    var aBar = $('<div class="progress-bar" style="width: ' + aPlayerPercent + '%">' + value.rating + '</div>');
    var bBar = $('<div class="progress-bar" style="width: ' + bPlayerPercent + '%">' + bPvalue + '</div>');


    if (value.rating > bPvalue) {
        $(aBar).addClass('progress-bar-success');
        $(bBar).addClass('progress-bar-danger');
    }

    else if (bPvalue > value.rating) {
        $(bBar).addClass('progress-bar-success');
        $(aBar).addClass('progress-bar-danger');
    }
    else {
        //even
        $(aBar).addClass('progress-bar-info');
        $(bBar).addClass('progress-bar-info');
    }


    $(progressContainer).append(aBar);
    $(progressContainer).append(bBar);
    console.log($(progressContainer).get(0));


    //return new Handlebars.SafeString($(progressContainer).get(0));
    return new Handlebars.SafeString($('<div>').append($(progressContainer).clone()).html());

});

Ember.Handlebars.helper('ratingsHelper', function (value, options) {
    return new Handlebars.SafeString('<td>' + value.name + '</td> <td>' + value.rating + '</td>');
});