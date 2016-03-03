app.controller('YggdrasilCtrl', [
'$scope',
'$location',
'$anchorScroll',
function($scope, $location, $anchorScroll){

  $scope.test = "Yggdrasil World";
  $scope.activeMenu = 'ship';

  $scope.gotoShip = function() {
  	$location.hash('yggMain');
  	$anchorScroll();
  };
  $scope.gotoFeatures = function() {
  	$location.hash('yggMenu');
  	$anchorScroll();
  };
}]);