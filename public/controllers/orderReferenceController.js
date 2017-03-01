angular.module('CartApp')
 .controller('OrderReferenceController', function($scope, orderReferenceNumberService) {
    $scope.ref = orderReferenceNumberService.random(8);
});