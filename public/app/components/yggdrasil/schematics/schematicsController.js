app.controller('SchematicsCtrl', [
'$scope',
'$location',
'$anchorScroll',
function($scope, $location, $anchorScroll){

  $scope.test = "Schems";
  $scope.activeMenu = 'top';

  $scope.gotoTop = function() {
  	$location.hash('Top');
  	$anchorScroll();
  };
  $scope.gotoFloorPlan = function() {
  	$location.hash('FloorPlan');
  	$anchorScroll();
  };
}]);