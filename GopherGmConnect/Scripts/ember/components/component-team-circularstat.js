App.TeamCircularstatComponent = Ember.Component.extend({
    didInsertElement: function () {
        var self = this;
        $("#" + this.circleName).knob({
            "value": self.good,
            "max": self.total,
            "angleArc": 250,
            "angleOffset": -125,
            "readOnly": true,

        });
    },
    classNames: ['primary', 'asdofmsdfsdkfsdkkfjsld'],
});