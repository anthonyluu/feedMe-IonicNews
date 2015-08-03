angular.module('feedme.controllers', [])

.controller('AppCtrl', function($scope, $localStorage) {
  $scope.myFeeds = $localStorage.menu.feeds; // replace with service to access this
  console.log(JSON.stringify($scope.myFeeds));
})

.controller('FeedCtrl', ['$scope', 'FeedService', function($scope, Feeds) {
  $scope.feed = Feeds.loadFeed('Engadget');
}]);