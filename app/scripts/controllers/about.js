'use strict';

angular.module('gogobusApp')
  .controller('AboutCtrl', ['$scope',
    function ($scope) {
      $scope.testListItems = [
        {
          key: 'key1',
          value: 'value1'
        },
        {
          key: 'key2',
          value: 'value2'
        },
        {
          key: 'key3',
          value: 'value3'
        },
        {
          key: 'key4',
          value: 'value4'
        }
      ];
    }]);