function Player(data) {
    var self = this;
    ko.mapping.fromJS(data, {}, self);
    self.isPlayer = ko.observable(true);
    self.isGoalie = ko.computed(function () {
        if (data.Position == "G") {
            self.isPlayer(false);
            return true;
        }
        else {
            return false;
        }
    });

    self.fullName = ko.computed(function () {
        var f = data.FirstName.toLowerCase();
        var l = data.LastName.toLowerCase();
        f = f.charAt(0).toUpperCase() + f.slice(1);
        l = l.charAt(0).toUpperCase() + l.slice(1);
        return f + " " + l;
    }, this);

    self.Handed = ko.computed(function () {
        var s = data.Shoots;
        return Shoots(s);
    }, this);

    self.tradeValuePercent = ko.computed(function () {
        return (data.TradeValue / 1000) * 100;
    }, this);

    self.readPotential = ko.computed(function () {
        var p = data.Potential;
        return Potential[p];
    }, this);

    self.readPotentialColor = ko.computed(function () {
        var p = data.PotentialColor;
        return PotentialColor[p];
    }, this);

    self.CalcSalary = ko.computed(function () {
        var cenum = data.Salary;
        return GetContractAmount(cenum);
    }, this);

    self.nhlID = ko.observable();

    self.test = function (aplayer) {
        var url = "/api/values/getnhlid?first=" + aplayer.FirstName() + "&last=" + aplayer.LastName();
        $.getJSON(url, function (data) {
            self.nhlID( data );
            self.imageUrl ("http://2.cdn.nhle.com/photos/mugs/" + data + ".jpg" );
        });
    };

    self.imageUrl = ko.observable();
}

function Team(data) {
    var self = this;
    self.id = ko.observable(data.id);
    self.city = ko.computed(function () {
        var teamid = "team_" + self.id();
        return teams[teamid].city;
    }, this);
    self.name = ko.computed(function () {
        var teamid = "team_" + self.id();
        return teams[teamid].name;
    }, this);

    self.abr = ko.computed(function () {
        var teamid = "team_" + self.id();
        return teams[teamid].abr;
    }, this);

    self.imageUrl = ko.computed(function () {
        //var name = self.name();
        //name = name.toLowerCase();
        //name = name.replace(/ /g, '');
        var abr = self.abr();
        return "/content/images/logos/" + abr + ".png";
        //return "http://1.cdn.nhle.com/" + name + "/images/logos/small.png";
    }, this);

    self.largeImageUrl = ko.computed(function () {
        var name = self.name();
        name = name.toLowerCase();
        name = name.replace(/ /g, '');
        return "http://1.cdn.nhle.com/" + name + "/images/logos/large.png";
    }, this);
}

function HockeyAppViewModel() {
    var self = this;
    // ******* Visual Flags
    self.showRoster = ko.observable(false);
    self.showPlayer = ko.observable(false);
     
    self.SortedByPlayer     = ko.observable(false);
    self.SortedBySalary     = ko.observable(false);
    self.SortedByName       = ko.observable(false);
    self.SortedByOverall    = ko.observable(false);
    self.SortedByTradeValue = ko.observable(false);


    self.players = ko.observableArray([]);
    self.teams = ko.observableArray([]);
    self.currentPlayer = ko.observable();
    
    self.currentTeam = ko.observable();
    self.typeToShow = ko.observable('all');

    self.goToRoster = function () {
        self.showPlayer(false);
        self.showRoster(true);
    };

    self.getRoster = function (team) {
        self.showPlayer(false);
        $('#RosterList').fadeOut();
        $.getJSON("/api/values/getroster/",{id: team.id}, function (allData) {
            var mappedPlayers = $.map(allData, function (item) {
                return new Player(item);
            });
            self.currentTeam(team);
            self.players(mappedPlayers);
            self.showRoster(true);
            $('#RosterList').fadeIn();
        });
    };

    self.SortArrow = function () {

    };

    self.getPlayerInfo = function (player) {
        console.log(player.FirstName());
        player.test(player);
        self.currentPlayer(player);
        self.showRoster(false);
        self.showPlayer(true);
    };

    self.SortBySalary = function (player) {
        self.SortedBySalary(true);
        self.SortedByName(false);
        self.SortedByOverall(false);
        self.SortedByTradeValue(false);
        self.players.sort(function (left, right) {
            return left.Salary() > right.Salary() ? -1 : 1;
        });
    };

    self.SortByOverall = function (player) {
        self.SortedBySalary(false);
        self.SortedByName(false);
        self.SortedByOverall(true);
        self.SortedByTradeValue(false);
        self.players.sort(function (left, right) {
            return left.Overall() > right.Overall() ? -1 : 1;
        });
    };

    self.SortByTradeValue = function (player) {
        self.SortedBySalary(false);
        self.SortedByName(false);
        self.SortedByOverall(false);
        self.SortedByTradeValue(true);
        self.players.sort(function (left, right) {
            return left.TradeValue() > right.TradeValue() ? -1 : 1;
        });
    };

    self.SortByName = function (player) {
        self.SortedBySalary(false);
        self.SortedByName(true);
        self.SortedByOverall(false);
        self.SortedByTradeValue(false);
        self.players.sort(function (left, right) {
            return left.LastName() < right.LastName() ? -1 : 1;
        });
    };

    self.PlayersToShow = ko.computed(function () {
        var desiredType = self.typeToShow();
        console.log(desiredType);
        if (desiredType == "all") {
            console.log('all!');
            return self.players();
        }
        return ko.utils.arrayFilter(self.players(), function (player) {
            console.log(player);
            return player.Position() == desiredType;
        });
    }, this);

    //Start by doing this
    $.getJSON("/api/values/teams", function (allData) {
        var mappedTeams = $.map(allData.teams, function (item) {
            return new Team(item);
        });
        self.teams(mappedTeams);
    });


}

//ko.applyBindings(new GameViewModel, $('#games')[0]);
ko.applyBindings(new HockeyAppViewModel);