'use strict';

angular.module('gogobusApp')
  .controller('RoutesByAgencyCtrl', ['$scope', 'routesByAgency',
    function ($scope, routesByAgency) {
      // List routes by agency
      $scope.loading = true;
      $scope.agency = 'sonoma-county-transit';
      routesByAgency($scope.agency)
        .success(function (results) {
          $scope.routesByAgency = results ? results : [];
          $scope.loading = false;
        });
    }]);
