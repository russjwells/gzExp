app.controller('CapabilitiesCtrl', [
'$scope',
'$location',
'$anchorScroll',
function($scope, $location, $anchorScroll){

  $scope.test = "Capabilities World";

  $scope.gotoDeepSpaceResearch = function() {
  	$location.hash('DeepSpaceResearch');
  	$anchorScroll();
  };
  $scope.gotoSystemArrivalProtocol = function() {
  	$location.hash('SystemArrivalProtocol');
  	$anchorScroll();
  };
  $scope.gotoInterstellarTravel = function() {
  	$location.hash('InterstellarTravel');
  	$anchorScroll();
  };
}]);