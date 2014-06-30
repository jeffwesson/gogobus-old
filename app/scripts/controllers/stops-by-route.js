'use strict';

angular.module('gogobusApp')
  .controller('StopsByRouteCtrl', ['$scope', 'stopsByRoute',
    function ($scope, stopsByRoute) {

      var agency = 'sonoma-county-transit';
      var route = 1039;

      $scope.loading = true;

      // List stops for a route
      stopsByRoute(agency, route)
        .success(function (results) {
          $scope.stopsByRoute = results ? results : [];
          $scope.loading = false;
        });
    }]);
