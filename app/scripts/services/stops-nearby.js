'use strict';

angular.module('gogobusApp')
  .factory('stopsNearby', ['$http', '$interpolate',
    function ($http, $interpolate) {
      return function (lat, lng, radius) {
        var path = $interpolate('{{lat}}/{{lng}}/{{radius}}')({
          lat: lat,
          lng: lng,
          radius: radius
        });
        console.log('/api/stopsNearby/' + path);
        return $http.get('/api/stopsNearby/' + path);
      };
    }]);