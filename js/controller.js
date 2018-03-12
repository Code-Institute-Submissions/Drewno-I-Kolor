app.controller('ProductsController', ['$scope','$filter', 'productFactory', '$location', '$routeParams', 
function ($scope, $filter, productFactory, $location, $routeParams) {

	$scope.id = $routeParams.id;
	specifyCategory();
	getProducts();
	
	function specifyCategory() {
		$scope.path = $location.path();
		if ($scope.path == "/products/woodentoys" || $scope.path == "/products/Wooden Toys")  {
			$scope.category = "Wooden Toys"
		} else if ($scope.path == "/products/woodenaccessories" || $scope.path == "/products/Wooden Accessories") {
			$scope.category = "Wooden Accessories"
		} else if ($scope.path == "/products/specialoffers" || $scope.path == "/products/Special Offers" ){
			$scope.category = "Special Offers"
		}
	}

	function getProducts() {
		productFactory.getProducts()
			.then(function (response) {
				$scope.products = response.data;
				$scope.specialOffers = $filter('filter')($scope.products,{category:"Special Offers"}, true);
				randSpecialOffers();
			}, function (error) {
				$scope.status = 'unable to load product data ' + error.message;
			});
	}

	function randSpecialOffers(){
		$scope.randSO =[];
		var rand1 = randomInt($scope.specialOffers.length, 0);
		$scope.randSO.push($scope.specialOffers[rand1]);
		var rand2 = randomInt($scope.specialOffers.length, 0);
		while (rand2 === rand1){
			var rand2 = randomInt($scope.specialOffers.length, 0);
		}
		$scope.randSO.push($scope.specialOffers[rand2]);
		var rand3 = randomInt($scope.specialOffers.length, 0);
		while (rand3 === rand1 || rand3 === rand2){
			var rand3 = randomInt($scope.specialOffers.length, 0);
		}
		$scope.randSO.push($scope.specialOffers[rand3]);
	}

	function randomInt(max,min){
		return Math.floor((Math.random())*(max-min))+min;
	}

}])
	.controller('ContactController',['$scope','MapService', function($scope, MapService){
		MapService.init();
		
		$scope.submitForm = function(isValid) {
			// check to make sure the form is completely valid
			if (isValid) {
			emailjs.sendForm("default_service", "test", "contactForm");
			document.getElementById("thank-you").style.display="block";
			$scope.reset();
			}
		}
		
		$scope.reset = function(){
			$scope.blank = {};
			$scope.form = angular.copy($scope.blank);
			$scope.contactForm.$setPristine();
			$scope.contactForm.$setUntouched();
		}

	}]);

