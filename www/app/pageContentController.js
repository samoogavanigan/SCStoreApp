/**
 * http://usejsdoc.org/
 */
myapp.controller('pageContentController', function($scope, $rootScope) {
	
	$rootScope._localeCode = 'TA';
	
	$rootScope.Site = {"Status":"Live","Info":{"TA":{"Message":"Site is down in tamil"},"EN":{"Message":"Site is down in english"}}};
	
	
	$scope.changeLocale = function() {
		if($rootScope._localeCode == 'TA') {
			$rootScope._localeCode = 'EN';
		} else {
			$rootScope._localeCode = 'TA';
		}
		console.log("Current Locale: " + $rootScope._localeCode);		
	}
	

	readJson();
	readMasterJson();
	readCommonApp();
	
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
    		//$rootScope._AdministrativeData  = data.responseJSON.CommonApp.Regions.Administrative;
    		$rootScope._PageContentData  = data.responseJSON.ConsumerAppData.PageContent.Tiles;
    		//$rootScope._CommonLabelData  = data.responseJSON.CommonApp.PageContent.CommonLabel;
    		//$rootScope._CommonButtonData  = data.responseJSON.CommonApp.PageContent.CommonButton;
    		//$rootScope._CommonMessageData  = data.responseJSON.CommonApp.PageContent.CommonMessage;
    		//$rootScope.message = $rootScope._CommonMessageData[$rootScope._localeCode].pleaseWait;
    		$scope.$apply();
    	  console.log( "offline page content read complete" );
    	});    	
    	
    }
    
    
    function readMasterJson() {
    	// Assign handlers immediately after making the request,
    	// and remember the jqxhr object for this request
    	var jqxhr = $.getJSON( "app/data/offline/masterData.json", function() {
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
    		$rootScope._PageMasterData  = data.responseJSON;
    		$scope.$apply();
    	  console.log( "master data read complete" );
    	});    	
    	
    }
    
    function readCommonApp() {
    	// Assign handlers immediately after making the request,
    	// and remember the jqxhr object for this request
    	var jqxhr = $.getJSON( "app/data/offline/commonAppData.json", function() {
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
    		$rootScope._AdministrativeData  = data.responseJSON.CommonApp.Regions.Administrative;
    		$rootScope._CommonLabelData  = data.responseJSON.CommonApp.PageContent.CommonLabel;
    		$rootScope._CommonButtonData  = data.responseJSON.CommonApp.PageContent.CommonButton;
    		$rootScope._CommonMessageData  = data.responseJSON.CommonApp.PageContent.CommonMessage;
    		$scope.$apply();
    	  console.log( "offline page content read complete" );
    	});    	
    	
    }      
	
});