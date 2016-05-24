(function () {
    function reportService($timeout) {
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
        this.getReportData = function() {
            return $timeout(function() {
                var returnValue = [];

                for (var i = 0; i < 1000; i++) {
                    returnValue.push({
                        UserName: "User-" + i,
                        Agreement: Math.random(),
                        Company: "Comapany" + Math.random(),
                        StartDate: new Date(),
                        Invoice: 59 + i * Math.random()

                    });
                }
                return returnValue;
            }, 3000);


        };
        var service = {
            getAviableReports: this.getAviableReports,
            getReportData: this.getReportData
        }
        return service;
    }
    angular.module('EZECastleIntegrationSPA.Reporting')
        .factory("ReportService",['$timeout', reportService])
})();