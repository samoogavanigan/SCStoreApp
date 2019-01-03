/**
 * http://usejsdoc.org/
 */
myapp.controller('homeController', function ($scope, $rootScope, $http, $location) {

	// $scope.newUserFormData = {
	// 	"AppsTypeChoice" : "-1"
	// };

	//$scope.LoginUser = {};

	//$scope.newRegistrationPromise = null;

	// $scope.model = {
	// 	key : '6LevbkoUAAAAAHTvNuVOfMNGGq07cvOXtDIeTBHg',
	// 	lang : $scope._localeCode
	// };

	// $scope.UserLogin = function() {
	// 	$rootScope.SiteMessage.status = 'In-progress';
	// 	var req = {
	// 		method : 'POST',
	// 		url : app.apiRoot + 'StoreUsers/getStore',
	// 		date : $scope.LoginUser
	// 	}

	// 	$scope.LoginUserPromise = $http(req).then(function(data) {
	// 		//console.log('user successfuly login');
	// 		//console.log(data);
	// 		$('#leftNavSlider').show();
	// 		$rootScope.SiteMessage = {ShowAlert : false, status : 'Completed'};
	// 		$location.path('/storeLocator');
	// 	}, function() {
	// 		//console.log('unable to login the user');
	// 		$('#leftNavSlider').hide();
	// 		$rootScope.SiteMessage = {ShowAlert : true, AlertType : 'danger', AlertMessage : 'oh Snap!'
	// 		, AlertMessage : 'Site is down', status : 'Completed'};
	// 	});
	// }


	// //app.apiRoot
	// $scope.newRegistration = function() {
	// 	$location.path('/registration');
	// }

	// //app.apiRoot
	// $scope.submitRegistration = function() {

	// 	var mydata = {
	// 		"realm": "scstoreconsumer",
	// 		"username": "kannan",
	// 		"password": "test123",
	// 	  "email":"k.raja.17050@gmail.com",
	// 		"emailVerified": true
	// 	  };
	// 	// var req = {
	// 	// 	method : 'POST',
	// 	// 	url : app.apiRoot + 'Users',
	// 	// 	data : $scope.newUserFormData
	// 	// }
	// 	var req = {
	// 			method : 'POST',
	// 			url : app.apiRoot + 'Users',
	// 			data : mydata
	// 		}

	// 	$scope.newRegistrationPromise = $http(req).then(function(data) {
	// 		// console.log('successfuly registered');
	// 		// console.log(data);
	// 		$location.path('/registrationStep2');
	// 	}, function() {
	// 		console.log('unable to register the user');
	// 	});
	// }

	// $scope.storeLocatorForm = {};

	// $scope.myaddress = {};
});