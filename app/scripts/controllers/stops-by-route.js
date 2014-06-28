'use strict';

angular.module('gogobusApp')
  .controller('StopsByRouteCtrl', ['$scope', 'stopsByRoute',
    function ($scope, stopsByRoute) {
      // List stops for a route
      $scope.loading = true;
      $scope.agency = 'sonoma-county-transit';
      $scope.route = 1039;
      stopsByRoute($scope.agency, $scope.route)
        .success(function (results) {
          $scope.stopsByRoute = results ? results : [];
          $scope.loading = false;
        });
    }]);
