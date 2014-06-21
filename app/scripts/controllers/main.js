'use strict';

angular.module('gogobusApp')
  .controller('MainCtrl', function($scope, $http) {

    // List agencies
    $http.get('/api/agencies')
      .success(function(agencies) {
        $scope.agencies = agencies;
      });

    // List agencies near a point
    $http.get('/api/agenciesNearby/:lat/:lon/:radius')
      .success(function(agenciesNearby) {
        $scope.agenciesNearby = agenciesNearby;
      });

    // List routes for an agency
    $http.get('/api/routes/:agency')
      .success(function(routes) {
        $scope.routes = routes;
      });

    // List routes near a point
    $http.get('/api/routesNearby/:lat/:lon/:radius')
      .success(function(routesNearby) {
        $scope.routesNearby = routesNearby;
      });

    // List stops for a route
    // :direction_id is optional
    $http.get('/api/stops/:agency/:route_id/:direction_id')
      .success(function(stops) {
        $scope.stops = stops;
      });

    // List stops near a point
    $http.get('/api/stopsNearby/:lat/:lon/:radius')
      .success(function(stopsNearby) {
        $scope.stopsNearby = stopsNearby;
      });

    // List stop times for a stop
    // :direction_id is optional
    $http.get('/api/times/:agency/:route_id/:stop_id/:direction_id')
      .success(function(times) {
        $scope.times = times;
      });
  });
