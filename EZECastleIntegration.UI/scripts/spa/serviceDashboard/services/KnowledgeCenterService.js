(function () {
    function knowledgeService() {
        var documents = [
            {
                id: 0,
                text: "Document 1 by User admin@amtoss.com",
                userEmail: "sbobyr@amtoss.com.ua"
            },
            {
                id: 1,
                text: "Document 2 by User admin@amtoss.com",
                userEmail: "sbobyr@amtoss.com.ua"
            },
            {
                id: 2,
                text: "Document 3 by User admin@amtoss.com",
                userEmail: "sbobyr@amtoss.com.ua"
            }
        ];

        this.getDocumentByUser = function(userEmail) {
            return documents.filter(function(item) {
                if (item.userEmail === userEmail) {
                    return item;
                };
            });
        };

        var service = {
            getDocuments: this.getDocumentByUser
        };

        return service;
    }

    angular.module("EZECastleIntegrationSPA.ServiceDashboard")
        .factory("KnowledgeService", knowledgeService);
})();