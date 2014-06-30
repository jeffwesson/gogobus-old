'use strict';

angular.module('gogobusApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'geolocation'
  ])

  // setup ui-router config
  .config([ '$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/partials/home.html',
          controller: 'HomeCtrl'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'views/partials/about.html',
          controller: 'AboutCtrl'
        })
        .state('stopsNearby', {
          url: '/stopsNearby',
          templateUrl: 'views/partials/stops-nearby.html',
          controller: 'StopsNearbyCtrl'
        })
        .state('stopsByRoute', {
          url: '/stopsByRoute',
          templateUrl: 'views/partials/stops-by-route.html',
          controller: 'StopsByRouteCtrl'
        })
        .state('routesNearby', {
          url: '/routesNearby',
          templateUrl: 'views/partials/routes-nearby.html',
          controller: 'RoutesNearbyCtrl'
        })
        .state('routesByAgency', {
          url: '/routesByAgency',
          templateUrl: 'views/partials/routes-by-agency.html',
          controller: 'RoutesByAgencyCtrl'
        });
      $locationProvider
        .hashPrefix('!');
      $urlRouterProvider
        .otherwise('/');
    }]);