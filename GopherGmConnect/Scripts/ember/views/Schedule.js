App.ScheduleView = Ember.View.extend({
    didInsertElement: function () {
        var self = this;
        var games = [];
        self.controller.content.forEach(function (game, index) {
            var gameDay = new Date(game.year, game.month, game.day);
            var cTitle = self.get('controller.controllers.teams').findProperty("id", game.homeTeamId.toString()).get('abr') + " @ " + self.get('controller.controllers.teams').findProperty("id", game.awayTeamId.toString()).get('abr');
            var calendarDate = {
                title: cTitle,
                start: gameDay,
                allDay: true,
            }
            games.push(calendarDate);
        });

        var pushEvent = {
            start: self.get('controller.controllers.teams').get('pushStartDate'),
            end: self.get('controller.controllers.teams').get('pushEndDate'),
            backgroundColor: 'red',
            title: 'Current Push...'
        }

        games.push(pushEvent);
        Ember.run.scheduleOnce('afterRender', this, function () {
            $('#calender').fullCalendar('destroy');
            $('#calendar').fullCalendar('render');
            $('#calendar').fullCalendar({
                year: self.get('controller.controllers.teams').get('pushStartDate').getFullYear(),
                month: self.get('controller.controllers.teams').get('pushStartDate').getMonth() + 1,
                date: self.get('controller.controllers.teams').get('pushStartDate').getDay(),
                events: games,
            });
            
        });
        
    }
});