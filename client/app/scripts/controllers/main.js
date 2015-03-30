'use strict';

/**
 * @ngdoc function
 * @name shareableApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shareableApp
 */
angular.module('shareableApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
