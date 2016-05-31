(function () {
    function addTicketCtrl(uimodalInstance, teamData) {
        this.modalInstance = uimodalInstance;
        this.teamData = teamData;
        this.newTicket = {
            team: this.teamData[0]
        };
        this.addTicket = function() {
            this.modalInstance.close(this.newTicket);
        }
    }

    angular.module("EZECastleIntegrationSPA.ServiceDashboard")
        .controller("AddTicketCtrl", ["$uibModalInstance", "teamData", addTicketCtrl]);
})();