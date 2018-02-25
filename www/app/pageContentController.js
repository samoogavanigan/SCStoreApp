/**
 * http://usejsdoc.org/
 */
myapp.controller('pageContentController', function($scope, $rootScope) {
	
	$rootScope._localeCode = 'TA';
	
	$scope.changeLocale = function() {
		console.log($rootScope.localeCode);
		if($rootScope._localeCode == 'TA') {
			$rootScope._localeCode = 'EN';
		} else {
			$rootScope._localeCode = 'TA';
		}
	}
	

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
    		$rootScope._PageContentData  = data.responseJSON.ConsumerAppData.PageContent.Tiles;
    		$scope.$apply();
    	  console.log( "offline page content read complete" );
    	});    	
    	
    }
	
});