App.HomeController = Ember.ObjectController.extend({
    content: null,
    sorter: 'points',
    conferenceFilter: '3',
    needs: ['application'],
    appteams: Ember.computed.oneWay('controllers.application.teams'),
    teamsIsLoaded: Ember.computed.oneWay('controllers.application.teamsIsLoaded'),

    pointsSort: Ember.computed.equal('sorter', 'points'),
    lossesSort: Ember.computed.equal('sorter', 'losses'),
    winsSort: Ember.computed.equal('sorter', 'wins'),
    overtimeLossesSort: Ember.computed.equal('sorter', 'overtimeLosses'),
    gamesPlayedSort: Ember.computed.equal('sorter', 'gamesPlayed'),

    allFilter: Ember.computed.equal('conferenceFilter', '3'),
    westFilter: Ember.computed.equal('conferenceFilter', '1'),
    eastFilter: Ember.computed.equal('conferenceFilter', '2'),

    teams: null,
    sortTeams: function () {
        var sortedTeams;
        if (this.get('teams') === null) {
            sortedTeams = this.get('appteams').sortBy(this.get('sorter')).reverse();
        }
        else {
            sortedTeams = this.get('teams').sortBy(this.get('sorter')).reverse();
        }
        this.set('teams', sortedTeams);
    }.observes('sorter').on('init'),

    filterTeams: function () {
        var self = this;
        var sort = this.get('sorter');
        var confInt = parseInt(this.get('conferenceFilter'));
        if (confInt === 3) {
            var filtered = self.get('appteams').filterBy('conference');
            self.set('teams', filtered.sortBy(sort).reverse());

        }
        else {
            var filtered = self.get('appteams').filterBy('conference', confInt);
            self.set('teams', filtered.sortBy(sort).reverse());
        }
    }.observes('conferenceFilter'),



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