angular.module('CartApp')
 .directive("orderReferenceModal",function(){
	var directive={};
	directive.restrict = "E";
	directive.templateUrl = "public/templates/order.html";
	return directive;
}); 