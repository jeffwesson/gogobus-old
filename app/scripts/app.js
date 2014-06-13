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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about',{
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .state('contact',{
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl'
      })
      .state('main.list',{
        url: '/list',
        templateUrl: 'views/list.html',
        controller: 'MainCtrl'
      });
    $urlRouterProvider
      .otherwise('/main');
  });
