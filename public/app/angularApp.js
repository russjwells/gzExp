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
	    	abstract: true,
	    	url: '/yggdrasil',
	    	templateUrl: 'app/components/yggdrasil/yggdrasilView.html',
	    	controller: 'YggdrasilCtrl'
	    })
	    .state('root.main.yggdrasil.ship', {
	    	url: '',
	    	templateUrl: 'app/components/yggdrasil/shipView.html'
	    })
	    .state('root.main.yggdrasil.capabilities', {
	    	url: '/capabilities',
	    	templateUrl: 'app/components/yggdrasil/capabilities/capabilitiesView.html',
	    	controller: 'CapabilitiesCtrl'
	    })
	    .state('root.main.yggdrasil.schematics', {
	    	url: '/schematics',
	    	templateUrl: 'app/components/yggdrasil/schematics/schematicsView.html',
	    	controller: 'SchematicsCtrl'
	    })
	    .state('root.main.yggdrasil.interiors', {
	    	abstract: true,
	    	url: '/interiors',
	    	templateUrl: 'app/components/yggdrasil/interiors/interiorsView.html',
	    	controller: 'InteriorsCtrl'
	    })
	    .state('root.main.yggdrasil.interiors.menu', {
	    	url: '',
	    	templateUrl: 'app/components/yggdrasil/interiors/menuView.html',
	    	controller: 'InteriorsCtrl'
	    })
	    .state('root.main.yggdrasil.interiors.observatory', {
	    	url: '/observatory',
	    	templateUrl: 'app/components/yggdrasil/interiors/observatory/observatoryView.html',
	    	controller: 'ObservatoryCtrl'
	    })
	    .state('root.main.yggdrasil.interiors.bridge', {
	    	url: '/bridge',
	    	templateUrl: 'app/components/yggdrasil/interiors/bridge/bridgeView.html',
	    	controller: 'BridgeCtrl'
	    })
	    .state('root.main.yggdrasil.interiors.aquaticholdingtank', {
	    	url: '/aquaticholdingtank',
	    	templateUrl: 'app/components/yggdrasil/interiors/aquaticholdingtank/aquaticholdingtankView.html',
	    	controller: 'AquaticHoldingTankCtrl'
	    })
	    .state('root.main.journeylogs', {
	    	abstract: true,
	    	url: '/journeylogs',
	    	templateUrl: 'app/components/journeylogs/journeylogsView.html',
	    	controller: 'JourneyLogsCtrl'
	    })
	    .state('root.main.journeylogs.journeymenu', {
	    	url: '',
	    	templateUrl: 'app/components/journeylogs/journeymenuView.html',
	    	controller: 'JourneyLogsCtrl'
	    })
	    .state('root.main.journeylogs.prioria', {
	    	url: '/prioria',
	    	templateUrl: 'app/components/journeylogs/prioria/prioriaView.html',
	    	controller: 'PrioriaCtrl'
	    })
	    .state('root.main.journeylogs.alsamar', {
	    	url: '/alsamar',
	    	templateUrl: 'app/components/journeylogs/alsamar/alsamarView.html',
	    	controller: 'AlsaMarCtrl'
	    })
	    .state('root.main.journeylogs.savarustriad', {
	    	url: '/savarustriad',
	    	templateUrl: 'app/components/journeylogs/savarustriad/savarustriadView.html',
	    	controller: 'SavarusTriadCtrl'
	    })
	    .state('root.main.shop', {
	    	url: '/shop',
	    	templateUrl: 'app/components/shop/shopView.html',
	    	controller: 'ShopCtrl'
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