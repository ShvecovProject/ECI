(function () {
    function reportService() {
        this.getAviableReports = function() {
            return[
                {
                    id: 0,
                    name: "ALL"
                }, {
                    id: 1,
                    name: "BY AGREEMENT"
                }, {
                    id: 2,
                    name: "BY USER"
                }, {
                    id: 3,
                    name: "By Company"
                }
            ];
        };
        var service = {
            getAviableReports: this.getAviableReports
        }
        return service;
    }
    angular.module('EZECastleIntegrationSPA.Reporting')
        .factory("ReportService", reportService)
})();