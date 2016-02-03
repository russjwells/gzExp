app.controller('LandingCtrl', [
'$scope',
'$location',
'$anchorScroll',
function($scope, $location, $anchorScroll){

  $scope.test = "this is the landing";

  $scope.gotoZooIntro = function(){
  	$location.hash('zooIntro');
  	$anchorScroll();
  };

}]);