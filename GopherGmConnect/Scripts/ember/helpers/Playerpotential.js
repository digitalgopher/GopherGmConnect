Ember.Handlebars.registerBoundHelper('playerpotential', function () {
    //var escaped = Handlebars.Utils.escapeExpression(value);

  
    //var potentialClass = PotentialColorClass[value.get('potentialColor')];
    var potentialClass = PotentialColorClass[arguments[1]];
    return new Handlebars.SafeString('<span class="numberBoxValue ' + potentialClass + '">' + getPotential(arguments[0]) + '</span>');
});