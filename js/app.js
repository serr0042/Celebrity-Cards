var app = angular.module('Booya', ['ngRoute'])

.config(function($routeProvider) {
    //this runs automatically when the main module is created
    console.log('running config');
})

.controller('MainCtrl', function($scope, $routeParams) {
   /** 
   we are tying this to the interface (initially) by adding 
   ng-controller to the <main> element
   **/
    
    console.log('MainCtrl is initialized');
});