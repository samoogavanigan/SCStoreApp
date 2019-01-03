/**
 * http://usejsdoc.org/
 */
myapp.controller('pageContentController', function ($scope, $http, $rootScope, $location) {

    $scope.getDefaultLanguage = function () {
        var req = {
            method: 'GET',
            url: app.appRoot + 'getDefaultLanguage'
        }

        $scope.LoginUserPromise = $http(req).then(function (data) {
			$rootScope._localeCode = data.data;
			
			readJson();
			readMasterJson();
			readCommonApp();
        }, function (error) {
			//$rootScope.HandleError(error);
			$rootScope._localeCode = 'EN';
        });
	}

	$rootScope.Site = {
		"Status": "Live",
		"Info": {
			"TA": {
				"Message": "Site is down in tamil"
			},
			"EN": {
				"Message": "Site is down in english"
			}
		}
	};

	$rootScope.SiteMessage = {
		ShowAlert: false
	};


	$rootScope.closeSiteMessage = function () {
		$rootScope.SiteMessage = {
			ShowAlert: false
		};
		$rootScope.ModalData = {
			ShowModal: false
		};
	}

	$rootScope.HandleError = function (err) {
		if (err.status == 422) {
			$rootScope.SiteMessage = {
				AlertType: 'danger',
				ShowAlert: true,
				AlertTitle: '',
				AlertMessage: 'Data aleady exist!',
				status: 'Completed'
			};
		} else if (err.status == 401) {
			$rootScope.SiteMessage = {
				AlertType: 'danger',
				ShowAlert: true,
				AlertTitle: '',
				AlertMessage: 'Invalid login or Email not verified!',
				status: 'Completed'
			};
		}
	}

	$rootScope.gotoPage = function (path) {
		$location.path('/' + path);
	}

	$scope.changeLocale = function () {
		if ($rootScope._localeCode == 'TA') {
			$rootScope._localeCode = 'EN';
			//{{json.ConsumerAppData.EN.PageContent.Tiles.LoginPage.TileTitle}}
			//{{data.responseJSON.ConsumerAppData.PageContent.Tiles}}
			$rootScope._PageContentData = $rootScope.ConsumerAppData['EN'].PageContent.Tiles;
		} else {
			$rootScope._localeCode = 'TA';
			$rootScope._PageContentData = $rootScope.ConsumerAppData['EN'].PageContent.Tiles;
		}
		//$location.path(window.location.href);
		//console.log("Current Locale: " + $rootScope._localeCode);
	}

	function readJson() {
		// Assign handlers immediately after making the request,
		// and remember the jqxhr object for this request
		var jqxhr = $.getJSON("app/data/offline/clientData.json", function () {
				//console.log( "success" );
			})
			.done(function (data) {
				//console.log( "second success" );

			})
			.fail(function () {
				console.log("error");
			})
			.always(function () {
				//console.log( "complete" );
			});

		// Perform other work here ...


		// Set another completion function for the request above
		jqxhr.complete(function (data) {
			$rootScope.ConsumerAppData = data.responseJSON.ConsumerAppData;
			if ($rootScope._localeCode == 'TA') {
				//$rootScope._AdministrativeData  = data.responseJSON.CommonApp.Regions.Administrative;
				$rootScope._PageContentData = $rootScope.ConsumerAppData['TA'].PageContent.Tiles;
				//$rootScope._CommonLabelData  = data.responseJSON.CommonApp.PageContent.CommonLabel;
				//$rootScope._CommonButtonData  = data.responseJSON.CommonApp.PageContent.CommonButton;
				//$rootScope._CommonMessageData  = data.responseJSON.CommonApp.PageContent.CommonMessage;
				//$rootScope.message = $rootScope._CommonMessageData[$rootScope._localeCode].pleaseWait;

				//$rootScope._AdministrativeData = $rootScope._CommonApp.Regions.Administrative['TA'];
				$rootScope._CommonLabelData = $rootScope._CommonApp.PageContent.CommonLabel['TA'];
				$rootScope._CommonButtonData = $rootScope._CommonApp.PageContent.CommonButton['TA'];
				$rootScope._CommonMessageData = $rootScope._CommonApp.PageContent.CommonMessage['TA'];
			} else {
				$rootScope.ConsumerAppData = data.responseJSON.ConsumerAppData;
				$rootScope._PageContentData = $rootScope.ConsumerAppData['EN'].PageContent.Tiles;

				//$rootScope._AdministrativeData = $rootScope._CommonApp.Regions.Administrative['EN'];
				$rootScope._CommonLabelData = $rootScope._CommonApp.PageContent.CommonLabel['EN'];
				$rootScope._CommonButtonData = $rootScope._CommonApp.PageContent.CommonButton['EN'];
				$rootScope._CommonMessageData = $rootScope._CommonApp.PageContent.CommonMessage['EN'];
			}



			$scope.$apply();
			//console.log( "offline page content read complete" );
		});

	}


	function readMasterJson() {
		// Assign handlers immediately after making the request,
		// and remember the jqxhr object for this request
		var jqxhr = $.getJSON("app/data/offline/masterData.json", function () {
				//console.log( "success" );
			})
			.done(function (data) {
				//console.log( "second success" );

			})
			.fail(function () {
				console.log("error");
			})
			.always(function () {
				//console.log( "complete" );
			});

		// Perform other work here ...


		// Set another completion function for the request above
		jqxhr.complete(function (data) {
			$rootScope._PageMasterData = data.responseJSON;
			$scope.$apply();
			//console.log( "master data read complete" );
		});

	}

	function readCommonApp() {
		// Assign handlers immediately after making the request,
		// and remember the jqxhr object for this request
		var jqxhr = $.getJSON("app/data/offline/commonAppData.json", function () {
				//console.log( "success" );
			})
			.done(function (data) {
				//console.log( "second success" );

			})
			.fail(function () {
				console.log("error");
			})
			.always(function () {
				//console.log( "complete" );
			});

		// Perform other work here ...


		// Set another completion function for the request above
		jqxhr.complete(function (data) {
			$rootScope._CommonApp = data.responseJSON.CommonApp;
			if ($rootScope._localeCode == 'TA') {
				$rootScope._AdministrativeData = $rootScope._CommonApp.Regions.Administrative['TA'];
				$rootScope._CommonLabelData = $rootScope._CommonApp.PageContent.CommonLabel['TA'];
				$rootScope._CommonButtonData = $rootScope._CommonApp.PageContent.CommonButton['TA'];
				$rootScope._CommonMessageData = $rootScope._CommonApp.PageContent.CommonMessage['TA'];
			} else {
				$rootScope._AdministrativeData = $rootScope._CommonApp.Regions.Administrative['EN'];
				$rootScope._CommonLabelData = $rootScope._CommonApp.PageContent.CommonLabel['EN'];
				$rootScope._CommonButtonData = $rootScope._CommonApp.PageContent.CommonButton['EN'];
				$rootScope._CommonMessageData = $rootScope._CommonApp.PageContent.CommonMessage['EN'];
			}

			
			$scope.$apply();
			//console.log( "offline page content read complete" );
		});

	}

});