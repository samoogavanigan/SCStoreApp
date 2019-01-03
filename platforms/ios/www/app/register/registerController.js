/**
 * http://usejsdoc.org/
 */
myapp.controller('registerController', function ($scope, $rootScope, $http, $location) {

	$scope.newUserFormData = {
		"AppsTypeChoice": "-1"
	};

	$scope.LoginUser = {};

	$scope.newRegistrationPromise = null;

	$scope.model = {
		key: '6LevbkoUAAAAAHTvNuVOfMNGGq07cvOXtDIeTBHg',
		lang: $scope._localeCode
	};

	$scope.newRegistration = function () {
		$location.path('/registration');
	}

	$scope.submitRegistration = function () {
		$rootScope.SiteMessage.status = 'In-progress';

		var registerUserData = {
			"realm": $scope.newUserFormData.AppsTypeChoice,
			"username": $scope.newUserFormData.Name,
			"password": $scope.newUserFormData.Name,
			"email": $scope.newUserFormData.Email
		};
		//"mobile": $scope.newUserFormData.Mobile

		// var req = {
		// 	method : 'POST',
		// 	url : app.apiRoot + 'Users',
		// 	data : $scope.newUserFormData
		// }
		var req = {
			method: 'POST',
			url: app.apiRoot + 'Users',
			data: registerUserData
		}

		$scope.newRegistrationPromise = $http(req).then(function (data) {
			// console.log('successfuly registered');
			// console.log(data);
			$rootScope.SiteMessage = {ShowAlert : false, status : 'Completed'};
			$location.path('/registrationStep2');
		}, function (error) {
			$rootScope.HandleError(error);
			//console.log('unable to register the user');
			//$rootScope.SiteMessage = {ShowAlert : false, status : 'Completed'};
		});
	}

	$scope.storeLocatorForm = {};

	$scope.myaddress = {};
});