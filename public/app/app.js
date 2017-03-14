angular.module('snippetApp', [
  'snippetApp.services',
  'snippetApp.create',
  'snippetApp.snippets',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/snippets.html',
      controller: 'SnippetsController'
    })
    .when('/create', {
      templateUrl: 'views/create.html',
      controller: 'CreateController'
    })
    .otherwise({
      redirectTo: '/'
    });
});