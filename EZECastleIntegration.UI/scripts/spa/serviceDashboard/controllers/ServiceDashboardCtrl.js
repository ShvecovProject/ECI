(function () {
    function serviceDashboardCtrl(rootScope) {
        this.currentMemberName = rootScope.userData.memberName;
    }

    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
        .controller("ServiceDashboardCtrl",[ '$rootScope',serviceDashboardCtrl]);
})();