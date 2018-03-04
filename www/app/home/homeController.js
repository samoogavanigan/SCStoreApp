/**
 * http://usejsdoc.org/
 */
myapp.controller('homeController', function($scope, $rootScope, $http){

	$scope.newUserFormData = {"AppsTypeChoice":"-1"};
	
	$scope.newRegistrationPromise = null;
	
	
	
	//app.apiRoot
	$scope.newRegistration = function() {
		var newUser = {
				  "UserName": "Kannan1",
				  "UserPassword": "test1231",
				  "Phone": "7007001235",
				  "Email": "vorkathome@gmail.com",
				  "EmailStatus": "Submitted",
				  "MobileStatus": "Submitted",
				  "FirstName": "Kannan",
				  "LastName": "Raja"
				};
		
		var req = {
		 method: 'POST',
		 url: app.apiRoot + 'StoreUsers',
		 data: newUser
		}
	
		$scope.newRegistrationPromise = $http(req).then(function(data){
			console.log('successfuly registered');
			console.log(data);
		}, function(){
			console.log('unable to register the user');
		});
	}
	

});