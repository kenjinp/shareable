'use strict';

/**
 * @ngdoc overview
 * @name shareableApp
 * @description
 * # shareableApp
 *
 * Main module of the application.
 */


var app = angular.module('shareableApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}).factory('Post', ['$resource', function($resource) {
  return $resource('/api/posts/:id.json', null, {
    'update': { method:'PUT' }
  });
}]);
