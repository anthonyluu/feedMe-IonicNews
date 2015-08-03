angular.module('feedme.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('FeedCtrl', ['$scope', 'FeedService', function($scope, Feeds) {
  $scope.feeds = Feeds.all();
}]);