App.tradeRosterListItem = Em.View.extend({
    click: function (evt) {
        $(evt.target).toggleClass('tradePlayerSelected');
        //this.get('controller').send('turnItUp', 11);
    },

  
});