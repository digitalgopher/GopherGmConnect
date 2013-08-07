
App.Team = Ember.Object.extend({
    content: null,
    tradeBlock: function () {
       return Em.A(Em.MutableEnumerable.mixin);
    }.property(),
    newTradeSalary: function () {
        return 0;
    }.property(),
    tradeBlockChanged: function () {
        var self = this;
        var totalSalary = 0;
        self.get('tradeBlock').forEach(function (item, index, enumerable) {
            totalSalary += item.get('salary');
        })
        var actualSalary = self.get('salaryCapSpent');
        var salaryCap = self.get('salaryCapTotal');
        var newSalary = salaryCap - (actualSalary - GetContractNumbers(totalSalary));
        self.set('tradeSalaryEnum', totalSalary);
        self.set('newTradeSalaryInt', newSalary);
        self.set('tradeSalary', GetContractAmount(totalSalary));
        self.set('newTradeSalary', numberWithCommas(newSalary));
    }.observes('tradeBlock.@each'),
    
    loadTeam: function () {
        var self = this;
        self.loadRoster();
        //self.loadSchedule();
        self.loadStats();
    },
    loadRoster: function () {
        var loadedRoster = App.Roster.create();
        var untouchedRoster = App.Roster.create();
        var tempRoster = Em.A();
        var self = this;
        self.set('rosterIsLoaded', false);
        $.getJSON("/api/gopher/roster", { id: self.get('id') }).then(function (playerList) {
            playerList.forEach(function (p) {
                var player = App.Player.create();
                player.setProperties(p);
                tempRoster.pushObject(player);
                //loadedRoster.pushObject(player);
            });
            var loadedRosterController = App.RosterController.create({
                content: tempRoster
            });
            var filteredRosterController = App.RosterController.create({
                content: tempRoster
            });
            self.set('roster', loadedRosterController);
            self.set('filteredRoster', filteredRosterController);



            //loadedRoster.set('content', tempRoster);
            //untouchedRoster.set('content', tempRoster);


            //self.set('roster', untouchedRoster);
            //self.set('filteredRoster', loadedRoster);

            //self.get('controllers.roster').set('content', loadedRoster);
            self.set('rosterIsLoaded', true);
        });
    },
    //depends on a roster being loaded. Call only when sure a roster is loaded
    loadLines: function () {
        var self = this;
        if (self.get('rosterIsLoaded'))
        {
            var loadedLines = [];
            $.getJSON("/api/gopher/getlines", { id: this.get('id') }).then(function (lines) {
                lines.Lines.forEach(function (l) {
                    var line = App.Line.create();
                    line.setProperties(l);
                    loadedLines.pushObject(line);
                });
                self.set('lines', loadedLines);
                self.set('linesIsLoaded', true);
            });
        }
    }.observes('rosterIsLoaded'),

    loadSchedule: function () {
            var schedule = [];
            var self = this;
            $.getJSON("/api/gopher/GetSchedule", { id: this.get('id') }).then(function (games) {
                games.forEach(function (g) {
                    var game = App.Game.create();
                    game.setProperties(g);
                    schedule.pushObject(game);
                });
                self.set('schedule', schedule);
                self.set('scheduleIsLoaded', true);
            });
    },

    loadStats: function () {
        var self = this;
        $.getJSON("/api/gopher/teams", { id: self.get('id') }).then(function (team) {
            self.setProperties(team);
            self.set('statsIsLoaded', true);
        });
    },


    isLoaded: function () {
        var self = this;
        if(self.get('linesIsLoaded') && self.get('rosterIsLoaded') && self.get('scheduleIsLoaded') && self.get('statsIsLoaded'))
        {
             self.set('isLoaded', true);
        }
       
    }.observes('linesIsLoaded', 'rosterIsLoaded', 'scheduleIsLoaded', 'statsIsLoaded'),












    teamjsname: function () {
        return "team_" + this.get('id');
    }.property('id'),

    city: function () {
        return teams[this.get('teamjsname')].city;
    }.property('teamjsname'),

    twitter: function () {
        return "@" + teams[this.get('teamjsname')].twitter;
    }.property('teamjsname'),

    twitterLink: function () {
        return "http://twitter.com/" + teams[this.get('teamjsname')].twitter;
    }.property('teamjsname'),

    teamname: function () {
        return teams[this.get('teamjsname')].name;
    }.property('teamjsname'),

    abr: function () {
        return teams[this.get('teamjsname')].abr;
    }.property('teamjsname'),

    capSpace: function () {
        return numberWithCommas(this.get('salaryCapRemaining'));
    }.property('salaryCapRemaining'),

    conference: function () {
        return Conference(this.get('conference'));
    }.property('conference'),

    division: function () {
        return Division(this.get('division'));
        //return this.get('Division');
    }.property('division'),

    imageUrl: function () {
        var t = this.get('teamjsname');
        var c = this.get('city');
        var n = this.get('teamname');
        c = c.toLowerCase();
        c = c.replace(/ /g, "-");
        n = n.replace(/ /g, "-");
        full = c + "-" + n;
        return "/content/images/logos/59/" + full + ".png";
    }.property('teamname', 'city', 'name'),

    imageUrlMedium: function () {
        var t = this.get('teamjsname');
        var c = this.get('city');
        var n = this.get('teamname');
        c = c.toLowerCase();
        c = c.replace(/ /g, "-");
        n = n.replace(/ /g, "-");
        full = c + "-" + n;
        return "/content/images/logos/90/" + full + ".png";
    }.property('teamname', 'city', 'name'),

    imageUrlLarge: function () {
        var t = this.get('teamjsname');
        var c = this.get('city');
        var n = this.get('teamname');
        c = c.toLowerCase();
        c = c.replace(/ /g, "-");
        n = n.replace(/ /g, "-");
        full = c + "-" + n;
        return "/content/images/logos/200/" + full + ".png";
    }.property('teamname', 'city', 'name')
});
