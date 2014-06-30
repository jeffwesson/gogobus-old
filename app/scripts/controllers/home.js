'use strict';

angular.module('gogobusApp')
  .controller('HomeCtrl', ['$scope', '$log',
    function ($scope, $log) {
      $scope.updateMsg = function (msg) {
        $scope.msg = msg;
        $log.log($scope.msg);
        $scope.msg = '';
      };
    }]);
