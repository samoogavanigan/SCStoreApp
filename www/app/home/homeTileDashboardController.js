/**
 * http://usejsdoc.org/
 */
myapp.controller('homeTileDashboardController', function ($scope, $rootScope, $http, $location) {


});

myapp.controller('homeTileRecommendationController', function ($scope, $rootScope, $http, $location, $sce) {

    $scope.recommendations = [];

    $scope.isCollapsed = false;

    $scope.ClickPanel = function (event) {
        var _eli = $(".rectabs li");

//console.log(event.target.className);

        if(event.target.className == "fas fa-route fa-2x") {
            if ($("#rectabs_content2").is(":hidden")) {
                $("#rectabs_content2").show();
                $(_eli[0]).toggleClass('rectabs_active');
                //rectabs_active
            } else if($(this).hasClass("rectabs_active")) {
                $(_eli[0]).toggleClass('rectabs');
                $("#rectabs_content2").hide();
            }
            
            angular.forEach(_eli, function(lele) {
                $(lele).toggleClass('rectabs_active');
            });
        } else {
            $(this).toggleClass('rectabs');
            $("#rectabs_content2").hide();

            angular.forEach(_eli, function(lele) {
                $(lele).toggleClass('rectabs_active');
            });
    
    
        }

        //console.log(_eli[0].className);
    }

    $scope.callme = function() {
        // $(".rectabs li, .rectabs a").bind("click", function (e) {
        //     // e.preventDefault();
        //     // $("li").removeClass("active");
        //     // $(this).addClass("active");
        //     if(e.target.className == "i.fas.fa-route.fa-2x") {
        //     }
        //     if ($("#rectabs_content2").is(":hidden")) {
        //         $("#rectabs_content2").show("slow");
        //         $(this).addClass("rectabs_active");
        //         //rectabs_active
        //     } else if($(this).hasClass("rectabs_active")) {
        //         $(this).removeClass("rectabs_active");
        //         $("#rectabs_content2").hide();
        //         $("#rectabs_content2").slideUp();
        //     }
        // });
    }

    $scope.getRecommendations = function () {
        $rootScope.SiteMessage.status = 'In-progress';

        //var filterData = JSON.stringify({"referTo":"Kannan3"});

        // var req = {
        //     method: 'GET',
        //     url: app.apiRoot + 'recommendations/findOne' + '?filter=' + filterData
        // }

        var req = {
            method: 'GET',
            url: app.apiRoot + 'recommendations'
        }

        $scope.RecommendationsPromise = $http(req).then(function (data) {
            // $('#leftNavSlider').show();
            // $rootScope.SiteMessage = {
            //     ShowAlert: false,
            //     status: 'Completed'
            // };

            $scope.recommendations = data.data;
        }, function (error) {
            $('#leftNavSlider').hide();

            $rootScope.HandleError(error);
        });
    }

    $scope.htmlPopover = $sce.trustAsHtml('<div class="timeline">  <dl>  <dt>Apr 2014</dt>  <dd class="pos-right clearfix">  <div class="circ"></div>  <div class="time">Apr 14</div>  <div class="events">  <div class="pull-left">  <img class="events-object img-rounded" src="img/photo-1.jpg">  </div>  <div class="events-body">  <h4 class="events-heading">Bootstrap</h4>  <p>Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>  </div>  </div>  </dd>  <dd class="pos-left clearfix">  <div class="circ"></div>  <div class="time">Apr 10</div>  <div class="events">  <div class="pull-left">  <img class="events-object img-rounded" src="img/photo-2.jpg">  </div>  <div class="events-body">  <h4 class="events-heading">Bootflat</h4>  <p>Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>  </div>  </div>  </dd>  <dt>Mar 2014</dt>  <dd class="pos-right clearfix">  <div class="circ"></div>  <div class="time">Mar 15</div>  <div class="events">  <div class="pull-left">  <img class="events-object img-rounded" src="img/photo-3.jpg">  </div>  <div class="events-body">  <h4 class="events-heading">Flat UI</h4>  <p>Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>  </div>  </div>  </dd>  <dd class="pos-left clearfix">  <div class="circ"></div>  <div class="time">Mar 8</div>  <div class="events">  <div class="pull-left">  <img class="events-object img-rounded" src="img/photo-4.jpg">  </div>  <div class="events-body">  <h4 class="events-heading">UI design</h4>  <p>Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>  </div>  </div>  </dd>  </dl>  </div>');
});