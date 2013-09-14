App.ApplicationController = Ember.Controller.extend({
    needs: ['eatoken'],
    init: function () {
        var self = this;
        self._super();
        self.get('controllers.eatoken').getToken();
    },
    actions: {
        testing: function (player) {

            this.transitionTo('player', player);
        }
    }
    
});
