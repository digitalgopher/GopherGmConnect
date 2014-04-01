App.PlayerController = Ember.ObjectController.extend({
    isLoaded: null,
    needs: ['application'],
 //   allTeams: Ember.computed.oneWay('controllers.application.teams'),
    displayStatValue: 'position',
    showDetails: false,
    displayStat: function () {
        var stat = this.get('displayStatValue');
        return this.get(stat);
    }.property('displayStatValue'),

    potentialStars: function () {
        var pt = this.get('potential');
        var color = this.get('potentialColorString');
        var totalStars = Math.ceil(pt);
        var isHalfStar = pt % 1 != 0;
        var starArray = [];
        for (var i = 0; i < totalStars; i++) {
            var star = {
                color: color,
                isFullStar: true,
                starClass: 'fa-star'
            }
            starArray.push(star);
        }
        if (isHalfStar) {
            starArray[totalStars - 1].isFullStar = false;
            starArray[totalStars - 1].starClass = 'fa-star-half';
        }
        return starArray;
    }.property(),

    contractTypeString: function (){
        if (this.get('isTwoWay')) {
            return 'rfa';
        }
        return 'ufa';
    }.property(),
    salaryYears: function () {
        var years = Em.A();
        var yearsLeft = this.get('yearsLeft');
        var moreThanFive = false;
        if (yearsLeft > 5) {
            yearsLeft = 5;
            moreThanFive = true;
        }

        for (var i = 1; i <= yearsLeft ; i++) {
            if (yearsLeft === 0) break;

            var yearSalaryObject = {
                salary: this.get('salaryString'),
                salaryClass: "salaryNumber",
                salarySmall: '$' + this.get('salarySmall'),
                moreThanFive: moreThanFive,
            }

            years.pushObject(yearSalaryObject);

            if (i === yearsLeft && i != 5) {
                var status = "ufa";
                if (this.get('isTwoWay')) {
                    status = "rfa";
                }
                var contractExpired = {
                    salary: status.toUpperCase(),
                    salaryClass: status,
                    salarySmall: status.toUpperCase()

                }
                years.pushObject(contractExpired);

            }


        }
        return years;
    }.property(),


    salarySmall: function () {
        var amt = this.get('salaryReadable');
        return amt / 1000000;
    }.property('salaryReadable'),

    handed: function () {
        var shoots = this.get('shoots');
        if (shoots == 0) {
            return "L";
        }
        return "R";
    }.property('shoots'),

    //readPotential: Ember.computed.alias('potential'),

    //readPotentialColor: function () {
    //    var p = this.get('potentialColor');
    //    return PotentialColor[p];
    //}.property('potenticalColor'),

    //isGoalie: function () {
    //    if (this.get('position') == "G") {
    //        return true;
    //    }
    //    return false;
    //}.property('position'),

    salaryString: function () {
        return numberWithCommas(this.get('salaryReadable'));
    }.property('salaryReadable'),

    tradeValuePercent: function () {
        return (this.get('tradeValue') / 1000) * 100;
        //return "width: " + (this.get('tradeValue') / 1000) * 100 + "%;";
    }.property('tradeValue'),

    contractType: function () {
        if (this.get('isTwoWay')) {
            return "Two";
        }
        return "One";
    }.property("isTwoWay"),


    flagImage: function () {
        var country = this.get('country');
        return '/content/images/flags/' + country + '.png';
    }.property('country'),




    //updatePlayerTeam: function () {
    //    var self = this;
    //    var playerTeam = self.get('allTeams').findBy('id', self.get('teamId').toString());
    //    self.set('team', playerTeam);
    //},
    //actions: {
    //}
});


//App.PlayerController.reopen({
//    container: App.__container__
//})
