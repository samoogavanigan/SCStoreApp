/**
 * http://usejsdoc.org/
 */

myapp.controller('homeController', function($scope){
 
	$scope.firstName = 'Gnanakannan';
	$scope.localeCode = 'ta';
	
	$scope.title = "Home";
	
	//$scope.pageContent = {};//readJson(); 
	readJson();
	
    function readJson() {
    	// Assign handlers immediately after making the request,
    	// and remember the jqxhr object for this request
    	var jqxhr = $.getJSON( "app/data/offline/clientData.json", function() {
    	  console.log( "success" );
    	})
    	  .done(function(data) {
    	    console.log( "second success" );

    	  })
    	  .fail(function() {
    	    console.log( "error" );
    	  })
    	  .always(function() {
    	    console.log( "complete" );
    	  });
    	 
    	// Perform other work here ...
    	 
    	
    	// Set another completion function for the request above
    	jqxhr.complete(function(data) {
    		$scope.OfflineData  = data.responseJSON.ConsumerAppData.PageContent.Tile;
    		$scope.$apply();
    	  console.log( "second complete" );
    	});    	
    	
    }
    
    $scope.getPageContent = function(page) {
    	var _pageContent = $scope.OfflineData[page];
    	if($scope.localeCode == 'ta') {
    		$scope._pc = _pageContent.tn;
    	} else {
    		$scope._pc = _pageContent.en;
    	}
    }
    
    function resolve(path, obj) {
        return path.split('.').reduce(function(prev, curr) {
            return prev ? prev[curr] : null
        }, obj || self)
        
        //usage resolve("part.0.size", someObject)
    }    
    
});