App.ScheduleView = Ember.View.extend({
    didInsertElement: function () {
        var self = this;
        Ember.run.scheduleOnce('afterRender', self, function () {
            var games = [];
            var currentTeamId = self.get('controller.team.id');
            self.controller.content.forEach(function (game, index) {
                var gameDay = new Date(game.year, game.month, game.day);
                var opposingTeamId;
                var isAway;
                if (game.homeTeamId == currentTeamId) {
                    opposingTeamId = game.awayTeamId;
                    isAway = false;
                }
                else {
                    opposingTeamId = game.homeTeamId;
                    isAway = true;
                }
                var opposingTeamAbr = self.get('controller.teams').findProperty('id', opposingTeamId.toString()).get('abr');
                cTitle = isAway ? '@ ' + opposingTeamAbr : 'VS ' + opposingTeamAbr;
                //var cTitle = self.get('controller.teams').findProperty("id", game.homeTeamId.toString()).get('abr') + " @ " + self.get('controller.teams').findProperty("id", game.awayTeamId.toString()).get('abr');
                var calendarDate = {
                    title: cTitle,
                    start: gameDay,
                    allDay: true,
                    borderColor: 'transparent',
                    backgroundColor: isAway ? '#e46f61' : '#4dbfd9',
                    className: ['game', 'logo-bg-image-90-' + opposingTeamAbr]
                }
                games.push(calendarDate);
            });
            var pushEvent = {
                start: self.get('controller.pushDate').get('pushStartDate'),
                end: self.get('controller.pushDate').get('pushEndDate'),
                backgroundColor: '#fbcb43',
                borderColor: 'transparent',
                title: 'Current Push...'
            }
            games.push(pushEvent);

            //$('#calender').fullCalendar('destroy');
            $('#calendar').fullCalendar({
                year: self.get('controller.pushDate').get('pushStartDate').getFullYear(),
                month: self.get('controller.pushDate').get('pushStartDate').getMonth(),
                date: self.get('controller.pushDate').get('pushStartDate').getDay(),
                events: games,
            });

            //$('#calendar').fullCalendar('render');

        });

    }
});