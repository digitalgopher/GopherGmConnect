
App.TeamsController = Ember.ArrayController.extend({
    content: null,
    needs: ['home', 'eatoken'],
    sortProperties: ['Points'],
    sortAscending: false,
    sessionToken: function () {
        var self = this;
        return self.get('controllers.eatoken.token');
    },
    sessionTokenChanged: function () {
        var self = this;
        self.loadTeams();
    }.observes('controllers.eatoken.token'),
    loadTeams: function () {

        var self = this;
        if (self.sessionToken()) {
            if (self.get('teamsIsLoaded')) {
                return;
            }
            var allTeams = Em.A();
            var data = {
                token: self.get('controllers.eatoken.token')
            }
            $.getJSON("/api/gopher/teams", data).then(function (response) {
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

                $.getJSON("/api/gopher/GetCurrentPushDate", data).then(function (pDate) {
                    var pushStart = new Date(pDate.pushStartYear, pDate.pushStartMonth, pDate.pushStartDay);
                    var pushEnd = new Date(pDate.pushEndYear, pDate.pushEndMonth, pDate.pushEndDay);
                    self.set('pushStartDate', pushStart);
                    self.set('pushEndDate', pushEnd);
                    self.set('pushDatesIsLoaded', true);

                    self.set('content', allTeams);
                    self.set('teamsIsLoaded', true);
                });


            });
        }
    },
    test: function (a, b, c) {
    }
});