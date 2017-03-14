angular.module('snippetApp.create', [])

.controller('CreateController', function ($scope, $location, Snippets) {

  $scope.snippet = {};

  $scope.enterSnippet = function () {

    Snippets.addSnippet($scope.snippet)
      .then(function () {
        $location.path('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

});