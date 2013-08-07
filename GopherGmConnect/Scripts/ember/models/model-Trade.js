App.Trade = Ember.Object.extend({
    content: null,
    aTeam: null,
    bTeam: null,
    aTradeBlock: Em.A(Ember.MutableArray.mixin),
    bTradeBlock: Em.A(Ember.MutableArray.mixin),
    aTeamSalary: null,
    bTeamSalary: null,
    salaryChanged: function (teamLetter) {

    },
    aSalaryChanged: function () {
        var self = this;
        self.salaryChanged('a');
    }.observes('aTeam.tradeBlock.length'),
    bSalaryChanged: function () {
        var self = this;
        self.salaryChanged('b');
    }.observes('bTeam.tradeBlock.length')
});