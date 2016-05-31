(function () {
    'use strict';
  
    function sessionService(rootScope, state, http, localStorageService,authService) {
        var setRootScopeData = function() {
            if (localStorageService.get("IsAuth") && localStorageService.get("userData")) {
                rootScope.userData = localStorageService.get("userData");
                rootScope.isAuth = localStorageService.get("IsAuth");
                http.defaults.headers.common["ECIDataToken"] = rootScope.userData.token;
            }
        }
        var validateToken = function (successCallback, errorCallback) {
          return  http.get("api/auth/validateSession").then(function (responce) {
              if (responce.data.validation) {
                  if (typeof(successCallback) === "function") {
                      successCallback();
                  }
              } else {
                  if (typeof(errorCallback) === "function") {
                      errorCallback();
                  }
              }
          }, function (errorData) {
                    console.error(errorData);
             });
        }
        this.checkAccess = function(event, toState, toParams, fromState, fromParams) {
            setRootScopeData();
            if (!rootScope.isAuth && toState.data !== undefined && toState.data.noLogin) {
            } else if (rootScope.isAuth) {
                validateToken(function() {
                }, function () {
                    authService.logout();
                    event.preventDefault();
                    state.go('index');
                });
            }
            return false;
        };
        var service = {
            checkAccess: this.checkAccess
    };
        return service;
    }
    angular.module('EZECastleIntegrationSPA.Common')
    .factory("SessionService", ['$rootScope', '$state','$http', 'localStorageService','AuthService', sessionService])
})();