'use strict';

angular.module('gogobusApp')
  .factory('routesNearby', ['$http', '$interpolate',
    function ($http, $interpolate) {
      return function (lat, lng, radius) {
        var path = $interpolate('{{lat}}/{{lng}}/{{radius}}')({
          lat: lat,
          lng: lng,
          radius: radius
        });
        console.log('/api/routesNearby/' + path);
        return $http.get('/api/routesNearby/' + path);
      };
    }]);