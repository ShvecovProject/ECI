(function () {
    function loginCtrl(uimodalInstance, authService) {
            this.modalInstance = uimodalInstance;
        this.login = function () {
            if (authService.login(this.user.Email, this.user.Password)) {
                    this.modalInstance.close();
            } else {
                this.authentifivationFailed = true;
            }
           
        }
    }
    angular.module('EZECastleIntegrationSPA.Index')
    .controller("LoginCtrl", ['$uibModalInstance','AuthService', loginCtrl])
})();