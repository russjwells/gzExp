app.controller('AlsaMarCtrl', [
'$scope',
'$location',
'$anchorScroll',
function($scope, $location, $anchorScroll){

  $scope.test = "Alsa Mar World";
    $scope.gotoAlsaMarPlanetOverview = function() {
    $location.hash('AlsaMarPlanetOverview');
    $anchorScroll();
  };
  $scope.gotoLocalAliens = function() {
    $location.hash('AlsaMarLocalAliens');
    $anchorScroll();
  };
  $scope.gotoSolarSystem = function() {
    $location.hash('AlsaMarSolarSystem');
    $anchorScroll();
  };
}]);