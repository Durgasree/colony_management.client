'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
    
    .state('home', {
      url: "/home",
      templateUrl: "views/main.html",
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .state('sign_in',{
      url: "/home",
      templateUrl: "views/main.html",
      controller: 'MainCtrl',
      controllerAs: 'main'  
    })
    .state('about', {
      url: "/about",
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .state('contact', {
      url: "/contact",
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl',
      controllerAs: 'contact'
    })
    .state('sign_up',{
      url: "/sign_up",
      templateUrl: 'views/users/sign_up.html',
      controller: 'MainCtrl'
    })
    .state('dashboard',{
      url: "/dashboard",
      templateUrl: 'views/users/dashboard.html',
      controller: 'DashboardCtrl'

    })    
    .state('dashboard.complaints',{
      url: "/complaints/list",
      templateUrl: 'views/complaints/listcomplaints.html',
      controller: 'ComplaintsCtrl'

    })

    .state('dashboard.notice_board',{
      url: "/notice_board_list",
      templateUrl: 'views/noticeboard/list_notices.html',
      controller: 'NoticeboardCtrl'
    })
    .state('dashboard.events',{
      url: "/events",
      templateUrl: 'views/events/list_events.html',
      controller: 'EventsCtrl'
    })
    
    

  })
  .config(['$provide', '$locationProvider', function ($provide, $locationProvider) {
    // $locationProvider.html5Mode(false);
    $provide.constant('api',{
      host_url:'http://192.168.199.93:3002/'
    });

  }])
  .run(function($http) {
    $http.defaults.headers.common.auth_token = localStorage.auth_token;
  });



