var myapp = angular.module('myApp', ["ngResource", "ngRoute"]);

myapp.config(function($routeProvider) {

	$routeProvider.when("/login", {
	    templateUrl: "login.html",
	    controller: "LoginController"
	});

	$routeProvider.when("/home", {
	    templateUrl: "home.html",
	    controller: "homeController"
	});

	$routeProvider.otherwise({ redirectTo: '/home'});

	});

