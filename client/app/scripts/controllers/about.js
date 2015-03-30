'use strict';

/**
 * @ngdoc function
 * @name shareableApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the shareableApp
 */
angular.module('shareableApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
