(function () {
    function topBarCtrl(rootScope, $uibModal, authService, state) {

        this.uiModelObject = $uibModal;
        this.rootScope = rootScope;
        this.state = state;

        this.userInfo = {
            userName: "",
            companyName: "",
            memberName: ""
        };

        this.menuItems = [
            { href: "serviceDashboard", title: "Service Dashboard" },
            { href: "reports", title: "Reports" }
        ];

        this.isUserLogined = function () {
            if (this.rootScope.isAuth) {
                this.userInfo.userName = this.rootScope.userData.userName;
                this.userInfo.companyName = this.rootScope.userData.companyName;
                this.userInfo.memberName = this.rootScope.userData.memberName;
            }
            return this.rootScope.isAuth;
        };

        this.logout = function () {
            authService.logout();
        }
    };
    angular.module('EZECastleIntegrationSPA.Common')
        .controller("TopBarCtrl", ["$rootScope", "$uibModal", "AuthService", "$state", topBarCtrl]);
})();