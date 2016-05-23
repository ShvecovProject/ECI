(function () {
    function ticketStatisticCtrl(ticketService, rootScope) {
        var tiketInformation = ticketService.getTicketsStatistics();
        this.tiketModel = [
            {
                wText: "TOTAL USERS",
                wCount: tiketInformation.totalUsers,
                wIcon: 'fa-users'
            }, {
                wText: "OPEN TICKETS",
                wCount: tiketInformation.openTicketsForSystem,
                wIcon: 'fa-ticket'
            },
            {
                wText: "CLOSED TICKETS",
                wCount: tiketInformation.closedTicketsForSystem,
                wIcon: 'fa-ticket'
            }, {
                wText: "IN PROGRESS",
                wCount: tiketInformation.inProgress,
                wIcon: 'fa-tasks'
            }
        ];
    }
    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
    .controller("TicketStatisticCtrl", ['TicketService', '$rootScope', ticketStatisticCtrl])
})();