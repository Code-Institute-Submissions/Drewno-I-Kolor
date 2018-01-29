app.controller('ProductsController', ['$scope', 'productFactory', '$location', function($scope, productFactory, $location){
		
	$scope.products;
	$scope.path;
	$scope.category;


	getCustomers();

	function getCustomers(){
		productFactory.getProducts()
		.then(function (response){
			$scope.products = response.data;
			}, function(error){
				$scope.status = 'unable to load product data ' + error.message;
			});
	}

	$scope.path = $location.path();
	
	if($scope.path == "/products/woodentoys"){
		$scope.category = "Wooden Toys" 
	} else if ($scope.path == "/products/woodenaccessories"){
		$scope.category = "Wooden Accessories" 
	} else {
		$scope.category = "Special Offers" 
	}
		
}]);