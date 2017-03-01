angular.module('CartApp')
 .factory("cartFactory",function($rootScope){
	var obj={};
	var cartItems=[];
	obj.saveCart=function(){
		localStorage.setItem("cartData", JSON.stringify(cartItems));
	}
	obj.loadCart=function() {
        cartItems = JSON.parse(localStorage.getItem("cartData"));
        if (cartItems === null) {
            cartItems = [];
        }
		return cartItems;
    }
	obj.addItemToCart=function(item){
		item.quantity=1;
		$rootScope.totalCartCount();
	    for(var i in cartItems){
		   if(cartItems[i].pid === item.pid){
			   cartItems[i].quantity++;
			   obj.saveCart();
			   return;
		   }
	    }
	   cartItems.push(item);
	   obj.saveCart();
	}
	obj.removeItemFromCart = function (item) { 
        for (var i in cartItems) {
            if (cartItems[i].pid === item.pid) {
                cartItems.splice(i, 1);
                break;
            }
        }
        obj.saveCart();
		return cartItems;
    };
	$rootScope.totalCartCount=function(){
		var totalCount = 0;
        for (var i in cartItems) {
            totalCount += cartItems[i].quantity;
        }
        return totalCount;	
	}
	obj.setQuantityForItem = function (item) {
        for (var i in cartItems) {
            if (cartItems[i].pid === item.pid) {
                cartItems[i].quantity = item.quantity;
                break;
            }
        }
        obj.saveCart();
    };
	obj.totalCartCost=function(){
		var total=0;
		for(var i in cartItems){
			total+=cartItems[i].quantity*cartItems[i].price;
		}
		return total;
	}
	return obj;
});