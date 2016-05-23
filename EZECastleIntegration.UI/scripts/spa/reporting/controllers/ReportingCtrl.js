(function () {
    function reportingCtrl() {
        this.loadReport = function (report) {
            this.currentSelectReport = report.id;
            this.staticText = "Loading.." + " Report Name: " + report.name + " ReportId:" + report.id;
        }
    }

    angular.module('EZECastleIntegrationSPA.Reporting')
        .controller("ReportingCtrl", reportingCtrl)
})();