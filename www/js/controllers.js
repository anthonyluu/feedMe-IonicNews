angular.module('feedme.controllers', [])

.controller('AppCtrl', function($scope, $localStorage) {
  $scope.myFeeds = $localStorage.menu.feeds; // replace with service to access this
})

.controller('AllFeedsCtrl', function($scope) {
  $scope.myFeeds = $localStorage.menu.feeds;
})

.controller('FeedCtrl', ['$scope', 'FeedService', '$stateParams', function($scope, Feeds, $stateParams) {
  Feeds.loadFeed($stateParams.rss, 50).then(function(response) {
    $scope.feed = response;
  },
  function(rejectedResponse) {
    $scope.feed = [];
  });

  $scope.getArticleDescription = function(description) {
    var txt = document.createElement("textarea");
    txt.innerHTML = String(description).replace(/<[^>]+>/gm, '');
    var textValue = txt.value;
    return textValue;
  };

  $scope.getArticleImage = function(description) {

  }
}]);