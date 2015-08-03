angular.module('feedme.services', [])

.factory('FeedService', ['$http', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var feeds = [{
    title: "Engadget",
    icon: 'http://www.engadget.com/favicon.ico',
    link: 'http://www.engadget.com/rss.xml',
    subtitles: []
  },
  {
    title: "The Next Web",
    icon: 'http://thenextweb.com/favicon.ico',
    link: 'http://feeds2.feedburner.com/thenextweb',
    subtitles: []
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
        return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + num + '&callback=JSON_CALLBACK&q=' + encodeURIComponent(url)).then(function(response) {
          feed = response.data.responseData.feed.entries;
          return feed;
        });
      }
    }
  };
}]);
