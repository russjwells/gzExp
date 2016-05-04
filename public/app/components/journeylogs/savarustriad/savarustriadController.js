app.controller('SavarusTriadCtrl', [
'$scope',
'$location',
'$anchorScroll',
function($scope, $location, $anchorScroll){

  $scope.test = "Alsa Mar World";
    $scope.gotoSavarusPlanetOverview = function() {
    $location.hash('AlsaMarPlanetOverview');
    $anchorScroll();
  };
  $scope.gotoSavarusLocalAliens = function() {
    $location.hash('SavarusLocalAliens');
    $anchorScroll();
  };
  $scope.gotoSavarusSolarSystem = function() {
    $location.hash('SavarusSolarSystem');
    $anchorScroll();
  };
}]);