var app = angular.module('gzExp', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
'$locationProvider',
function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider
		.state('root', {
			abstract: true,
			views: {
				"": {
					controller: 'RootCtrl',
					templateUrl: 'app/shared/rootView.html'
				},
			},
		})
		.state('root.landing', {
			url: '/',
			templateUrl: 'app/components/landing/landingView.html',
			controller: 'LandingCtrl',
			controllerUrl: 'app/components/landing/landingController.js'
		})
	    .state('root.main', {
	      abstract: true,
	      templateUrl: 'app/shared/mainView.html',
	      controller: 'MainCtrl'
	    })
	    .state('root.main.about', {
	    	url: '/about',
	    	templateUrl: 'app/components/about/aboutView.html',
	    	controller: 'AboutCtrl',
	    	controllerUrl: 'app/components/about/aboutController.js'
	    })
	    .state('root.main.yggdrasil', {
	    	url: '/yggdrasil',
	    	templateUrl: 'app/components/yggdrasil/yggdrasilView.html',
	    	controller: 'YggdrasilCtrl'
	    })
	    .state('root.main.journeylogs', {
	    	url: '/journeylogs',
	    	templateUrl: 'app/components/journeylogs/journeylogsView.html',
	    	controller: 'JourneyLogsCtrl'
	    })
	    .state('root.login', {
	    	url: '/login',
	    	templateUrl: '/login.html',
	    	controller: 'AuthCtrl',
	    	onEnter: ['$state', 'auth', function($state, auth) {
	    		if (auth.isLoggedIn()) {
	    			$state.go('root.main.about');
	    		}
	    	}]
	    })
	    .state('root.register', {
	    	url: '/register',
	    	templateUrl: '/register.html',
	    	controller: 'AuthCtrl',
	    	onEnter: ['$state', 'auth', function($state, auth) {
	    		if (auth.isLoggedIn()) {
	    			$state.go('root.main.about');
	    		}
	    	}]
	    });

	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);

}]);

app.controller('RootCtrl', [
'$scope',
function($scope){

  $scope.test = "Root World";

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