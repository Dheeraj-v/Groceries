var app = angular.module('App', ['ngRoute']);

app.config(function($routeProvider) {
  
  $routeProvider
    .when('/', {
      templateUrl : 'chicken.ejs',
      controller : 'mainCtrl'
    })
    
    // saved
    .when('/chicken', {
      templateUrl : 'chicken.ejs',
      controller : 'chickenCtrl'
    })

    .when('/mutton', {
      templateUrl : 'mutton.ejs',
      controller : 'mainCtrl'
    })
 
    .when('/fish', {
      templateUrl : 'fish.ejs',
      controller : 'mainCtrl'
    })
});

