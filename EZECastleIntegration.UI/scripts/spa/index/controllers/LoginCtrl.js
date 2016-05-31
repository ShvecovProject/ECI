(function () {
    function loginCtrl(uimodalInstance, authService,state) {
        this.modalInstance = uimodalInstance;
        this.login = function () {
            authService.loginOkta({ Email: this.user.Email, Password: this.user.Password }, function() {    
                this.modalInstance.close();
                state.go('serviceDashboard');
                }.bind(this),function(error){
                    this.loginErrorMessage = error.message;
                    this.authentifivationFailed = true;
                }.bind(this)
            );
        }
    }

    angular.module('EZECastleIntegrationSPA.Index')
        .controller("LoginCtrl", [
            '$uibModalInstance', 'AuthService', '$state', loginCtrl])
})();