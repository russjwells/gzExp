app.controller('SavarusTriadCtrl', [
'$scope',
'$location',
'$anchorScroll',
function($scope, $location, $anchorScroll){

  $scope.test = "Journey Logs World";
    $scope.gotoPrioria = function() {
  	$location.hash('Prioria');
  	$anchorScroll();
  };
  $scope.gotoAlsaMar = function() {
  	$location.hash('AlsaMar');
  	$anchorScroll();
  };
  $scope.gotoSavarusTriad = function() {
  	$location.hash('SavarusTriad');
  	$anchorScroll();
  };
}]);