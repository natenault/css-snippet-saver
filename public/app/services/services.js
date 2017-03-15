angular.module('snippetApp.services', [])

.factory('Snippets', function ($http) {

  return {
    getAll: function () {
      return $http({
        method: 'GET',
        url: '/api/snippets'
      })
      .then(function (resp) {
        return resp.data;
      });
    },

    addSnippet: function (snippet) {
      return $http({
        method: 'POST',
        url: '/api/snippets',
        data: snippet
      });
    }
  };

});