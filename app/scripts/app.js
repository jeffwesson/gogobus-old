'use strict';

angular
  .module('gogobusApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main',{
        url: '/main',
        templateUrl: 'views/partials/main.html',
        controller: 'MainCtrl'
      })
      .state('about',{
        url: '/about',
        templateUrl: 'views/partials/about.html',
        controller: 'MainCtrl'
      })
      .state('contact',{
        url: '/contact',
        templateUrl: 'views/partials/contact.html',
        controller: 'MainCtrl'
      })
      .state('main.list',{
        url: '/list',
        templateUrl: 'views/partials/list.html',
        controller: 'MainCtrl'
      });
    $urlRouterProvider
      .otherwise('/main');
  });
