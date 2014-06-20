'use strict';

angular.module('gogobusApp')
  .controller('MainCtrl', function($scope, $http, $location) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
