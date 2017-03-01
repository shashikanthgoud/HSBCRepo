angular.module('CartApp')
 .controller('homeCtrl', function($scope,cartFactory){
	 $scope.user=localStorage.getItem("user");
	cartFactory.loadCart();
});