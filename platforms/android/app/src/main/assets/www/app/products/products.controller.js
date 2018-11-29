/**
 * http://usejsdoc.org/
 */
myapp.controller('productsController', function($scope, $mdDialog, $mdToast, productsFactory){
 
    // read products
    $scope.readProducts = function(){
 /*
        // use products factory
        productsFactory.readProducts().then(function successCallback(response){
            $scope.products = response.data.records;
        }, function errorCallback(response){
            $scope.showToast("Unable to read record.");
        });
*/        
    	console.log('setting data');
        $scope.products = [{name:'banana', description: 'banana fruit', price: '0.25c'}];
 
    }
     
    // showCreateProductForm will be here
     
    // DialogController will be here
});