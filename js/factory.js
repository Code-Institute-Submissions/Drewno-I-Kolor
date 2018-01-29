// app.factory('productFactory', function($http){
// 	var pFactory = {};
	
// 	pFactory.getProducts = function(){
// 		$http.get('../data/products.json')
// 		.then(function(data){
// 			products = response.data;
// 		});
// 		return products;
// 	};
// 	return pFactory;
// });

app.factory('productFactory', ['$http', function($http){
	
	var pFactory = {};

	pFactory.getProducts = function(){
		return $http.get('../data/products.json');
	};

	return pFactory;

	}]);