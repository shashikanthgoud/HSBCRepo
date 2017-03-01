angular.module('CartApp')
 .directive("viewDetailsModal",function(){
	var directive={};
	directive.restrict = "E";
	directive.templateUrl = "public/templates/viewdetails.html";
	directive.scope={
		product : "="
	};
	return directive;
});