define(function (require) {
    var test = require('viewmodels/flickr');

    return {
        allTeams: ko.observableArray([]),
        selectedTeam : ko.observable(),
        activate: function () {
            var self = this;
            //self.testName(test.displayName);
            $.getJSON("/api/values/teams", function (allData) {
                var mappedTeams = $.map(allData.teams, function (item) {
                    return new Team(item);
                });
                self.allTeams(mappedTeams);
            });
        },
        testfunc: function (clickedTeam) {
            this.selectedTeam(clickedTeam);
            console.log(self.selectedTeam.id);
        }
        
        

    }
   
});