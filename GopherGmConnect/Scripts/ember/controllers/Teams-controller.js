
App.TeamsController = Ember.ArrayController.extend({
    content: null,
    needs: ['home'],
    sortProperties: ['Points'],
    sortAscending: false,
    loadTeams: function () {

        var self = this;
        if (self.get('teamsIsLoaded'))
        {
            console.log('teams already loaded, carry on!');
            return;
        }
        var allTeams = Em.A();
        $.getJSON("/api/gopher/teams").then(function (response) {
            response.forEach(function (team) {
                var aTeam = App.Team.create();
                aTeam.setProperties(team);
                allTeams.push(aTeam);
            });
            //self.set('teams', allTeams);
            self.set('sortedTeams', allTeams);

            //self.get('controllers.home').set('teams', allTeams);
            //self.get('controllers.home').set('sortedTeams', allTeams);
            //self.get('controllers.home').set('teamsIsLoaded', true);
            self.set('content', allTeams);
            self.set('teamsIsLoaded', true);
        });
    },
    test: function (a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
    }
});