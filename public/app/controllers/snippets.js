angular.module('snippetApp.snippets', [])

.controller('SnippetsController', function ($scope, Snippets) {
  // Your code here

  $scope.data = {};

  var loadSnippets = function () {
    Snippets.getAll()
      .then(function (snippets) {
        $scope.data.snippets = snippets;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  loadSnippets();

});