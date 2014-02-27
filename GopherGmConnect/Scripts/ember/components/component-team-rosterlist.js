
App.TeamRosterlistComponent = Ember.Component.extend({
    tagName: ['div'],
    //currentSort is being observed by rosterlistitem
    sortAge: Ember.computed.equal('currentSort', 'age'),
    sortOverall: Ember.computed.equal('currentSort', 'overall'),
    sortPotential: Ember.computed.equal('currentSort', 'potential'),
    sortTradeValue: Ember.computed.equal('currentSort', 'tradeValue'),
    sortSalary: Ember.computed.equal('currentSort', 'salary'),

    sortSpeed: Ember.computed.equal('currentSortRating', 'speed'),
    sortPassing: Ember.computed.equal('currentSortRating', 'passing'),
    sortHandEye: Ember.computed.equal('currentSortRating', 'handEye'),
    sortDeking: Ember.computed.equal('currentSortRating', 'deking'),
    sortFaceoffs: Ember.computed.equal('currentSortRating', 'faceoffs'),
    sortWristPower: Ember.computed.equal('currentSortRating', 'wristShotPower'),
    sortWristAcc: Ember.computed.equal('currentSortRating', 'wristShotAccuracy'),
    sortPuckControl: Ember.computed.equal('currentSortRating', 'puckControl'),

    sortPoints: Ember.computed.equal('currentSortStat', 'points'),
    sortGoals: Ember.computed.equal('currentSortStat', 'goals'),
    sortAssists: Ember.computed.equal('currentSortStat', 'assists'),
    sortGames: Ember.computed.equal('currentSortStat', 'gamesPlayed'),
    sortMinutes: Ember.computed.equal('currentSortStat', 'minutes'),
    sortShotPercent: Ember.computed.equal('currentSortStat', 'shootingPercentage'),
    sortFaceoffPercent: Ember.computed.equal('currentSortStat', 'faceoffPercentage'),
    sortPlusMinus: Ember.computed.equal('currentSortStat', 'plusMinus'),

    actions: {
        sortProperty: function (property) {
            this.sendAction('sort', property);
        },
        sortStat: function (stat) {
            this.sendAction('sort', stat);
        },
        sortRating: function (rating) {
            this.set('currentSortRating', rating);
            this.sendAction('sort', rating);
        }
    }
});