'use strict';

angular
  .module('gogobusApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('agencies', {
        url: '/agencies',
        templateUrl: 'views/partials/agencies.html',
        controller: 'MainCtrl'
      })
      .state('agencies.routes', {
        url: '/routes',
        templateUrl: 'views/partials/routes.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/partials/about.html',
        controller: 'MainCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/partials/contact.html',
        controller: 'MainCtrl'
      });
    $urlRouterProvider
      .otherwise('/agencies');
  });
