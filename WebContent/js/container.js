var name, request;

var demoApp = angular.module('demoApp', []);

function SimpleController($scope, $http, $location) {
	$scope.display = function () {
		name = $scope.name_container;
		//alert(name + $scope.name_container);
		request = {
				method: 'POST',
				url: 'http://52.34.147.69:5555/containers/create',
				headers: {'Content-Type': 'application/json' },
				data : { "Image": "ubuntu" }
		}
	
		$http(request).success(function (response) {
			$scope.answer = response.finalValue;
		}).error(function (err) {
			alert(err);
		});
	};
}
demoApp.controller('SimpleController', SimpleController);