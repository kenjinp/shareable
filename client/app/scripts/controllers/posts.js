'use strict';

/**
 * @ngdoc function
 * @name shareable.controller:PostCtrl
 * @description
 * # PostsCtrl
 * Controller of the shareableApp
 */
angular.module('shareableApp')
  .controller('PostsCtrl', ['$scope', 'Post', function ($scope, Post) {
    $scope.posts = Post.query();
}]);
