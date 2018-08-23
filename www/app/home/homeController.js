/**
 * http://usejsdoc.org/
 */
myapp.controller('homeController', function($scope, $rootScope, $http, $location) {

	$scope.newUserFormData = {
		"AppsTypeChoice" : "-1"
	};
	
	$scope.LoginUser = {};

	$scope.newRegistrationPromise = null;

	$scope.model = {
		key : '6LevbkoUAAAAAHTvNuVOfMNGGq07cvOXtDIeTBHg',
		lang : $scope._localeCode
	};

	$scope.UserLogin = function() {

		var req = {
			method : 'POST',
			url : app.apiRoot + 'StoreUsers/getStore',
			date : $scope.LoginUser
		}

		$scope.LoginUserPromise = $http(req).then(function(data) {
			console.log('user successfuly login');
			console.log(data);
			$location.path('/storeLocator');
		}, function() {
			console.log('unable to login the user');
			$rootScope.Site.Status = 'Down';
		});
	}

	
	//app.apiRoot
	$scope.newRegistration = function() {

		var req = {
			method : 'POST',
			url : app.apiRoot + 'StoreUsers',
			data : $scope.newUserFormData
		}

		$scope.newRegistrationPromise = $http(req).then(function(data) {
			console.log('successfuly registered');
			console.log(data);
		}, function() {
			console.log('unable to register the user');
		});
	}
	
	$scope.storeLocatorForm = {};
	
	$scope.myaddress = {};
});