angular.module('CartApp')
 .filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];
		  angular.forEach(collection, function(product) {
          var key = product[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(product);
          }
      });
      return output;
   };
});