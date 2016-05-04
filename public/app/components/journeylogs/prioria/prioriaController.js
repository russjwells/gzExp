app.controller('PrioriaCtrl', [
'$scope',
'$location',
'$anchorScroll',
function($scope, $location, $anchorScroll){

  $scope.test = "Prioria World";
    $scope.gotoPrioriaPlanetOverview = function() {
  	$location.hash('PrioriaPlanetOverview');
  	$anchorScroll();
  };
  $scope.gotoLocalAliens = function() {
  	$location.hash('PrioriaLocalAliens');
  	$anchorScroll();
  };
  $scope.gotoSolarSystem = function() {
  	$location.hash('PrioriaSolarSystem');
  	$anchorScroll();
  };
}]);