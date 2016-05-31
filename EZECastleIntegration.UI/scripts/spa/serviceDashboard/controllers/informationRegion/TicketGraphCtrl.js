(function () {
    function ticketGraphCtrl(ticketService) {
        this.teamData = ticketService.teams;
        this.periodDates = { startDate: moment("2016-04-01"), endDate: moment() };
        this.labels = ["Team 1", "Team 2", "Team 3","Team 4","Team 5"];
        this.series = ['Open Tickets', 'Close Tickets', 'InProgress'];
        this.chartData = [
          [10,52,60 ,5,80],
          [20, 40, 30,10,50],
          [15, 10, 25,40,90]
        ];
    }

    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
        .controller("TicketGraphCtrl", ['TicketService', ticketGraphCtrl]);
})();