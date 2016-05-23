(function () {
    'use strict';
    function authService(rootScope, state) {
        this.login = function(userEmail, password) {
            if (userEmail === "admin@amtoss.com" && password === "123") {
                rootScope.userData = {
                    userName: userEmail,
                    companyName: "PJT Partners LLP",
                    memberName:"Sergey"
                }
                rootScope.isAuth = true;
                state.go('serviceDashboard');
                return true;
            }
            return false;
        };
        this.logout = function() {
            rootScope.userData = null;
            rootScope.isAuth = false;
        };
        var service = {
            login: this.login,
            logout: this.logout
        };
        return service;
    }
    angular.module('EZECastleIntegrationSPA.Common')
    .factory("AuthService", ['$rootScope','$state',authService])
})();