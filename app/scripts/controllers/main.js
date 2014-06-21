'use strict';

angular.module('gogobusApp')
  .controller('MainCtrl', function ($scope, $http, $location) {
    $http.get('/api/awesomeThings').success(function (awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    $scope.isActive = function (route) {
      return route === $location.path();
    };
    $http.get('/api/agencies').success(function (agencies) {
      $scope.agencies = agencies;
    });
    $http.get('/api/stopsNearby/38.357166899999996/-122.6881211/1').success(function (stopsNearbyJeff) {
      $scope.stopsNearbyJeff = stopsNearbyJeff;
    });
  });
