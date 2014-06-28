'use strict';

angular.module('gogobusApp')
  .factory('stopsByRoute', ['$http',
    function ($http) {
      return function (agency, route) {
        return $http.get('/api/stops/' + agency + '/' + route);
      };
    }]);