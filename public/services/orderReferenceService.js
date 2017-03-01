angular.module('CartApp')
 .factory('orderReferenceNumberService', function() {
	var obj={};
	obj.random = function(length) {
		var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890";
		var pass = "";
		for (var x = 0; x < length; x++) {
			var i = Math.floor(Math.random() * chars.length);
			pass += chars.charAt(i);
		}
		return pass;
	}
	return obj;
});