App.Teams = Ember.ArrayProxy.extend(Ember.Copyable, {
    filterConference: function (conf) {
        var self = this;
        var confInt = parseInt(conf);
        if (confInt == 3)
        {
            self.set('content', self.get('uneditedTeams'));
        }
        else
        {
            self.set('content', self.get('uneditedTeams').filterProperty('conference', confInt));
        }   
    }
});

App.Teams.reopenClass({
    /*
    Get the list of teams and their records etc 
    */
    getTeams: function (token) {
        var data = {
                token: token
        }
        var teamList = App.Teams.create();
        var allTeams = Em.A();
        return $.getJSON("/api/gopher/teams", data).then(function (response) {
            response.forEach(function (team) {
                var aTeam = App.Team.create();
                aTeam.setProperties(team);
                allTeams.push(aTeam);
            });
            teamList.set('content', allTeams);
            teamList.set('uneditedTeams', allTeams);
            return teamList;
        });
    }
});