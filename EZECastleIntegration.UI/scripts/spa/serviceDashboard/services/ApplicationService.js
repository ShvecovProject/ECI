(function () {
    function applicationService() {
        var applicationRepository = [
            {
                idApplication: 0,
                nameApp: "Skype Application",
                descriptionApp: "Skype video and voice calls, instant messaging and cheap international calls.",
                cssIcon: 'fa-skype',
                userEmail: "admin@amtoss.com"
            },
            {
                idApplication: 1,
                nameApp: "Skype Application",
                descriptionApp: "Keeping up with friends is faster than ever.",
                cssIcon: 'fa-facebook-official',
                userEmail:"admin@amtoss.com"
            },
            {
                idApplication: 2,
                nameApp: "GitHub Application",
                descriptionApp: "Fork of GitHub's official app with some fixes and some new features.",
                cssIcon: 'fa-github',
                userEmail: "admin@amtoss.com"
            },
            {
                idApplication: 3,
                nameApp: "Linkedin Application",
                descriptionApp: "Connect to People. Connect to Opportunity..",
                cssIcon: 'fa-linkedin',
                userEmail: "admin@amtoss.com"
            },
            {
                idApplication:4,
                nameApp: "Amazon Application",
                descriptionApp: "Browse, search & buy millions of products",
                cssIcon: 'fa-amazon',
                userEmail: "admin@amtoss.com"
            }
        ];
        this.getApplicationForUser = function (userEmail) {
            return applicationRepository.filter(function (item) {
                if (item.userEmail === userEmail) {
                    return item;
                };
            });
        }
       
        var service = {
            getApplicationForUser: this.getApplicationForUser,
        }
        return service;
    }
    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
    .factory("ApplicationService", applicationService)
})();