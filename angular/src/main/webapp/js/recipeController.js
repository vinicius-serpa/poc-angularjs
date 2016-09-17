var recipeController = function($scope, UserService) {
	
	$scope.name = "";
	$scope.users = UserService.all();
	
	$scope.$watch("name", function(newValue, oldValue) {
		if ($scope.name.length > 0)
			$scope.greeting = "Greeting " + $scope.name;
	});
	
}

recipeController.$inject = ["$scope", "UserService"];

var anotherController = function($scope, UserService) {
	$scope.firstUser = UserService.first();
}

anotherController.$inject = ["$scope", "UserService"];