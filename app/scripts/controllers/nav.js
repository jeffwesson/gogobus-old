'use strict';

/**
 * @ngdoc function
 * @name gogobusApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the gogobusApp
 */
angular.module('gogobusApp')
  .controller('NavCtrl', function ($scope, $location) {
    // TODO: edit to allow for children states
    $scope.isActive = function (route) {
      return route === $location.path();
    };
  });
