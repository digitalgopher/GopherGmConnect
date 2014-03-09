App.Router.map(function () {
    this.route('home');
    this.resource("team", { path: "/team/:team_id" });
    this.resource('player', { path: '/player/:player_id' });
    //this.resource("player", { path: "/players/:player_id" });
    this.resource("playercompare", { path: "/compare/:aplayer_id/:bplayer_id" });
    this.route("topplayers");
    this.route("trade");
    this.route("childViewTest");
});