'use strict';

angular.module('gogobusApp')
  .controller('RoutesByAgencyCtrl', ['$scope', 'routesByAgency',
    function ($scope, routesByAgency) {

      var agency = $scope.agency = 'sonoma-county-transit';
      $scope.loading = true;

      // List routes by agency
      routesByAgency(agency)
        .success(function (results) {
          $scope.routesByAgency = results ? results : [];
          $scope.loading = false;
        });
    }]);
