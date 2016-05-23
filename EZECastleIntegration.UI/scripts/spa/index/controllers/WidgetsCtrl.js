(function () {
    function widgetsCtrl() {
        this.recentNews = "ECI Telecom Ltd delivers comprehensive networking solutions to service providers around the globe. ECI was founded in 1961 as a manufacturer of advanced telecommunications equipment. The company provides, next generation packet optical transport products, a variety of SDN/NFV applications, a comprehensive cyber security solution and a full range of professional services.";
        this.resentWhitePagers = [
            { id: 0, title: "Document 1" },
            { id: 1, title: "Document 2" },
            { id: 2, title: "Document 3" },
            { id: 3, title: "Document 4" },
            { id: 3, title: "Document 5" }
        ];
        this.latestWhitepapers = "Access the latest white papers, research, webcasts, case studies and more covering a wide range of topics like IT, enterprise integration and open source.";
        this.companyContactUs= {
            name: "Eze Company",
            address: {
                postCode: 1355,
                addressLine1: "Market Street, Suite 900",
                city: "San Francisco, CA 94103"
            },
            telephone:"(123) 456-7890"
        }
    }
    angular.module('EZECastleIntegrationSPA.Index')
    .controller("WidgetsCtrl", widgetsCtrl)
})();