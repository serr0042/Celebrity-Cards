angular.module('Booya')

.config(function($routeProvider) {
    //this runs automatically when the main module is created
	//routing
	$routeProvider
	.when('/', {
		templateUrl:'templates/main.html',
		controller: 'MainCtrl'
		
	})
	.when('/details/:itemNum', {
		templateUrl:'templates/details.html',
		controller: 'DetailsCtrl'
		
	})
	.otherwise({redirectTo: '/'});
	
    console.log('running config');
});