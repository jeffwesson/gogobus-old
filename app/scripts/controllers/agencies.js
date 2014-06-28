'use strict';

angular.module('gogobusApp')
  .controller('AgenciesCtrl', ['$scope', 'agencies',
    function ($scope, agencies) {
      $scope.loading = true;
      agencies()
        .success(function (data) {
          $scope.agencies = data ? data : [];
          $scope.loading = false;
        });
    }]);
