/**
 * http://usejsdoc.org/
 */
myapp.controller('homeController', function($scope, $rootScope, $http){

	$scope.newUserFormData = {"AppsTypeChoice":"-1"};
	
	$scope.newRegistrationPromise = null;
	
	$scope.model = {
            key: '6LevbkoUAAAAAHTvNuVOfMNGGq07cvOXtDIeTBHg',
            lang : $scope._localeCode
        };

	
	//app.apiRoot
	$scope.newRegistration = function() {
		
		var req = {
		 method: 'POST',
		 url: app.apiRoot + 'StoreUsers',
		 data: $scope.newUserFormData
		}
	
		$scope.newRegistrationPromise = $http(req).then(function(data){
			console.log('successfuly registered');
			console.log(data);
		}, function(){
			console.log('unable to register the user');
		});
	}
	

});