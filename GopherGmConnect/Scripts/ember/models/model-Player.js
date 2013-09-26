
App.Player = Ember.Object.extend({
    playerIsLoaded: false,
    salaryReadable: function () {
        var amt = this.get('salary');
        return GetContractAmount(amt);
    }.property('salary'),

    salarySmall: function () {
        var amt = this.get('salary');
        return GetSmallContractNumber(amt);
    }.property('salary'),

    handed: function () {
        var shoots = this.get('shoots');
        return Shoots(shoots);
    }.property('shoots'),

    readPotential: function () {
        var potential = this.get('potential');
        console.log(getPotential(potential));
        return getPotential(potential);
    }.property('potential'),

    readPotentialColor: function () {
        var p = this.get('potentialColor');
        return PotentialColor[p];
    }.property('potenticalColor'),

    isGoalie: function () {
        if (this.get('position') == "G") {
            return true;
        }
        return false;
    }.property('position'),

    tradeValuePercent: function () {
        return "width: " + (this.get('tradeValue') / 1000) * 100 + "%;";
    }.property('tradeValue'),

    contractType: function () {
        if (this.get('isTwoWay')) {
            return "Two";
        }
        return "One";
    }.property("isTwoWay")
});
