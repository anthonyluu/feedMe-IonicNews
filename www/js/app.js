// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('feedme', ['ionic', 'ionic-material', 'feedme.controllers', 'feedme.services', 'ngStorage'])

.run(function($ionicPlatform, $localStorage, FeedService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });

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
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.allFeeds', {
      url: '/feed/all',
      views: {
          'menuContent': {
              templateUrl: 'templates/allFeeds.html',
              controller: 'AllFeedsCtrl'
          }
      }
    })
    .state('app.feed', {
      url: '/feed/:rss',
      views: {
          'menuContent': {
              templateUrl: 'templates/feed.html',
              controller: 'FeedCtrl'
          }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/feed/all');

});