/*
*
* ApplicationController is extended intially in ember/app.js
*
*/

App.ApplicationController = Ember.Controller.extend({
    title: "LOBNHL"
});
App.ApplicationController.reopen({

    //init: function () {
    //    var self = this;
    //    var teamsPromise = App.Teams.getTeams(self.get('token'));
    //    teamsPromise.then(function (_teamList) {
    //        self.set('teamList', _teamList);
    //        self.set('teamsIsLoaded', true);
    //        var pushDatePromise = App.Pushdate.find(self.get('token'));
    //        pushDatePromise.then(function (_pushDate) {
    //            self.set('pushdate', _pushDate);
    //            self.set('pushdateSet', true);
    //        });
    //    });
    //},
});
