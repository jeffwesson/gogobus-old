'use strict';

angular.module('gogobusApp')
  .controller('StopsNearbyCtrl', ['$scope', 'geolocation', 'stopsNearby',
    function ($scope, geolocation, stopsNearby) {
      // List stops near a point
      $scope.rad = 0.5;
      $scope.loading = true;
      geolocation.getLocation().then(function (data) {
        stopsNearby(data.coords.latitude, data.coords.longitude, $scope.rad)
          .success(function (results) {
            $scope.stopsNearby = results ? results : [];
            $scope.loading = false;
          });
      });
    }]);