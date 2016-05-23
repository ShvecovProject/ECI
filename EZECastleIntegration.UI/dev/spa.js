(function() {
    'use strict';
    angular.module('EZECastleIntegrationSPA.Index', [
    ])
})();
(function () {
    function indexCtrl() {

    }
    angular.module('EZECastleIntegrationSPA.Index')
    .controller("IndexCtrl", indexCtrl)
})();
(function() {
    function carouselCtrl(rootScope,modalObject) {
        this.modalObject = modalObject;
        this.rootScope = rootScope;
        this.slides = [
            {
                id: 0,
                imageSrc: "../Content/img/carousel/newImg11_min.jpg",
                caption: "My Caption with first slide",
                isRenderButton: true,
                buttonText: "ClickMe",
                eventHandler: function (index) {
                    console.log("Click slide" + index);
                }
            }, {
                id: 1,
                imageSrc: "../Content/img/carousel/newImg10_min.jpg",
                caption: "My Caption with second slide",
                isRenderButton: true,
                buttonText: "ClickMe",
                eventHandler: function (index) {
                    console.log("Click slide "+index);
                }
            },
            {
                id: 2,
                imageSrc: "../Content/img/carousel/newImg5_min.jpg",
                caption: "My Caption with the third slide",
                isRenderButton: true,
                buttonText: "ClickMe",
                eventHandler: function(index) {
                    console.log("Click slide " + index);
                }
            }
        ];

        this.loginToPortal = function () {
            this.modalObject.open({
                animation: true,
                templateUrl: 'scripts/spa/index/templates/modals/login.template.html',
                controller: 'LoginCtrl',
                controllerAs: 'vm',
                windowClass: "login-modal"
            });
        }
        this.active = 0;
        this.interval = 500;
        this.noWrapSlides = true;
    }
    angular.module('EZECastleIntegrationSPA.Index')
    .controller("CarouselCtrl", ['$rootScope','$uibModal',carouselCtrl])
})();
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
(function () {
    function loginCtrl(uimodalInstance, authService) {
            this.modalInstance = uimodalInstance;
        this.login = function () {
            if (authService.login(this.user.Email, this.user.Password)) {
                    this.modalInstance.close();
            } else {
                this.authentifivationFailed = true;
            }
           
        }
    }
    angular.module('EZECastleIntegrationSPA.Index')
    .controller("LoginCtrl", ['$uibModalInstance','AuthService', loginCtrl])
})();
(function () {
    'use strict';
    angular.module('EZECastleIntegrationSPA.ServiceDashboard', [
    ])
})();
(function () {
    function notifyServices() {
        var notifications = [
            {
                id: 0,
                text: "Services are back up.",
                isDanger: true,
                userEmail:"admin@amtoss.com"
            },
            {
                id: 1,
                text: "Case 3333 was closed.",
                isDanger: false,
                userEmail: "admin@amtoss.com"
            },
            {
                id: 2,
                text: "your have invoice.",
                isDanger: true,
                userEmail: "admin@amtoss.com"
            }
        ];
        this.getNotifications= function(userEmail) {
            return notifications.filter(function(item) {
                if (item.userEmail === userEmail) {
                    return item;
                };
            });
        }
        this.removeNotify = function(notify) {
            notifications.splice(notifications.indexOf(notify), 1);
        }
        var service = {
            getNotification: this.getNotifications,
            removeNotify: this.removeNotify
        }
        return service;
    }
    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
    .factory("NotificationService", notifyServices)
})();
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
(function () {
    function ticketServices() {
        function _getDateNow() {
            var date = new Date();
            var dd = date.getDate();
            var mm = date.getMonth() + 1; //January is 0!

            var yyyy = date.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return mm + '/' + dd + '/' + yyyy;
        }

        this.tiketStatuses = {
            open: "Open",
            closed: "Closed"
        };
        this.teams = {

        }
        this.teams = [
            {
                id: 0,
                name: "Team 1"
            },
            {
                id: 1,
                name: "Team 2"
            },
            {
                id: 2,
                name: "Team 3"
            }
        ];

        var tickets = [
           {
               id: 0,
               discription: "Tiket1",
               status: this.tiketStatuses.closed,
               userEmail: "admin@amtoss.com",
               dateCreated: new Date('5/16/2016'),
               team: this.teams[0]
           },
           {
               id: 1,
               discription: "Tiket2",
               status: this.tiketStatuses.open,
               userEmail: "admin@amtoss.com",
               dateCreated: new Date('5/14/2016'),
               team: this.teams[1]
           },
           {
               id: 3,
               discription: "Tiket3",
               status: this.tiketStatuses.closed,
               userEmail: "admin@amtoss.com",
               dateCreated: new Date('4/10/2016'),
               team: this.teams[2]
           },
            {
                id: 4,
                discription: "Tiket4",
                status: this.tiketStatuses.closed,
                userEmail: "admin@amtoss.com",
                dateCreated: new Date('5/16/2016'),
                team: this.teams[0]
            },
           {
               id: 5,
               discription: "Tiket5",
               status: this.tiketStatuses.open,
               userEmail: "admin@amtoss.com",
               dateCreated: new Date('5/14/2016'),
               team: this.teams[1]
           },
           {
               id: 6,
               discription: "Tiket6",
               status: this.tiketStatuses.closed,
               userEmail: "admin@amtoss.com",
               dateCreated: new Date('4/10/2016'),
               team: this.teams[2]
           }

        ];
        this.getTicketsForUser = function (userEmail) {
            return tickets.filter(function (item) {
                if (item.userEmail === userEmail) {
                    return item;
                };
            });
        };

        this.addTicket = function (ticketModel) {
            var maxId = Math.max.apply(Math, tickets.map(function (o) { return o.id; }));
            ticketModel.dateCreated = new Date(_getDateNow());
            ticketModel.status = this.tiketStatuses.open;
            ticketModel.id = ++maxId;
            tickets.push(ticketModel);
            return ticketModel;
        }.bind(this);

        this.getTicketsStatistics = function () {
            return {
                totalUsers: 300,
                openTicketsForSystem: 800,
                closedTicketsForSystem: 250,
                inProgress: 25
            }
        };


        var service = {
            getTicketsForCurrentUser: this.getTicketsForUser,
            getTicketsStatistics: this.getTicketsStatistics,
            addTicketToUser: this.addTicket,
            ticketsStatuses: this.tiketStatuses,
            teams: this.teams
        };
        return service;
    }

    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
        .factory("TicketService", ticketServices);
})();
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
    }

    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
        .filter('dateRange', dateRange)
})();
(function () {
    function serviceDashboardCtrl(rootScope) {
        this.currentMemberName = rootScope.userData.memberName;
    }

    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
        .controller("ServiceDashboardCtrl",[ '$rootScope',serviceDashboardCtrl]);
})();
(function () {
    function applicationCtrl(applicationService,rootScope) {
        this.applicationForUser = applicationService.getApplicationForUser(rootScope.userData.userName);
        
        this.selectApp = function(appId) {
            console.log("selected app" + appId);
        }
    }
    
    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
    .controller("ApplicationCtrl",['ApplicationService','$rootScope', applicationCtrl])
})();
(function () {
    function knowledgeCenterCtrl(knowService, rootScope) {
        this.documentsByUser = knowService.getDocuments(rootScope.userData.userName);
        console.log(this.documentsByUser);
    }
    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
    .controller("KnowledgeCenterCtrl",['KnowledgeService','$rootScope', knowledgeCenterCtrl])
})();
(function () {
    function notifyCtrl(notifyService, rootScope) {
        this.notifyByUser = notifyService.getNotification(rootScope.userData.userName);
        this.removeNotifyItem = function(notify) {
            notifyService.removeNotify(notify);
            this.notifyByUser.splice(this.notifyByUser.indexOf(notify),1);
        }
    }
    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
    .controller("NotifyCtrl", ['NotificationService','$rootScope', notifyCtrl])
})();
(function () {
    function ticketStatisticCtrl(ticketService, rootScope) {
        var tiketInformation = ticketService.getTicketsStatistics();
        this.tiketModel = [
            {
                wText: "TOTAL USERS",
                wCount: tiketInformation.totalUsers,
                wIcon: 'fa-users'
            }, {
                wText: "OPEN TICKETS",
                wCount: tiketInformation.openTicketsForSystem,
                wIcon: 'fa-ticket'
            },
            {
                wText: "CLOSED TICKETS",
                wCount: tiketInformation.closedTicketsForSystem,
                wIcon: 'fa-ticket'
            }, {
                wText: "IN PROGRESS",
                wCount: tiketInformation.inProgress,
                wIcon: 'fa-tasks'
            }
        ];
    }
    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
    .controller("TicketStatisticCtrl", ['TicketService', '$rootScope', ticketStatisticCtrl])
})();
(function () {
    function ticketViewerCtrl(ticketService, rootScope, modalObject) {
        this.tiketStatusEnum = ticketService.ticketsStatuses;
        this.teamData = ticketService.teams;
        this.tickets = getTickets();
          function getTickets() {
            var tickets = ticketService.getTicketsForCurrentUser(rootScope.userData.userName);
            var returnValue =  tickets.sort(function(item1, item2) {
                if (item1.dateCreated > item2.dateCreated)
                    return -1;
                else if (item1.dateCreated < item2.dateCreated)
                    return 1;
                else
                    return 0;
            });
              return returnValue;
          }
        this.periodDates = { startDate: moment("2016-04-01"), endDate: moment() };
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.addTicket = function() {
            var ticketModalInstance = modalObject.open({
                animation: true,
                templateUrl: 'scripts/spa/serviceDashboard/templates/informationRegion/modals/addTicket.template.html',
                controller: 'AddTicketCtrl',
                controllerAs: 'vm',
                windowClass: "ticket-modal",
                resolve: {
                    teamData: function () {
                        return this.teamData;
                    }.bind(this)
                }
            });
            ticketModalInstance.result.then(function (ticketData) {
                if (ticketData) {
                   ticketData.userEmail = rootScope.userData.userName;
                   var ticket =  ticketService.addTicketToUser(ticketData);
                   this.tickets.unshift(ticket);
                }
            }.bind(this), function () {

            });
        }
    }

    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
        .controller("TicketViewerCtrl", ['TicketService', '$rootScope','$uibModal', ticketViewerCtrl])
})();
(function () {
    function ticketGraphCtrl(ticketService, rootScope) {
        this.teamData = ticketService.teams;
        this.periodDates = { startDate: moment("2016-04-01"), endDate: moment() };
        this.labels = ["Team 1", "Team 2", "Team 3","Team 4","Team 5"];
        this.series = ['Open Tickets', 'Close Tickets', 'InProgress'];
        this.chartData = [
          [10,52,60 ,5,80],
          [20, 40, 30,10,50],
          [15, 10, 25,40,90]
        ];
    }
    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
    .controller("TicketGraphCtrl", ['TicketService', '$rootScope', ticketGraphCtrl])
})();
(function () {
    function addTicketCtrl(uimodalInstance, teamData) {
        this.modalInstance = uimodalInstance;
        this.teamData = teamData;
        this.newTicket = {
            team: this.teamData[0]
        };
        this.addTicket = function() {
            this.modalInstance.close(this.newTicket);
        }
    }
    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
    .controller("AddTicketCtrl", ['$uibModalInstance', 'teamData', addTicketCtrl])
})();
(function () {
    'use strict';

    angular.module('EZECastleIntegrationSPA.Reporting', [
    ])
})();
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
(function () {
    function shedulerCtrl() {
    }

    angular.module('EZECastleIntegrationSPA.Reporting')
        .controller("ShedulerCtrl", shedulerCtrl);
})();
(function () {
    function serviceTrendsCtrl(reportService) {
        this.aviableReports = reportService.getAviableReports();
    }

    angular.module('EZECastleIntegrationSPA.Reporting')
        .controller("ServiceTrendsCtrl", ['ReportService', serviceTrendsCtrl]);
})();
(function () {
    function reportViewerCtrl(uiGridConstants) {
        var testGridData = [
            {
                "firstName": "Cox",
                "lastName": "Carney",
                "team": "Team 1",
                "employed": true,
                "invoice": 150
            },
            {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "team": "Team 2",
                "employed": false,
                "invoice": 250
            },
            {
                "firstName": "Nancy",
                "lastName": "Waters",
                "team": "Team 3",
                "employed": false,
                "invoice": 600
            }
        ];

        this.testGrid = {
            columnDefs: [
                { displayName: "First Name", field: 'firstName', resizable: false, filter: { placeholder: "First Name Filter" } },
                { displayName: 'Last Name', field: 'lastName' },
                {
                    displayName: "Team",
                    field: 'team',
                    filter: {
                        type: uiGridConstants.filter.SELECT,
                        selectOptions: [{ value: 'Team 2', label: 'Team 2' }, { value: 'Team 1', label: 'Team 1' }, { value: 'Team 3', label: 'Team 3' }]
                    }

                },
                { displayName: "Is Employed", field: 'employed', enableSorting: false },
                { displayName: "Invoice", field: "invoice", aggregationType: uiGridConstants.aggregationTypes.sum }
            ],
            data: testGridData,
            enableSorting: true,
            enableColumnResizing: true,
            enableFiltering: true,
            showGridFooter: true,
            showColumnFooter: true,
            enableGridMenu: true,
            enableSelectAll: true,

            exporterCsvFilename: 'EZECastleIntegrationt.csv',
            exporterPdfFilename: 'EZECastleIntegrationt.csv',
            exporterPdfDefaultStyle: { fontSize: 9 },
            exporterPdfTableStyle: { margin: [30, 30, 30, 30] },
            exporterPdfTableHeaderStyle: { fontSize: 10, bold: true, italics: true, color: 'red' },
            exporterPdfHeader: { text: "EZE Castle Integration", style: 'headerStyle' },
            exporterPdfFooter: function (currentPage, pageCount) {
                return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
            },
            exporterPdfCustomFormatter: function (docDefinition) {
                docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
                docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
                return docDefinition;
            },
            exporterPdfOrientation: 'portrait',
            exporterPdfPageSize: 'LETTER',
            exporterPdfMaxGridWidth: 500,
            exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location"))

        };

    }

    angular.module('EZECastleIntegrationSPA.Reporting')
        .controller("ReportViewerCtrl", ['uiGridConstants', reportViewerCtrl]);
})();
(function () {
    function reportService() {
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
        var service = {
            getAviableReports: this.getAviableReports
        }
        return service;
    }
    angular.module('EZECastleIntegrationSPA.Reporting')
        .factory("ReportService", reportService)
})();
(function () {
    'use strict';
    angular.module('EZECastleIntegrationSPA.Common', [
    ])
})();
(function () {
    'use strict';
    function authService(rootScope, state) {
        this.login = function(userEmail, password) {
            if (userEmail === "admin@amtoss.com" && password === "123") {
                rootScope.userData = {
                    userName: userEmail,
                    companyName: "PJT Partners LLP",
                    memberName:"Sergey"
                }
                rootScope.isAuth = true;
                state.go('serviceDashboard');
                return true;
            }
            return false;
        };
        this.logout = function() {
            rootScope.userData = null;
            rootScope.isAuth = false;
        };
        var service = {
            login: this.login,
            logout: this.logout
        };
        return service;
    }
    angular.module('EZECastleIntegrationSPA.Common')
    .factory("AuthService", ['$rootScope','$state',authService])
})();
(function () {
    'use strict';

    function topBarCtrl($rootScope, $uibModal, authService, state) {
        this.uiModelObject = $uibModal;
        this.rootScope = $rootScope;
        this.state = state;
        this.userInfo = {
            userName: "",
            companyName: "",
            memberName:""
        };
        this.menuItems = [
            { href: "serviceDashboard", title: "Service Dashboard" },
            { href: "reports", title: "Reports" }
        ];
        this.isUserLogined = function () {
            if (this.rootScope.isAuth) {
                this.userInfo.userName = this.rootScope.userData.userName;
                this.userInfo.companyName = this.rootScope.userData.companyName;
                this.userInfo.memberName = this.rootScope.userData.memberName;
            }
            return this.rootScope.isAuth;
        };
        this.logout = function () {
            authService.logout();
        }
    };

    angular.module('EZECastleIntegrationSPA', [
        'ui.bootstrap',
        'ui.router',
        'daterangepicker',
        'chart.js',
        'angular-loading-bar',
        'cfp.loadingBar',
        'ngAnimate',
        "ui.grid",
        'ui.grid.selection',
        'ui.grid.exporter',
        'ui.grid.resizeColumns',
        "EZECastleIntegrationSPA.Index",
        "EZECastleIntegrationSPA.ServiceDashboard",
        "EZECastleIntegrationSPA.Reporting",
        "EZECastleIntegrationSPA.Common"
    ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/index');
        $stateProvider
            .state('index', {
                url: '/index',
                views: {
                    '': {
                        templateUrl: "scripts/spa/index/templates/index.template.html",
                        controller: "IndexCtrl",
                        controllerAs: 'vm'
                    },
                    'banner@index': {
                        templateUrl: "scripts/spa/index/templates/banner.template.html",
                        controller: "CarouselCtrl",
                        controllerAs: 'vm'
                    },

                    'widgets@index': {
                        templateUrl: "scripts/spa/index/templates/widgets.template.html",
                        controller: "WidgetsCtrl",
                        controllerAs: 'vm'
                    }
                }

            })
            .state('serviceDashboard', {
                url: '/serviceDashboard',
                views: {
                    '': {
                        templateUrl: "scripts/spa/serviceDashboard/templates/serviceDashboard.template.html",
                        controller: "ServiceDashboardCtrl",
                        controllerAs: 'vm'
                    },
                    'notify@serviceDashboard': {
                        templateUrl: "scripts/spa/serviceDashboard/templates/navigationRegion/notify.template.html",
                        controller: "NotifyCtrl",
                        controllerAs: 'vm'
                    },
                    'applications@serviceDashboard': {
                        templateUrl: "scripts/spa/serviceDashboard/templates/navigationRegion/application.template.html",
                        controller: "ApplicationCtrl",
                        controllerAs: 'vm'
                    },
                    'knowledgeCenter@serviceDashboard': {
                        templateUrl: "scripts/spa/serviceDashboard/templates/navigationRegion/knowledgeCenter.template.html",
                        controller: "KnowledgeCenterCtrl",
                        controllerAs: 'vm'
                    },
                    'ticketStatistics@serviceDashboard': {
                        templateUrl: "scripts/spa/serviceDashboard/templates/informationRegion/ticketStatistics.template.html",
                        controller: "TicketStatisticCtrl",
                        controllerAs: 'vm'
                    },
                    'ticketViewer@serviceDashboard': {
                        templateUrl: "scripts/spa/serviceDashboard/templates/informationRegion/ticketViewer.template.html",
                        controller: "TicketViewerCtrl",
                        controllerAs: 'vm'
                    },
                    'ticketGraph@serviceDashboard': {
                        templateUrl: "scripts/spa/serviceDashboard/templates/informationRegion/ticketsGraph.template.html",
                        controller: "TicketGraphCtrl",
                        controllerAs: 'vm'
                    }
                }
            })
            .state('reports', {
                url: '/reports',
                views: {
                    '': {
                        templateUrl: "scripts/spa/reporting/templates/reporting.template.html",
                        controller: "ReportingCtrl",
                        controllerAs: "mainReportingCtrl"
                    },
                    'serviceTrends@reports': {
                        templateUrl: "scripts/spa/reporting/templates/leftPanel/serviceTrendsFilter.template.html",
                        controller: "ServiceTrendsCtrl",
                        controllerAs: 'vm'
                    },
                    'sheduler@reports': {
                        templateUrl: "scripts/spa/reporting/templates/leftPanel/sheduler.template.html",
                        controller: "ShedulerCtrl",
                        controllerAs: 'vm'
                    },
                    'reportViewer@reports': {
                        templateUrl: "scripts/spa/reporting/templates/reportViewer/reportViewer.template.html",
                        controller: "ReportViewerCtrl",
                        controllerAs: 'vm'
                    }
                }
            });
    }])

    .config(['ChartJsProvider', function (chartJsProvider) {
        chartJsProvider.setOptions({ colours: ['#FFB6C1', '#9ACD32', '#F0E68C', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
    }])

     .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
         cfpLoadingBarProvider.includeSpinner = false;
     }])

   .run(['$rootScope', '$state', '$stateParams', 'cfpLoadingBar', function(rootScope, $state, $stateParams, cfpLoadingBar) {
                rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                    cfpLoadingBar.start();
                });
                rootScope.$on('$stateChangeSuccess', function() {
                    cfpLoadingBar.complete();
                });
            }
        ])

    .run(['$rootScope', '$state', '$stateParams',function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
      ])

    .controller('RootCtrl', ['$scope', function ($scope) {

    }])

    .controller("TopBarCtrl", ['$rootScope', '$uibModal', 'AuthService', '$state', topBarCtrl])
})();