app.controller('AboutCtrl', [
'$scope',
'$location',
'$anchorScroll',
function($scope, $location, $anchorScroll){

  $scope.test = "About World";
  $scope.activeMenu = 'history';

  $scope.gotoHistory = function() {
  	$location.hash('HistorySection');
  	$anchorScroll();
  };
  $scope.gotoHamingja = function() {
  	$location.hash('HamingjaSection');
  	$anchorScroll();
  };
  $scope.gotoMission = function() {
  	$location.hash('MissionSection');
  	$anchorScroll();
  };

}]);