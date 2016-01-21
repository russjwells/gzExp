var app = angular.module('gzExp', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
'$locationProvider',
function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider
		.state('landing', {
			url: '/',
			templateUrl: 'app/components/landing/landingView.html',
			controller: 'LandingCtrl',
			controllerUrl: 'app/components/landing/landingController.js'
		})
	    .state('main', {
	      url: '/main',
	      templateUrl: '/main.html',
	      controller: 'MainCtrl'
	    })
	    .state('about', {
	    	url: '/about',
	    	templateUrl: 'app/components/about/aboutView.html',
	    	controller: 'AboutCtrl',
	    	controllerUrl: 'app/components/about/aboutController.js'
	    })
	    .state('yggdrasil', {
	    	url: '/yggdrasil',
	    	templateUrl: 'app/components/yggdrasil/yggdrasilView.html',
	    	controller: '/YggdrasilCtrl'
	    })
	    .state('journeylogs', {
	    	url: '/journeylogs',
	    	templateUrl: 'app/components/journeylogs/journeylogsView.html',
	    	controller: 'JourneyLogsCtrl'
	    })
	    .state('login', {
	    	url: '/login',
	    	templateUrl: '/login.html',
	    	controller: 'AuthCtrl',
	    	onEnter: ['$state', 'auth', function($state, auth) {
	    		if (auth.isLoggedIn()) {
	    			$state.go('main');
	    		}
	    	}]
	    })
	    .state('register', {
	    	url: '/register',
	    	templateUrl: '/register.html',
	    	controller: 'AuthCtrl',
	    	onEnter: ['$state', 'auth', function($state, auth) {
	    		if (auth.isLoggedIn()) {
	    			$state.go('main');
	    		}
	    	}]
	    });

	$urlRouterProvider.otherwise('landing');
	//$locationProvider.html5Mode(true);

}]);
/*
app.controller('MainCtrl', [
'$scope',
function($scope){

  $scope.test = "Main World";

}]);

app.controller('LandingCtrl', [
'$scope',
function($scope){

  $scope.test = "Landing World";

}]);
*/
app.controller('AuthCtrl', [
	'$scope',
	'$state',
	'auth',
	function($scope, $state, auth){
		$scope.user = {};

		$scope.register = function(){
			auth.register($scope.user).error(function(error){
				$scope.error = error;
			}).then(function(){
				$state.go('home');
			});
		};

		$scope.logIn = function(){
			auth.logIn($scope.user).error(function(error){
				$scope.error = error;
			}).then(function(){
				$state.go('home');
			});
		};
	}]);