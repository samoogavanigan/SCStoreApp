myapp.controller('userController', function ($scope, $rootScope, $http, $location) {

    // login user modal
    $scope.OpenLogout = function () {
        $('#_messageModal').modal('show');
        
        // console.log('setting data');
        // $scope.currentuser = {};
        // $('#leftNavSlider button')[0].click();
        // $('#leftNavSlider').hide();
        // $location.path('/');
    }

    // login user
    $scope.loginUser = function () {
        /*
               // use products factory
               productsFactory.readProducts().then(function successCallback(response){
                   $scope.products = response.data.records;
               }, function errorCallback(response){
                   $scope.showToast("Unable to read record.");
               });
       */
        console.log('setting data');
        $scope.currentuser = {
            name: 'Ramani',
            gender: 'Male'
        };

    }
    $scope.logoutUser = function () {
        //TODO: Logout user session
        $('#_messageModal').modal('hide');
        $scope.currentuser = {};
        $('#leftNavSlider button')[0].click();
        $('#leftNavSlider').hide();
        $location.path('/');
    }
    
});