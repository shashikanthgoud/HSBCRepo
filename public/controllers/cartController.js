angular.module('CartApp')
 .controller('cartCtrl', function($scope,$rootScope,$state,cartFactory){
	
	$scope.cart=cartFactory.loadCart();
	if($scope.cart.length === 0){
		$state.go('home.emptycart');
	}else{
		$scope.products=$scope.cart;
	} 
	$scope.removeItem=function(item){
		var some=cartFactory.removeItemFromCart(item);
		if(some.length === 0){
			$state.go('home.emptycart');
		}
		
	}
	
	$scope.changeQuantity=function(item){
		cartFactory.setQuantityForItem(item);
	}
	$scope.total=function(){
		return cartFactory.totalCartCost();
	}
});