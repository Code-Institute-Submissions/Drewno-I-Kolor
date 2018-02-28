var app = angular.module('dikApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])

	.config(function ($routeProvider, $locationProvider) {

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
			.when("/products/:id", {
				templateUrl: "templates/products/singleProduct.html",
				controller: "ProductsController"
			})
			.when("/bespokeservice", {
				templateUrl: "templates/bespokeservice.html"
			})
			.when("/contactus", {
				templateUrl: "templates/contactus.html",
				controller: "MapController"
			})
			.when("/about", {
				templateUrl: "templates/about.html"
			})
			.otherwise({
				redirectTo: "/home"
			});
		
		$locationProvider.hashPrefix('');

	});