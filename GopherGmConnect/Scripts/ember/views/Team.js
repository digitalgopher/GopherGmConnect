App.TeamView = Em.View.extend({
    didInsertElement: function (a, b, c) {
        //var self = this;
        //var ctx = $("#winloss-chart").get(0).getContext("2d");
        //var myNewChart = new Chart(ctx);
        //var options = {
        //    segmentStrokeWidth: 1,
        //    percentageInnerCutout: 70,
        //}
        //var data = [
        //    {
        //        value: self.controller.get('wins'),
        //        color: '#8cc474'
        //    },
        //    {
        //        value: self.controller.get('losses'),
        //        color: '#e46f61'
        //    }
        //]

        //new Chart(ctx).Doughnut(data, options);

    },
    scheduleLoaded: function () {

        //willDestroyElement: function () {
        //    var canvas = $("#myChart").get(0);
        //    var ctx = $("#myChart").get(0).getContext("2d")
        //    ctx.clearRect(0, 0, canvas.width, canvas.height);
        //},
        //testy: function (a) {
        //    var self = this;
        //    if ( self.get('controller').get('rosterIsLoaded') ) 
        //    {
        //        $('#playerList').empty();
        //        //Get context with jQuery - using jQuery's .get() method.
        //        var ctx = $("#myChart").get(0).getContext("2d");
        //        //This will get the first returned node in the jQuery collection.
        //        // var myNewChart = new Chart(ctx);


        //        var data = [];
        //        var red = 0;
        //        var blue = 0;
        //        var green = 0;
        //        this.controller.get('roster').forEach(function (a, b, c) {
        //            console.log(a.salary);
        //            console.log(a.lastName);

        //            if (a.salary > 200) {
        //                //red = Math.floor((Math.random() * 255) + 1);
        //                red = 255;
        //                green = Math.floor((Math.random() * 255) + 1);
        //                blue = Math.floor((Math.random() * 255) + 1);

        //                var pColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

        //                $('#playerList').append('<li><div style="width:10px; height: 10px; background-color:' + pColor + ';"></div>' + a.lastName + '</li>')
        //                var sa = {
        //                    value: a.salary,
        //                    color: pColor
        //                }
        //                data.push(sa);
        //            }

        //        })
        //        var chartOptions = {
        //            segmentStrokeWidth : 1
        //        }

        //        var myChart = new Chart(ctx).Pie(data, chartOptions);
        //    }

        //}
    }
});