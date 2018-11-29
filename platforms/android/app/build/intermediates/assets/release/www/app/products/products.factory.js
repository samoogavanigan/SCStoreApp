/**
 * http://usejsdoc.org/
 */
myapp.factory("productsFactory", function($http){
 
    var factory = {};
 
    // read all products
    factory.readProducts = function(){
    	var products = [{name:'banana', product: 'banana fruit', price: '0.25c'}];
    	return products;
        /*return $http({
            method: 'GET',
            url: 'http://localhost/api/product/read.php'
        });*/
    };
     
    // createProduct will be here
     
    return factory;
});