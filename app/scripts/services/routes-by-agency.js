'use strict';

angular.module('gogobusApp')
  .factory('routesByAgency', ['$http',
    function ($http) {
      return function (agency) {
        return $http.get('/api/routes/' + agency);
      };
    }]);