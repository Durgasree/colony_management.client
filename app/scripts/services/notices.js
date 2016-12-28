'use strict';

/**
 * @ngdoc service
 * @name clientApp.notices
 * @description
 * # notices
 * Service in the clientApp.
 */
angular.module('clientApp')
  .factory('noticeFactory', function (api,$http,$rootScope,$q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return {
    	get_list: function (params) {
        var deferred = $q.defer();
        $http.get(api.host_url+'notifications/index').then(function(data){deferred.resolve(data)});
        return deferred.promise;
      },
      create_post: function(params){
        var deferred = $q.defer();
        $http.post(api.host_url+'notifications/create',params).then(function(data){deferred.resolve(data)});
        console.log(deferred.promise);
        return deferred.promise;
      }
    }
    
  });
