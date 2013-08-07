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


    //----------------------------------------------------------------
    //var rateListItem = $('<div></div>');
    //var bP = self.get('bPlayer');
    //var bPvalue = bP.get('playerRates').findProperty('name', value.name).get('rating');

    //var middleDiv = $('<div class="player-rating-name">' + value.name + '</div>');

    //var aPlayerDiv = $('<div class="player-rating-value">' + value.rating + '</div>');
    //var bPlayerDiv = $('<div class="player-rating-value">' + bPvalue + '</div>');

    ////var aPlayerDiv = $('<div class="player-rating-value">' + value.rating + '</div>');
    ////var bPlayerDiv = $('<div class="player-rating-value">' + bPvalue + '</div>');

    //if (value.rating > bPvalue) {
    //            $(aPlayerDiv).addClass('better-rating');
    //            $(bPlayerDiv).addClass('worse-rating');
    //}

    //else if (bPvalue > value.rating) {
    //    $(bPlayerDiv).addClass('better-rating');
    //    $(aPlayerDiv).addClass('worse-rating');
    //}
    //else {
    //    //even
    //    $(aPlayerDiv).addClass('even-rating');
    //    $(bPlayerDiv).addClass('even-rating');
    //}

    //$(rateListItem).append(aPlayerDiv);
    //$(rateListItem).append(middleDiv);
    //$(rateListItem).append(bPlayerDiv);


    //console.log($(rateListItem).html());

    //return new Handlebars.SafeString($(rateListItem).html());



    //-----------------------------------------------------------------------------------

    //var elementsArray = [];
    //var ratingsList = $('<ul></ul>');



    //aP.get('playerRates').forEach(function (aPlayerRating, idx, e) {
    //    var bPlayerRating = bP.get('playerRates').objectAt(idx);

    //    var elem = $('<li></li>');
    //    var middleDiv = $('<div class="player-rating-name">' + aPlayerRating.name + '</div>');
    //    var aPlayerDiv = $('<div class="player-rating-value">' + aPlayerRating.rating + '</div>');
    //    var bPlayerDiv = $('<div class="player-rating-value">' + bPlayerRating.rating + '</div>');

    //    if (aPlayerRating.rating > bPlayerRating.rating) {
    //        $(aPlayerDiv).addClass('better-rating');
    //        $(bPlayerDiv).addClass('worse-rating');
    //    }
    //    else if (bPlayerRating.rating > aPlayerRating.rating) {
    //        $(bPlayerDiv).addClass('better-rating');
    //        $(aPlayerDiv).addClass('worse-rating');
    //    }
    //    else {
    //        //So they're even...
    //        $(aPlayerDiv).addClass('even-rating');
    //        $(bPlayerDiv).addClass('even-rating');
    //    }

    //    $(elem).append(aPlayerDiv);
    //    $(elem).append(middleDiv);
    //    $(elem).append(bPlayerDiv);

    //    $(ratingsList).append(elem);


    //    console.log(idx + " - aPlayer - " + aPlayerRating.name + " : " + aPlayerRating.rating);
    //    console.log(idx + " - bPlayer - " + bPlayerRating.name + " : " + bPlayerRating.rating);

    //});
});

Ember.Handlebars.helper('ratingsHelper', function (value, options) {
    return new Handlebars.SafeString('<td>' + value.name + '</td> <td>' + value.rating + '</td>');
});