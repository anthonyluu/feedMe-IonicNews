angular.module('feedme.controllers', [])

.controller('AppCtrl', function($scope, $localStorage) {
  $scope.myFeeds = $localStorage.menu.feeds; // replace with service to access this
})

.controller('AllFeedsCtrl', function($scope, $localStorage, FeedService) {
  $scope.supportedFeeds = FeedService.listAllFeeds();
})

.controller('FeedCtrl', ['FeedService', '$ionicModal', '$sce','$scope', '$stateParams', function(Feeds, $ionicModal, $sce, $scope, $stateParams) {

  var load = function(refresh) {
    Feeds.loadFeed($stateParams.rss, 50).then(function(response) {
      $scope.feed = response;
      if (refresh) {
        $scope.$broadcast('scroll.refreshComplete');
      }
    },
    function(rejectedResponse) {
      $scope.feed = [];
    });
  }
  // load the feed
  load();

  // modal stuff
  $ionicModal.fromTemplateUrl('templates/news-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })

  $scope.openDetails = function(index) {
    $scope.currentNews = $scope.feed[index];
    console.log($scope.currentNews);
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  // refreshing stuff when pulled down

  $scope.doRefresh = function() {
    // call load again, but this time, set the refreshComplete flag
    load(true);
  }

  $scope.printable = function(src) {
    if(src) {
      var printable = src.replace(/FnL04/, 'FnL13');
      return $sce.trustAsResourceUrl(src);
    }
    return "";
  }

  $scope.getArticleDescription = function(description) {
    var txt = document.createElement("textarea");
    txt.innerHTML = String(description).replace(/<[^>]+>/gm, '');
    var textValue = txt.value; // TODO: Delete created textarea element 
    return textValue;
  };

  $scope.getArticleImage = function(description) {

  }
}]);