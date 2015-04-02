'use strict';

angular.module('gogobusApp')
  .controller('FooterCtrl', ['$scope',
    function ($scope) {
      $scope.getFullYear = function () {
        return new Date().getFullYear().toString();
      };
    }]);
