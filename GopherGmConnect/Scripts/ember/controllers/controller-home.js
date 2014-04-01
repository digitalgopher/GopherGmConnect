App.HomeController = Ember.ArrayController.extend({
    needs: ['application'],
    sortProperties: ['points', 'regulationOvertimeWins'],
    sorter: 'points',
    sortAscending: false,
    conferenceFilter: '3',
    itemController: 'team',
    teamsIsLoaded: Ember.computed.oneWay('controllers.application.teamsIsLoaded'),   

    pointsSort: Ember.computed.equal('sorter', 'points'),
    lossesSort: Ember.computed.equal('sorter', 'losses'),
    winsSort: Ember.computed.equal('sorter', 'wins'),
    overtimeLossesSort: Ember.computed.equal('sorter', 'overtimeLosses'),
    gamesPlayedSort: Ember.computed.equal('sorter', 'gamesPlayed'),

    allFilter: Ember.computed.equal('conferenceFilter', '3'),
    westFilter: Ember.computed.equal('conferenceFilter', '1'),
    eastFilter: Ember.computed.equal('conferenceFilter', '2'),


    teams: function () {
        this.set('sortProperties', [this.get('sorter')]);
        var confInt = parseInt(this.get('conferenceFilter'));
        var ap = Ember.ArrayProxy.create();
        if (confInt === 3) {
            return this.filter(function (team) {
                return team.get('conference') > 0;
            });
        }
        else {
             return this.filter(function (team) {
                return team.get('conference') == confInt;
            });
        }
    }.property('isLoaded', 'conferenceFilter', 'sorter'),

  

    //sortTeams: function () {
    //    //var sortedTeams;
    //    //if (this.get('teams') === null) {
    //    //    sortedTeams = this.get('appteams').sortBy(this.get('sorter')).reverse();
    //    //}
    //    //else {
    //    //    sortedTeams = this.get('teams').sortBy(this.get('sorter')).reverse();
    //    //}
    //    //this.set('teams', sortedTeams);
    //    var sorter = this.get('sorter');
    //    this.set('sortProperties', [sorter]);
        
    //}.observes('sorter'),

    //filterTeams: function () {
    //    var self = this;
    //    //var sort = this.get('sorter');
    //    var confInt = parseInt(this.get('conferenceFilter'));
    //    if (confInt === 3) {
    //        var filtered = self.get('content').filterBy('conference');
    //        self.set('arrangedContent', filtered);

    //    }
    //    else {
    //        var filtered = self.get('content').filterBy('conference', confInt);
    //        self.set('teams', filtered.sortBy(sort).reverse());
    //    }
    //}.observes('conferenceFilter'),



    actions: {
        filterConference: function (confInt) {
            
            this.set('conferenceFilter', confInt);
        },

        sort: function (stat) {
            this.set('sorter', stat)
        },

        toggleSort: function () {

        }
    },

});