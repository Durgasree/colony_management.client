'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:NoticeboardCtrl
 * @description
 * # NoticeboardCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('NoticeboardCtrl', function (api,$scope,$state,noticeFactory,$uibModal) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.notification_data = {}
    $scope.notices_list = []
    var get_list = function(){
    	var data = noticeFactory.get_list()
 			data.then(function(obj){
 				var response = obj.data
 				if(response.success){
 					// console.log(response["notifications"])
 					$scope.notices_list =	response["notifications"]
 				}
 				else
 				{
 					$scope.notices_list = []
 				}
 			});
    }
			get_list();
    

  	$scope.create_notification = function(){
  		var modalInstance = $uibModal.open({
      backdrop: 'static',
      keyboard: true,
      animation: true,
      templateUrl: 'views/noticeboard/create_notice.html',
      size: 'lg',
      scope:$scope
      })
      modalInstance.result.then(function () {
      }, function () {

      })
  	}

  	$scope.post_notice = function(){
  		// console.log($scope.notification_data)
  		var data = noticeFactory.create_post($scope.notification_data)
      console.log(data)
      data.then(function(resObject){
        console.log(resObject)
        if(response.success){
          $scope.success_message = response.message
          // console.log($scope.success_message)
        }
        else
        {
          $scope.error_message = response.message
          // console.log($scope.error_message)
        }
      });
  		
  	}


  });
