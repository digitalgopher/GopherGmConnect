Ember.Handlebars.registerBoundHelper('playerpotential', function () {
    //var potentialClass = PotentialColorClass[arguments[1]];
    return new Handlebars.SafeString('<span class="numberBoxValue player-' + arguments[1] + '-potential">' + arguments[0] + '</span>');
});