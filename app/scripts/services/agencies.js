'use strict';

angular.module('gogobusApp')
  .factory('agencies', ['$http',
    function ($http) {
      return function () {
        return $http.get('/api/agencies');
      };
    }]);