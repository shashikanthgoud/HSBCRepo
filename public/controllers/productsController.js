angular.module('CartApp')
 .controller('productsCtrl', function($scope,$rootScope,$state,cartFactory,$http){
		$http.get('products.json')
		.then(function(response){
			$scope.productsList = response.data;
		});
		
		$scope.addToCart=function(item){
			cartFactory.addItemToCart(item);
		}
			
		$scope.searchProduct=function(ptype){
			$scope.searchPtype=ptype;
		}
		
		$scope.getCurrentProductDetails=function(product){
			$scope.currentProduct=product;
		}
});