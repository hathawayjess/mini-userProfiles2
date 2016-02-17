var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
  	mainService.getUsers().then(function(response) {
  		$scope.users = response.data.data;  //data is a child of response, and also has a child named data
  	});                                     //the second data is where our user information lives
  }

  $scope.getUsers();

});