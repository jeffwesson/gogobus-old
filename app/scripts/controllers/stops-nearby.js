'use strict';

angular.module('gogobusApp')
  .controller('StopsNearbyCtrl', ['$scope', 'geolocation', 'stopsNearby', 'routesNearby',
    function ($scope, geolocation, stopsNearby, routesNearby) {
      // List stops near a point
      $scope.rad = 0.5;
      $scope.loadingStops = true;
      $scope.loadingRoutes = true;
      geolocation.getLocation().then(function (data) {

        // List stops near a point
        stopsNearby(data.coords.latitude, data.coords.longitude, $scope.rad)
          .success(function (results) {
            $scope.stopsNearby = results ? results : [];
            $scope.loadingStops = false;
          });

        // List routes near a point with hard-coded radius for routes servicing that specific location (stop)
        routesNearby(data.coords.latitude, data.coords.longitude, 0.2)
          .success(function (results) {
            $scope.routesNearby = results ? results : [];
            $scope.loadingRoutes = false;
          });
      });
    }]);