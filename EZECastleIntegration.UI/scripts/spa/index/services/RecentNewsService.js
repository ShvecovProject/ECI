(function () {
    function recentNewsService($resource) {
        var resource = $resource('/api/index/RecentNews', {},  {query: {method:'GET',isArray:false}});

        this.getRecentNews = function (successFunction, errorFunction) {
           
        }
        var service = {
            getRecentNews: this.getRecentNews
        };
        return service;
    }

    angular.module('EZECastleIntegrationSPA.Index')
        .factory("RecentNewsService", ['$resource', recentNewsService]);
})();