App.Pushdate = Ember.Object.extend({

});


App.Pushdate.reopenClass({
    find: function () {
        var pushDate = App.Pushdate.create();
        return $.getJSON("/api/gopher/GetCurrentPushDate").then(function (pDate) {
            var pushStart = new Date(pDate.pushStartYear, pDate.pushStartMonth, pDate.pushStartDay);
            var pushEnd = new Date(pDate.pushEndYear, pDate.pushEndMonth, pDate.pushEndDay);
            pushDate.set('pushStartDate', pushStart);
            pushDate.set('pushEndDate', pushEnd);
            pushDate.set('pushDatesIsLoaded', true);
            return pushDate;
        });
    }
});