'use strict';

angular.module('clientApp')
.factory('userFactory',function (api,$http,$rootScope,$q){
    
	  return {
      login: function (params) {
        var deferred = $q.defer();
        $http.post(api.host_url+'users/sign_in',params).then(function(data){deferred.resolve(data)});
        return deferred.promise;
      },
      signup: function(params){
        var deferred = $q.defer();
        $http.post(api.host_url + 'users/sign_up',params).then(function(data){deferred.resolve(data)});
        return deferred.promise;
      },
      getCurrentUser: function(params){
        var deferred = $q.defer();
        $http.get(api.host_url + 'home/index').then(function(data){deferred.resolve(data)});
        return deferred.promise;
      },
      logOut: function(params){
        var deferred = $q.defer();
        $http.post(api.host_url+'users/sign_out',params).then(function(data){deferred.resolve(data)});
        return deferred.promise;
      }



     
    }

})