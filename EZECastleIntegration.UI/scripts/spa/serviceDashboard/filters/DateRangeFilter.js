(function () {
    function dateRange() {
        return function (inputArray, dateRangeObj) {
            if (!angular.isUndefined(inputArray) && !angular.isUndefined(dateRangeObj)) {
                return inputArray.filter(function(item) {
                    if (item.dateCreated >= dateRangeObj.startDate && item.dateCreated <= dateRangeObj.endDate)
                        return item;
                });
            } else {
                return inputArray;
            }
        };
    };

    angular.module("EZECastleIntegrationSPA.ServiceDashboard")
        .filter("dateRange", dateRange);
})();