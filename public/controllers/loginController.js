angular.module('CartApp')
.controller('loginCtrl', function($scope,$state) {
	
	$scope.authenticate = function() {
			if($scope.username!==undefined && $scope.username==$scope.password)
			{
				  localStorage.setItem("user",$scope.username);
				  $state.go('home.products');
			}
			else{
				alert("Invalid username/password");
				$state.go('login');
			}
	  };
	  localStorage.clear();
});