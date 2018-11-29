var myapp = angular.module('myApp', ["ngResource", "ngRoute","ngMessages", "ngTouch","ngAnimate","cgBusy","vcRecaptcha"]);
myapp.directive('myCustomer', function() {
	  return {
		  scope: {
			  addressInfo: '=info'
		    },
		    link: function(scope, element, attrs) {
		    	scope.IsGeoLocationPermitted = function() {
		    		return true;
		    		//TODO: Identify the Geo-location reading and policy update
		        },
		        scope.ChangeAddressDistrict = function(adr) {
		    		scope.addressInfo = {ModeStatus : 'EditDistrict'};
		        },
		        scope.ChangeAddressCity = function(adr) {
		        	scope.addressInfo = {District : adr.District, ModeStatus : 'EditCity'};
		        },
		        scope.ChangeAddressArea = function(adr) {
		        	scope.addressInfo = {District : adr.District, City : adr.City, ModeStatus : 'EditArea'};
		        },
		    	scope.setDistrict = function(adr) {
		    		scope.addressInfo.ModeStatus = 'EditCity';
		        },
		    	scope.setCity = function(adr) {
		    		scope.addressInfo.ModeStatus = 'EditArea';
		        },
		    	scope.setArea = function(adr, data) {
		    		scope.addressInfo.Postalcode = data.Postalcode;
		    		scope.addressInfo.ModeStatus = 'Complete';
		        },
		        scope.onError = function(error) {
		    		scope.addressInfo.Postalcode = data.Postalcode;
		    		scope.addressInfo.ModeStatus = 'Complete';
		        },
		        scope.SetGPSAddress = function() {
		        	
		        	navigator.geolocation.getCurrentPosition(onSuccess, onError);
		        	
		        	function onSuccess(position) {
		                alert('Latitude: '          + position.coords.latitude          + '\n' +
		                      'Longitude: '         + position.coords.longitude         + '\n' +
		                      'Altitude: '          + position.coords.altitude          + '\n' +
		                      'Accuracy: '          + position.coords.accuracy          + '\n' +
		                      'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
		                      'Heading: '           + position.coords.heading           + '\n' +
		                      'Speed: '             + position.coords.speed             + '\n' +
		                      'Timestamp: '         + position.timestamp                + '\n');
		            };

		            // onError Callback receives a PositionError object
		            //
		            function onError(error) {
		                alert('code: '    + error.code    + '\n' +
		                      'message: ' + error.message + '\n');
		            };

		        	
		        	var map = new google.maps.Map(document.getElementById('map'), {
		                zoom: 8,
		                center: {lat: 9.4145754, lng: 77.5990669}
		              });
		        	
		        	var geocoder = new google.maps.Geocoder;
		            //var infowindow = new google.maps.InfoWindow;
		            
		            var input = '9.4145754,77.5990669';
		            var latlngStr = input.split(',', 2);
		            var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
		            geocoder.geocode({'location': latlng}, function(results, status) {
		              if (status === 'OK') {
		                if (results[0]) {
		                  map.setZoom(16);
		                  var marker = new google.maps.Marker({
		                    position: latlng,
		                    map: map
		                  });
		                  console.log(results[0].formatted_address);
		                  //infowindow.setContent(results[0].formatted_address);
		                  //infowindow.open(map, marker);
		                } else {
		                  window.alert('No results found');
		                }
		              } else {
		                window.alert('Geocoder failed due to: ' + status);
		              }
		            });
		        }
		      },
		    templateUrl: 'app/templates/addressSearch.html'
		  };
		});

myapp.config(function($routeProvider) {

	$routeProvider.when("/login", {
	    templateUrl: "login.html",
	    controller: "LoginController"
	});

	$routeProvider.when("/home", {
	    templateUrl: "home.html",
	    controller: "homeController"
	});
	
	$routeProvider.when("/index", {
	    templateUrl: "index.html",
	    controller: "homeController"
	});
	
	$routeProvider.when("/storeLocator", {
	    templateUrl: "views/storeLocator.html",
	    controller: "homeController"
	});

	$routeProvider.when("/productSetup", {
		templateUrl: "views/Producer/ProductList.html",
		controller: "productsController"
});	

	$routeProvider.otherwise({ redirectTo: '/home'});

	});

