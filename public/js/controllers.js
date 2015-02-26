var mycontroller = angular.module('myApp', []);

mycontroller.controller('ListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('/list').success(function(data) {
      $scope.list = data;
    });
    $scope.orderProp = 'id';
  }]);
