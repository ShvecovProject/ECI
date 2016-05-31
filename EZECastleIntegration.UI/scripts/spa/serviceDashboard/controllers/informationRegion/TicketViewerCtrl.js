(function () {
    function ticketViewerCtrl(ticketService, rootScope, modalObject) {
        this.tiketStatusEnum = ticketService.ticketsStatuses;
        this.teamData = ticketService.teams;
        this.tickets = getTickets();
          function getTickets() {
            var tickets = ticketService.getTicketsForCurrentUser(rootScope.userData.userName);
            var returnValue =  tickets.sort(function(item1, item2) {
                if (item1.dateCreated > item2.dateCreated)
                    return -1;
                else if (item1.dateCreated < item2.dateCreated)
                    return 1;
                else
                    return 0;
            });
              return returnValue;
          }
        this.periodDates = { startDate: moment("2016-04-01"), endDate: moment() };
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.addTicket = function() {
            var ticketModalInstance = modalObject.open({
                animation: true,
                templateUrl: 'scripts/spa/serviceDashboard/templates/informationRegion/modals/addTicket.template.html',
                controller: 'AddTicketCtrl',
                controllerAs: 'vm',
                windowClass: "ticket-modal",
                resolve: {
                    teamData: function () {
                        return this.teamData;
                    }.bind(this)
                }
            });
            ticketModalInstance.result.then(function (ticketData) {
                if (ticketData) {
                   ticketData.userEmail = rootScope.userData.userName;
                   var ticket =  ticketService.addTicketToUser(ticketData);
                   this.tickets.unshift(ticket);
                }
            }.bind(this), function () {

            });
        }
    }

    angular.module("EZECastleIntegrationSPA.ServiceDashboard")
        .controller("TicketViewerCtrl", ["TicketService", "$rootScope", "$uibModal", ticketViewerCtrl]);
})();