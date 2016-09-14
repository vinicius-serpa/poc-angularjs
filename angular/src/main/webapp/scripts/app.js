var app = angular.module("myapp", []);

// route or deep linking
app.config(
		function ($routeProvider, $httpProvider, $locationProvider) {
			$routeProvider
			.when("/", {templateUrl: "home.html"})
			.when("/upper", {templateUrl: "upperfilter.html"})
			.when("/serviceioc", {templateUrl: "serviceioc.html"})
			.when("/watch", {templateUrl: "watch.html", controller: recipeController});
		});