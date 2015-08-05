angular.module('feedme.services', [])

.factory('FeedService', ['$http', '$q', function($http, $q) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var feeds = [{
    title: "Engadget",
    icon: 'http://www.engadget.com/favicon.ico',
    link: 'http://www.engadget.com/rss.xml',
    image: 'img/feeds/the-next-web-logo.png',
    description: 'Worldwide, Tech News',
    isAdded: true
  },
  {
    title: "The Next Web",
    icon: 'http://thenextweb.com/favicon.ico',
    link: 'http://feeds2.feedburner.com/thenextweb',
    image: 'img/feeds/the-next-web-logo.png',
    description: 'Worldwide, Tech News',
    isAdded: true
  }];

  var feed = [];

  return {
    loadFeed: function(siteTitle, num) {
      var url;
      for (i = 0; i < feeds.length; i ++) {
        if (feeds[i].title === siteTitle) {
          url = feeds[i].link;
        }
      }
      if (url) {
        return $http.jsonp('https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + num + '&callback=JSON_CALLBACK&q=' + encodeURIComponent(url)).then(function(response) {
          feed = response.data.responseData.feed.entries;
          return feed;
        });
      }
      else return $q.reject("siteTitle does not exist");
    },
    listAllFeeds: function() {
      return feeds;
    },
    defaultFeeds: function() {
      return [];
    }
  };
}]);
