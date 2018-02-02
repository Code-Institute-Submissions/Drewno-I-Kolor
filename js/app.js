var app = angular.module('dikApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])

.config(function($routeProvider, $locationProvider){
	
	$routeProvider
		.when("/home", { 
			templateUrl: "templates/home.html",
			
		})
		.when("/products/woodentoys", {
			templateUrl: "templates/products/products.html",
			controller: "ProductsController"
		})
		.when("/products/woodenaccessories", {
			templateUrl: "templates/products/products.html",
			controller: 'ProductsController'
		})
		.when("/products/specialoffers", {
			templateUrl: "templates/products/products.html",
			controller: "ProductsController"
		})
		.when("/products/:id",{
			templateUrl: "templates/products/singleProduct.html",
			controller: "ProductsController"
		})
		.otherwise({
			redirectTo: "/home"
	});
		//$locationProvider.html5Mode(true);
		 $locationProvider.hashPrefix('');

});