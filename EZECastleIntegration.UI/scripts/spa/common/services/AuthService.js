(function () {
    function authService(rootScope, http, localStorageService) {

        function saveUserCredentials(data) {
            var userData = {
                userName: data.Login,
                companyName: "PJT Partners LLP",
                memberName: data.MemberName,
                token: data.SessionToken
            }
            localStorageService.set("userData",userData);
            localStorageService.set("IsAuth", true);
            rootScope.userData = userData;
            rootScope.isAuth = true;
            http.defaults.headers.common["ECIDataToken"] = rootScope.userData.token;
        };

        this.loginOkta = function (user, sucessCallback, failedCallback) {
            http.post("api/auth/authentificate", user).then(function (responce) {
                if (responce.data.loginSuccess) {
                    saveUserCredentials(responce.data.userData);
                        sucessCallback(responce);
                } else {
                    if (failedCallback) {
                        failedCallback(responce.data);
                    }
                }
            }.bind(this), function(error) {
                console.log(error);
            });
        };

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

        this.logout = function () {
            http.get("api/auth/Logout").then(function(data) {
                localStorageService.remove("userData");
                localStorageService.remove("IsAuth");
                rootScope.userData = null;
                rootScope.isAuth = false;
                http.defaults.headers.common["ECIDataToken"] = null;
            });

        };

        var service = {
            login: this.login,
            loginOkta:this.loginOkta,
            logout: this.logout
        };

        return service;
    }

    angular.module("EZECastleIntegrationSPA.Common")
        .factory("AuthService", ["$rootScope", "$http", "localStorageService", authService]);
})();