(function () {
    function contactUsService($resource) {
     
        var service = {

        };
        return service;
    }

    angular.module('EZECastleIntegrationSPA.Index')
        .factory("ContactUsService", ['$resource', contactUsService]);
})();