var app = angular.module('gzExp', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('landing', {
			url: '/',
			templateUrl: '/components/landing/landingView.html',
			controller: '/components/landing/landingController.js'
		})
	    .state('main', {
	      url: '/main',
	      templateUrl: '/main.html',
	      controller: 'MainCtrl'
	    })
	    .state('about', {
	    	url: '/about',
	    	templateUrl: '/components/about/aboutView.html',
	    	controller: '/components/about/aboutController.js'
	    })
	    .state('yggdrasil', {
	    	url: '/yggdrasil',
	    	templateUrl: '/components/yggdrasil/yggdrasilView.html',
	    	controller: '/components/yggdrasil/yggdrasilController.js'
	    })
	    .state('journeylogs', {
	    	url: '/journeylogs',
	    	templateUrl: '/components/journeylogs/journeylogsView.html',
	    	controller: '/components/journeylogs/journeylogsController.js'
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

	$urlRouterProvider.otherwise('main');

}]);

app.controller('MainCtrl', [
'$scope',
function($scope){

  $scope.test = "Hello World";

}]);

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