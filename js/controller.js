app.controller('ProductsController', ['$scope', 'productFactory', '$location', '$routeParams', function ($scope, productFactory, $location, $routeParams) {

	$scope.path;
	$scope.category;
	$scope.products;

	$scope.id = $routeParams.id;

	specifyCategory();
	getProducts();

	function getProducts() {
		productFactory.getProducts()
			.then(function (response) {
				$scope.products = response.data;
			}, function (error) {
				$scope.status = 'unable to load product data ' + error.message;
			});
	}

	function specifyCategory() {
		$scope.path = $location.path();

		if ($scope.path == "/products/woodentoys") {
			$scope.category = "Wooden Toys"
		} else if ($scope.path == "/products/woodenaccessories") {
			$scope.category = "Wooden Accessories"
		} else {
			$scope.category = "Special Offers"
		}
	}

}])
	.controller('MapController',['$scope','MapService', function($scope, MapService){
		MapService.init();
	}]);

