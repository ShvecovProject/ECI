(function () {
    function notifyCtrl(notifyService, rootScope) {
        this.notifyByUser = notifyService.getNotification(rootScope.userData.userName);
        this.removeNotifyItem = function(notify) {
            notifyService.removeNotify(notify);
            this.notifyByUser.splice(this.notifyByUser.indexOf(notify),1);
        }
    }
    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
    .controller("NotifyCtrl", ['NotificationService','$rootScope', notifyCtrl])
})();