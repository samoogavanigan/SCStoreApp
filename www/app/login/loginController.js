/**
 * http://usejsdoc.org/
 */
myapp.controller('loginController', function ($scope, $rootScope, $http, $location) {

    $scope.newUserFormData = {
        "AppsTypeChoice": "-1"
    };

    $scope.LoginUser = {};

    $scope.newRegistrationPromise = null;

    $scope.model = {
        key: '6LevbkoUAAAAAHTvNuVOfMNGGq07cvOXtDIeTBHg',
        lang: $scope._localeCode
    };

    $scope.UserLogin = function () {
        $rootScope.SiteMessage.status = 'In-progress';

        var loginData = {username : $scope.LoginUser.UserName, password:  $scope.LoginUser.UserPassword};

        var req = {
            method: 'POST',
            url: app.apiRoot + 'Users/login',
            data: loginData
        }

        $scope.LoginUserPromise = $http(req).then(function (data) {
            $('#leftNavSlider').show();
            $rootScope.SiteMessage = {
                ShowAlert: false,
                status: 'Completed'
            };
            $location.path('/userHomeTileDashboard');
        }, function (error) {
            $('#leftNavSlider').hide();

            $rootScope.HandleError(error);
        });
    }

    $scope.forgotUserLogin = function () {
        $rootScope.SiteMessage.status = 'In-progress';

        var loginData = {username : $scope.LoginUser.UserName, password:  $scope.LoginUser.UserPassword};

        var req = {
            method: 'POST',
            url: app.apiRoot + 'Users/login',
            data: loginData
        }

        $scope.LoginUserPromise = $http(req).then(function (data) {
            $('#leftNavSlider').show();
            $rootScope.SiteMessage = {
                ShowAlert: false,
                status: 'Completed'
            };
            $location.path('/storeLocator');
        }, function (error) {
            $('#leftNavSlider').hide();

            $rootScope.HandleError(error);
        });
    }
    

});