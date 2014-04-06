App.Router.map(function () {
    this.route('home');
    this.resource("team", { path: "/team/:team_id" }, function () {
        this.resource('players', { path: '/players' }, function () {
            this.resource('player', { path: '/:player_id' });
        });       
        //this.resource('players', { path: '/players' }, function () {
        //    //this.route('player', { path: '/:player_id' });
        //    this.route('test');
            
        //    this.route('roster');
        //});       
        this.route('stats');
        this.route('games');
    });
    
});