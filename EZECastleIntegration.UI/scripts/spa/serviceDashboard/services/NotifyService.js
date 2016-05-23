(function () {
    function notifyServices() {
        var notifications = [
            {
                id: 0,
                text: "Services are back up.",
                isDanger: true,
                userEmail:"admin@amtoss.com"
            },
            {
                id: 1,
                text: "Case 3333 was closed.",
                isDanger: false,
                userEmail: "admin@amtoss.com"
            },
            {
                id: 2,
                text: "your have invoice.",
                isDanger: true,
                userEmail: "admin@amtoss.com"
            }
        ];
        this.getNotifications= function(userEmail) {
            return notifications.filter(function(item) {
                if (item.userEmail === userEmail) {
                    return item;
                };
            });
        }
        this.removeNotify = function(notify) {
            notifications.splice(notifications.indexOf(notify), 1);
        }
        var service = {
            getNotification: this.getNotifications,
            removeNotify: this.removeNotify
        }
        return service;
    }
    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
    .factory("NotificationService", notifyServices)
})();