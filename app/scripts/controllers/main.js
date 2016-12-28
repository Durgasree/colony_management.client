'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function (api,$scope,$state,userFactory) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.error = ""
    $scope.user_data = {}
    $scope.return_message = null
    // var response = $http.get(api.host_url + "home/index")
    // console.log(localStorage)

    $scope.login = function(){
      var data = userFactory.login($scope.user_data)
      data.then(function(obj){
        var response_data = obj.data
        // console.log(response_data)
        if(response_data.success){
          $scope.return_message = response_data.message
          localStorage.setItem('auth_token',response_data.auth_token);
          localStorage.setItem('refresh_token',response_data.refresh_token);
          localStorage.setItem('user_id',response_data.user.id);
          var response = userFactory.getCurrentUser(localStorage)
          if(response_data.success){
           $state.go('dashboard');
          }
          else{
           $state.go('sign_in'); 
          }
        }
        else{
          $scope.return_message = response_data.error
        }
      });

      
    }
    

    $scope.signup = function(){
      var data = userFactory.signup($scope.user_data)

      data.then(function(obj){
        var response_data = obj.data
        if(response_data.success){
          $scope.return_message = response_data.message
          $scope.user_data = {}
        }
        else{
         $scope.return_message = response_data.error
        }
    
      });

    }



  });
