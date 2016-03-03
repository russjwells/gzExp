app.controller('InteriorsCtrl', [
'$scope',
'$location',
'$anchorScroll',
function($scope, $location, $anchorScroll){

  $scope.test = "Interiors World";
  $scope.gotoObservatory = function() {
  	$location.hash('Observatory');
  	$anchorScroll();
  };
  $scope.gotoBridge = function() {
  	$location.hash('Bridge');
  	$anchorScroll();
  };
  $scope.gotoAquaticHoldingTank = function() {
  	$location.hash('AquaticHoldingTank');
  	$anchorScroll();
  };
}]);