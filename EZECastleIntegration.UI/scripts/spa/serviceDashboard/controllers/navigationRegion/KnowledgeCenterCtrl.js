(function () {
    function knowledgeCenterCtrl(knowService, rootScope) {
        this.documentsByUser = knowService.getDocuments(rootScope.userData.userName);
    };

    angular.module("EZECastleIntegrationSPA.ServiceDashboard")
        .controller("KnowledgeCenterCtrl", ["KnowledgeService", "$rootScope", knowledgeCenterCtrl]);
})();