
var myApp = angular.module('myApp',[
	'ngRoute',
	'myAppCtrls',
	'myAppServices',
	'myAppDirectives'
	]);

myApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
		  when('/first',{
		  	templateUrl:'views/first.html',
		  	controller:'turntoCtrl'
		  }).
		  when('/second',{
		  	templateUrl:'views/second.html',
		  }).
		  otherwise({
		  	redirectTo:'/first'
		  });

	}]);

