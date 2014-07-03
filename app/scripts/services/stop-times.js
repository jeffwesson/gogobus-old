'use strict';

angular.module('gogobusApp')
  .factory('stopTimes', ['$http', '$interpolate',
    function ($http, $interpolate) {
      return function (agency, route, stop) {
        var path = $interpolate('{{agency}}/{{route}}/{{stop}}')({
          agency: agency,
          route: route,
          stop: stop
        });
        console.log('/api/times/' + path);
        return $http.get('/api/times/' + path);
      };
    }]);
