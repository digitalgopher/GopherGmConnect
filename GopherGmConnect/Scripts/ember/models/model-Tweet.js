App.Tweet = Ember.Object.extend({

});

App.Tweet.reopenClass({
    findAll: function (username) {
        var data = {
            username: username
        }
        var allTweets = Em.A();
        return $.getJSON("/api/gopher/gettweets", data).then(function (response) {
            response.forEach(function (tweet) {
                var aTweet = App.Tweet.create();
                var url = "https://twitter.com/" + tweet.creator.screenName + "/status/" + tweet.idStr
                var date = moment(tweet.createdAt).fromNow();
                aTweet.setProperties({
                    text: tweet.text,
                    url: url,
                    date: date
                })
                allTweets.pushObject(aTweet);
            });
            return allTweets;
        });
    }
});