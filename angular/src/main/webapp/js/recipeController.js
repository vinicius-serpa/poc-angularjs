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

var filterController = function($scope) {
	
	$scope.friends = [{name: "Camilo", lastname: "Lopes", age: 20},
	                  {name: "Chapolin", lastname: "Santana", age: 55},
	                  {name: "Madruga", lastname: "Santos", age: 60},
	                  {name: "Ana", lastname: "Lopes", age: 30}];
	
	$scope.sortField = undefined;
	$scope.reverse = false;
	
	$scope.isSortUp = function(fieldName) {
		return $scope.sortField === fieldName && !$scope.reverse;
	}
	
	$scope.isSortDown = function(fieldName) {
		return $scope.sortField === fieldName && $scope.reverse;
	}
	
	$scope.sort = function(fieldName) {
		if ($scope.sortField === fieldName) {
			$scope.reverse = !$scope.reverse;
		} else {
			$scope.sortField = fieldName;
			$scope.reverse = false;
		}
	}
}