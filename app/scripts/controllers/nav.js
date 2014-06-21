'use strict';

angular.module('gogobusApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.isActive = function (route) {
      return route === $location.path();
    };
  });
