angular.module('feedme.controllers', [])

.controller('AppCtrl', function($scope, $localStorage) {
  $scope.myFeeds = $localStorage.menu.feeds; // replace with service to access this
  console.log(JSON.stringify($scope.myFeeds));
})

.controller('FeedCtrl', ['$scope', 'FeedService', '$stateParams', function($scope, Feeds, $stateParams) {
  Feeds.loadFeed($stateParams.rss, 50).then(function(response) {
    $scope.feed = response;
    $scope.busy = false;
  },
  function(rejectedResponse) {
    $scope.feed = [];
  });
}]);