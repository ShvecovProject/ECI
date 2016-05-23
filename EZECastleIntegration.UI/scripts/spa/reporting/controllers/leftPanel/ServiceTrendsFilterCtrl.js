(function () {
    function serviceTrendsCtrl(reportService) {
        this.aviableReports = reportService.getAviableReports();
    }

    angular.module('EZECastleIntegrationSPA.Reporting')
        .controller("ServiceTrendsCtrl", ['ReportService', serviceTrendsCtrl]);
})();