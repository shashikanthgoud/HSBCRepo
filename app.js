var app = angular.module('CartApp', ['ui.router']);
app.config(function($stateProvider,$urlRouterProvider) {
	 $urlRouterProvider.otherwise('/');
    $stateProvider
    .state("login", {
		url:"/",
        templateUrl : "public/partials/login.html",
		controller : "loginCtrl"
		 
    })
    .state("home", {
		url:"/home",
		abstract: ".products",
        templateUrl : "public/partials/main.html"
    })
	.state("home.products",{
		url:"",
		templateUrl : "public/partials/products.html",
		controller: "productsCtrl"
	})
    .state("home.cart", {
		url:"/cart",
		templateUrl : "public/partials/cart.html",
		controller : "cartCtrl"
    })
	.state("home.emptycart",{
		url:"/cart/empty",
		templateUrl : "public/partials/empty_cart.html",
		controller : "cartCtrl"
	});
});
