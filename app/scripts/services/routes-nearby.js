'use strict';

angular.module('gogobusApp')
  .factory('routesNearby', ['$http', '$interpolate', '$log',
    function ($http, $interpolate, $log) {
      return function (lat, lng, radius) {
        var path = $interpolate('{{lat}}/{{lng}}/{{radius}}')({
          lat: lat,
          lng: lng,
          radius: radius
        });
        $log.log('/api/routesNearby/' + path);
        return $http.get('/api/routesNearby/' + path);
      };
    }]);