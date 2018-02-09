app.factory('productFactory', ['$http', function ($http) {

	var pFactory = {};

	pFactory.getProducts = function () {
		return $http.get('../data/products.json');
	};

	return pFactory;

}]);

