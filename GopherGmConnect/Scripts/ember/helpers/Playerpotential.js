Ember.Handlebars.helper('playerpotential', function (value, options) {
    var escaped = Handlebars.Utils.escapeExpression(value);
    var potentialClass = PotentialColorClass[value.get('potentialColor')];
    return new Handlebars.SafeString('<span class="numberBoxValue ' + potentialClass + '">' + Potential[value.get('potential')] + '</span>');
});