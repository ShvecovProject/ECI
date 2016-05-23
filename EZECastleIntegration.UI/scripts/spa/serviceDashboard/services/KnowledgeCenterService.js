(function () {
    function knowledgeService() {
        var documents = [
            {
                id: 0,
                text: "Document 1 by User admin@amtoss.com",
                userEmail: "admin@amtoss.com"
            },
            {
                id: 1,
                text: "Document 2 by User admin@amtoss.com",
                userEmail: "admin@amtoss.com"
            },
            {
                id: 2,
                text: "Document 3 by User admin@amtoss.com",
                userEmail: "admin@amtoss.com"
            }
        ];
        this.getDocumentByUser = function (userEmail) {
            return documents.filter(function (item) {
                if (item.userEmail === userEmail) {
                    return item;
                };
            });
        }
        var service = {
            getDocuments: this.getDocumentByUser
        }
        return service;
    }
    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
    .factory("KnowledgeService", knowledgeService)
})();