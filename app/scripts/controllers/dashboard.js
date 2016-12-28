'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DashboardCtrl', function (api,$http,$scope,$state,userFactory,$controller,$uibModal) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.menu_options = []
  
    $scope.logout = function(){
      var data = userFactory.logOut(localStorage)

      data.then(function(obj){
        var response_data = obj.data
        console.log(response_data);
        if(response_data.success){
          $scope.return_message = response_data.message
          localStorage.setItem('auth_token',null);
          localStorage.setItem('refresh_token',null);
          localStorage.setItem('user_id',null);
          $state.go('home')
        }
        else{
         $scope.return_message = response_data.error
         $state.go('home')
        }
      });
    }
    

    $scope.showDetails = function(){
      var modalInstance = $uibModal.open({
      backdrop: 'static',
      keyboard: true,
      animation: true,
      templateUrl: 'views/noticeboard/view_notice.html',
      size: 'lg',
      scope:$scope
      })
      modalInstance.result.then(function () {
      }, function () {

      })
    }

    // $scope.logout = function(){
    //   data = userFactory.signout
    //   data.then(function(obj){
    //     var response = obj.data
    //     console.log(response);
        
    //   });
    // }


  });
