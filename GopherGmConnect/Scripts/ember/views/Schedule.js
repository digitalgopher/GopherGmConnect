App.ScheduleView = Ember.View.extend({
    didInsertElement: function () {
        var self = this;
        Ember.run.scheduleOnce('afterRender', self, function () {
            var games = [];
            self.controller.content.forEach(function (game, index) {
                var gameDay = new Date(game.year, game.month, game.day);
                var cTitle = self.get('controller.teams').findProperty("id", game.homeTeamId.toString()).get('abr') + " @ " + self.get('controller.teams').findProperty("id", game.awayTeamId.toString()).get('abr');
                var calendarDate = {
                    title: cTitle,
                    start: gameDay,
                    allDay: true,
                }
                games.push(calendarDate);
            });
            var pushEvent = {
                start: self.get('controller.pushDate').get('pushStartDate'),
                end: self.get('controller.pushDate').get('pushEndDate'),
                backgroundColor: 'red',
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