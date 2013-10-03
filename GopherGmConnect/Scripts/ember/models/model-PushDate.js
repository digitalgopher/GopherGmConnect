App.Pushdate = Ember.Object.extend({

});


App.Pushdate.reopenClass({
    find: function (token) {
        var pushDate = App.Pushdate.create();
        var data = {
            token : token
        }
        return $.getJSON("/api/gopher/GetCurrentPushDate", data).then(function (pDate) {
            var pushStart = new Date(pDate.pushStartYear, pDate.pushStartMonth, pDate.pushStartDay);
            var pushEnd = new Date(pDate.pushEndYear, pDate.pushEndMonth, pDate.pushEndDay);
            pushDate.set('pushStartDate', pushStart);
            pushDate.set('pushEndDate', pushEnd);
            pushDate.set('pushDatesIsLoaded', true);
            return pushDate;
        });
    }
});