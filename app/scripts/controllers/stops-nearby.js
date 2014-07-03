'use strict';

angular.module('gogobusApp')
  .controller('StopsNearbyCtrl', ['$scope', '$log', 'geolocation', 'stopsNearby', 'routesNearby', 'stopTimes',
    function ($scope, $log, geolocation, stopsNearby, routesNearby, stopTimes) {
      // List stops near a point
      $scope.rad = 0.5;
      $scope.loadingStops = true;
      $scope.loadingRoutes = true;
      $scope.loadingStopTimes = true;
      $scope.selection = {
        agency: 'sonoma-county-transit',
        route: null,
        stop: null
      };

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

      $scope.selectStop = function (stop) {
        $scope.selection.stop = stop;
        $log.log($scope.selection);
        if ($scope.selection.route) {
          // get times
          stopTimes($scope.selection.agency, $scope.selection.route, $scope.selection.stop)
            .success(function (results) {
              $scope.stopTimes = results ? results : [];
              $scope.loadingStopTimes = false;
            });
        }
      };

      $scope.selectRoute = function (route) {
        $scope.selection.route = route;
        $log.log($scope.selection);
        if ($scope.selection.stop) {
          // get times
          stopTimes($scope.selection.agency, $scope.selection.route, $scope.selection.stop)
            .success(function (results) {
              $scope.stopTimes = results ? results : [];
              $scope.loadingStopTimes = false;
            });
        }
      };
    }]);
