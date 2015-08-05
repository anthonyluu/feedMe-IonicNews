angular.module('feedme.services', [])

.factory('FeedService', ['$http', '$q',  '$localStorage', function($http, $q, $localStorage) {
  // Preload data if not present
  // Now prepopulate the default feeds
  if(!$localStorage.menu) {
    $localStorage.menu = {};
  }
  if (!$localStorage.menu.feeds) {
    $localStorage.menu.feeds = [];
  }
  if (!$localStorage.supportedFeeds) {
    $localStorage.supportedFeeds = [{
      title: "Engadget",
      icon: 'http://www.engadget.com/favicon.ico',
      link: 'http://www.engadget.com/rss.xml',
      image: 'img/feeds/the-next-web-logo.png',
      description: 'Worldwide, Tech News',
      isAdded: false
    },
    {
      title: "The Next Web",
      icon: 'http://thenextweb.com/favicon.ico',
      link: 'http://feeds2.feedburner.com/thenextweb',
      image: 'img/feeds/the-next-web-logo.png',
      description: 'Worldwide, Tech News',
      isAdded: false
    }];
  }

  var feeds = $localStorage.supportedFeeds;
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
    }
  };
}]);
