'use strict';

angular.module('gogobusApp')
  .controller('RoutesNearbyCtrl', ['$scope', 'geolocation', 'routesNearby',
    function ($scope, geolocation, routesNearby) {
      // List stops near a point
      $scope.rad = 0.5;
      $scope.loading = true;
      geolocation.getLocation().then(function (data) {
        routesNearby(data.coords.latitude, data.coords.longitude, $scope.rad)
          .success(function (results) {
            $scope.routesNearby = results ? results : [];
            $scope.loading = false;
          });
      });
    }]);