App.PlayerView = Em.View.extend({
    classNames: ['player-details-container'],
    isFull: false,
    actions: {
        playerContainerShow: function () {
            this.toggleProperty('isFull');
            if (this.get('isFull')) {
                this.$().removeClass('showFullPlayerProfile');
            }
            else {
                this.$().addClass('showFullPlayerProfile');
            }
            
        }
    }
});