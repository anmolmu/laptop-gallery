'use strict';

/* App Module */

var phonecatApp = angular.module('myApp', []);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/laptops/:ID', {
        templateUrl: 'detail.html',
        controller: 'DetailCtrl'
      });
  }]);
