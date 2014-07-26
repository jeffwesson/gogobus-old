'use strict';

angular.module('gogobusApp')
  .controller('FooterCtrl', ['$scope', '$location',
    function ($scope, $location) {
      $scope.getFullYear = function () {
        return new Date().getFullYear().toString();
      };
    }]);
