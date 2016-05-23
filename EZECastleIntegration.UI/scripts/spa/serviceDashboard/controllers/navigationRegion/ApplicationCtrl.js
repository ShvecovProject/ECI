(function () {
    function applicationCtrl(applicationService,rootScope) {
        this.applicationForUser = applicationService.getApplicationForUser(rootScope.userData.userName);
        
        this.selectApp = function(appId) {
            console.log("selected app" + appId);
        }
    }
    
    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
    .controller("ApplicationCtrl",['ApplicationService','$rootScope', applicationCtrl])
})();