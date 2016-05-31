(function() {
    'use strict';
    angular.module('EZECastleIntegrationSPA.Index', [
    ]);
})();
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
    function widgetsCtrl(recentNewsService) {
        recentNewsService.getRecentNews();
        this.recentNews ="ECI Telecom Ltd delivers comprehensive networking solutions to service providers around the globe. ECI was founded in 1961 as a manufacturer of advanced telecommunications equipment. The company provides, next generation packet optical transport products, a variety of SDN/NFV applications, a comprehensive cyber security solution and a full range of professional services.";
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
        .controller("WidgetsCtrl", ['RecentNewsService', widgetsCtrl]);
})();
(function () {
    function loginCtrl(uimodalInstance, authService,state) {
        this.modalInstance = uimodalInstance;
        this.login = function () {
            authService.loginOkta({ Email: this.user.Email, Password: this.user.Password }, function() {    
                this.modalInstance.close();
                state.go('serviceDashboard');
                }.bind(this),function(error){
                    this.loginErrorMessage = error.message;
                    this.authentifivationFailed = true;
                }.bind(this)
            );
        }
    }

    angular.module('EZECastleIntegrationSPA.Index')
        .controller("LoginCtrl", [
            '$uibModalInstance', 'AuthService', '$state', loginCtrl])
})();
(function () {
    "use strict";

    angular.module("EZECastleIntegrationSPA.ServiceDashboard", [
    ]);
})();
(function () {
    function notifyServices() {
        var notifications = [
            {
                id: 0,
                text: "Services are back up.",
                isDanger: true,
                userEmail: "sbobyr@amtoss.com.ua"
            },
            {
                id: 1,
                text: "Case 3333 was closed.",
                isDanger: false,
                userEmail: "sbobyr@amtoss.com.ua"
            },
            {
                id: 2,
                text: "your have invoice.",
                isDanger: true,
                userEmail: "sbobyr@amtoss.com.ua"
            }
        ];
        this.getNotifications = function(userEmail) {
            return notifications.filter(function(item) {
                if (item.userEmail === userEmail) {
                    return item;
                };
            });
        };
        this.removeNotify = function(notify) {
            notifications.splice(notifications.indexOf(notify), 1);
        };
        var service = {
            getNotification: this.getNotifications,
            removeNotify: this.removeNotify
        };
        return service;
    }

    angular.module('EZECastleIntegrationSPA.ServiceDashboard')
        .factory("NotificationService", notifyServices);
})();
(function () {
    function applicationService() {
        var applicationRepository = [
            {
                idApplication: 0,
                nameApp: "Skype Application",
                descriptionApp: "Skype video and voice calls, instant messaging and cheap international calls.",
                cssIcon: 'fa-skype',
                userEmail: "sbobyr@amtoss.com.ua"
            },
            {
                idApplication: 1,
                nameApp: "Skype Application",
                descriptionApp: "Keeping up with friends is faster than ever.",
                cssIcon: 'fa-facebook-official',
                userEmail: "sbobyr@amtoss.com.ua"
            },
            {
                idApplication: 2,
                nameApp: "GitHub Application",
                descriptionApp: "Fork of GitHub's official app with some fixes and some new features.",
                cssIcon: 'fa-github',
                userEmail: "sbobyr@amtoss.com.ua"
            },
            {
                idApplication: 3,
                nameApp: "Linkedin Application",
                descriptionApp: "Connect to People. Connect to Opportunity..",
                cssIcon: 'fa-linkedin',
                userEmail: "sbobyr@amtoss.com.ua"
            },
            {
                idApplication:4,
                nameApp: "Amazon Application",
                descriptionApp: "Browse, search & buy millions of products",
                cssIcon: 'fa-amazon',
                userEmail: "sbobyr@amtoss.com.ua"
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

    angular.module("EZECastleIntegrationSPA.ServiceDashboard")
        .factory("ApplicationService", applicationService);
})();
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
        };
        this.tiketStatuses = {
            open: "Open",
            closed: "Closed"
        };
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
    };
    angular.module("EZECastleIntegrationSPA.ServiceDashboard")
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
    };

    angular.module("EZECastleIntegrationSPA.ServiceDashboard")
        .filter("dateRange", dateRange);
})();
(function () {
    function serviceDashboardCtrl(rootScope) {
      
    };
    angular.module("EZECastleIntegrationSPA.ServiceDashboard")
        .controller("ServiceDashboardCtrl",[ "$rootScope",serviceDashboardCtrl]);
})();
(function () {
    function applicationCtrl(applicationService,rootScope) {
        this.applicationForUser = applicationService.getApplicationForUser(rootScope.userData.userName);
        
        this.selectApp = function(appId) {
            console.log("selected app" + appId);
        }
    }

    angular.module("EZECastleIntegrationSPA.ServiceDashboard")
        .controller("ApplicationCtrl", ["ApplicationService", "$rootScope", applicationCtrl]);
})();
(function () {
    function knowledgeCenterCtrl(knowService, rootScope) {
        this.documentsByUser = knowService.getDocuments(rootScope.userData.userName);
    };

    angular.module("EZECastleIntegrationSPA.ServiceDashboard")
        .controller("KnowledgeCenterCtrl", ["KnowledgeService", "$rootScope", knowledgeCenterCtrl]);
})();
(function () {
    function notifyCtrl(notifyService, rootScope) {
        this.notifyByUser = notifyService.getNotification(rootScope.userData.userName);
        this.removeNotifyItem = function(notify) {
            notifyService.removeNotify(notify);
            this.notifyByUser.splice(this.notifyByUser.indexOf(notify),1);
        }
    };

    angular.module("EZECastleIntegrationSPA.ServiceDashboard")
        .controller("NotifyCtrl", ["NotificationService", "$rootScope", notifyCtrl]);
})();
(function () {
    function ticketStatisticCtrl(ticketService) {
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
        .controller("TicketStatisticCtrl", ['TicketService', ticketStatisticCtrl]);
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

    angular.module("EZECastleIntegrationSPA.ServiceDashboard")
        .controller("TicketViewerCtrl", ["TicketService", "$rootScope", "$uibModal", ticketViewerCtrl]);
})();
(function () {
    function ticketGraphCtrl(ticketService) {
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
        .controller("TicketGraphCtrl", ['TicketService', ticketGraphCtrl]);
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

    angular.module("EZECastleIntegrationSPA.ServiceDashboard")
        .controller("AddTicketCtrl", ["$uibModalInstance", "teamData", addTicketCtrl]);
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
    function reportViewerCtrl( gridData) {
        this.customerGrid = {
            dataSource: {
                data: gridData,
                pageSize: 10,
                schema: {
                    model: {
                        fields: {
                            UserName: { type: "string" },
                            Agreement: { type: "number" },
                            Company: { type: "string" },
                            StartDate: { type: "date" },
                            Invoice:{type:"number"}
                        }
                    }
                }
            },
            filterable: {
                mode: "row"
            },
            sortable: true,
            height: 500,
            pageable: {
                refresh: true,
                pageSizes: true,
                buttonCount: 5
            },
            columns: [{
                field: "UserName",
                title: "User Name",
                width: "150px"
            }, {
                field: "Agreement",
                title: "Agreement",
                width: "100px"
            },
                {
                    field: "Company",
                    title: "Company",
                    width: "150px"
                },
                {
                    field: "StartDate",
                    title: "Start Date",
                    width: "150px",
                    type: "date",
                    template: "#= kendo.toString(kendo.parseDate(StartDate, 'yyyy-MM-dd'), 'MM/dd/yyyy') #",
                    filterable: {
                        ui: "datetimepicker"
                    }
                },
            {
                field: "Invoice",
                width: "100px"
            }]
        }

    }

    angular.module("EZECastleIntegrationSPA.Reporting")
        .controller("ReportViewerCtrl", [ "gridData", reportViewerCtrl]);
})();
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
(function () {
    "use strict";

    angular.module('EZECastleIntegrationSPA.Common', [
    ]);
})();
(function () {
    function authService(rootScope, http, localStorageService) {

        function saveUserCredentials(data) {
            var userData = {
                userName: data.Login,
                companyName: "PJT Partners LLP",
                memberName: data.MemberName,
                token: data.SessionToken
            }
            localStorageService.set("userData",userData);
            localStorageService.set("IsAuth", true);
            rootScope.userData = userData;
            rootScope.isAuth = true;
            http.defaults.headers.common["ECIDataToken"] = rootScope.userData.token;
        };

        this.loginOkta = function (user, sucessCallback, failedCallback) {
            http.post("api/auth/authentificate", user).then(function (responce) {
                if (responce.data.loginSuccess) {
                    saveUserCredentials(responce.data.userData);
                        sucessCallback(responce);
                } else {
                    if (failedCallback) {
                        failedCallback(responce.data);
                    }
                }
            }.bind(this), function(error) {
                console.log(error);
            });
        };

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

        this.logout = function () {
            http.get("api/auth/Logout").then(function(data) {
                localStorageService.remove("userData");
                localStorageService.remove("IsAuth");
                rootScope.userData = null;
                rootScope.isAuth = false;
                http.defaults.headers.common["ECIDataToken"] = null;
            });

        };

        var service = {
            login: this.login,
            loginOkta:this.loginOkta,
            logout: this.logout
        };

        return service;
    }

    angular.module("EZECastleIntegrationSPA.Common")
        .factory("AuthService", ["$rootScope", "$http", "localStorageService", authService]);
})();
(function () {
    'use strict';
  
    function sessionService(rootScope, state, http, localStorageService,authService) {
        var setRootScopeData = function() {
            if (localStorageService.get("IsAuth") && localStorageService.get("userData")) {
                rootScope.userData = localStorageService.get("userData");
                rootScope.isAuth = localStorageService.get("IsAuth");
                http.defaults.headers.common["ECIDataToken"] = rootScope.userData.token;
            }
        }
        var validateToken = function (successCallback, errorCallback) {
          return  http.get("api/auth/validateSession").then(function (responce) {
              if (responce.data.validation) {
                  if (typeof(successCallback) === "function") {
                      successCallback();
                  }
              } else {
                  if (typeof(errorCallback) === "function") {
                      errorCallback();
                  }
              }
          }, function (errorData) {
                    console.error(errorData);
             });
        }
        this.checkAccess = function(event, toState, toParams, fromState, fromParams) {
            setRootScopeData();
            if (!rootScope.isAuth && toState.data !== undefined && toState.data.noLogin) {
            } else if (rootScope.isAuth) {
                validateToken(function() {
                }, function () {
                    authService.logout();
                    event.preventDefault();
                    state.go('index');
                });
            }
            return false;
        };
        var service = {
            checkAccess: this.checkAccess
    };
        return service;
    }
    angular.module('EZECastleIntegrationSPA.Common')
    .factory("SessionService", ['$rootScope', '$state','$http', 'localStorageService','AuthService', sessionService])
})();
(function () {
    function rootCtrl() {
       
    }
    angular.module('EZECastleIntegrationSPA.Common')
        .controller("RootCtrl", rootCtrl);
})();
(function () {
    function topBarCtrl(rootScope, $uibModal, authService, state) {

        this.uiModelObject = $uibModal;
        this.rootScope = rootScope;
        this.state = state;

        this.userInfo = {
            userName: "",
            companyName: "",
            memberName: ""
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
    angular.module('EZECastleIntegrationSPA.Common')
        .controller("TopBarCtrl", ["$rootScope", "$uibModal", "AuthService", "$state", topBarCtrl]);
})();
(function () {
    "use strict";

    angular.module("EZECastleIntegrationSPA", [
            "ui.bootstrap",
            "ui.router",
            "ngResource",
            "daterangepicker",
            "chart.js",
            "angular-loading-bar",
            "cfp.loadingBar",
            "ngAnimate",
            "kendo.directives",
            "LocalStorageModule",
            "EZECastleIntegrationSPA.Index",
            "EZECastleIntegrationSPA.ServiceDashboard",
            "EZECastleIntegrationSPA.Reporting",
            "EZECastleIntegrationSPA.Common"
    ])

        .config([
            "$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/index");
                $stateProvider
                    .state("index", {
                        url: "/index",
                        views: {
                            "": {
                                templateUrl: "scripts/spa/index/templates/index.template.html",
                                controller: "IndexCtrl",
                                controllerAs: "vm"
                            },
                            'banner@index': {
                                templateUrl: "scripts/spa/index/templates/banner.template.html",
                                controller: "CarouselCtrl",
                                controllerAs: "vm"
                            },

                            'widgets@index': {
                                templateUrl: "scripts/spa/index/templates/widgets.template.html",
                                controller: "WidgetsCtrl",
                                controllerAs: "vm"
                            }
                        },
                        data: {
                            noLogin: true
                        }
                    })
                    .state("serviceDashboard", {
                        url: "/serviceDashboard",
                        views: {
                            "": {
                                templateUrl: "scripts/spa/serviceDashboard/templates/serviceDashboard.template.html",
                                controller: "ServiceDashboardCtrl",
                                controllerAs: "vm"
                            },
                            "notify@serviceDashboard": {
                                templateUrl: "scripts/spa/serviceDashboard/templates/navigationRegion/notify.template.html",
                                controller: "NotifyCtrl",
                                controllerAs: "vm"
                            },
                            "applications@serviceDashboard": {
                                templateUrl: "scripts/spa/serviceDashboard/templates/navigationRegion/application.template.html",
                                controller: "ApplicationCtrl",
                                controllerAs: "vm"
                            },
                            "knowledgeCenter@serviceDashboard": {
                                templateUrl: "scripts/spa/serviceDashboard/templates/navigationRegion/knowledgeCenter.template.html",
                                controller: "KnowledgeCenterCtrl",
                                controllerAs: "vm"
                            },
                            "ticketStatistics@serviceDashboard": {
                                templateUrl: "scripts/spa/serviceDashboard/templates/informationRegion/ticketStatistics.template.html",
                                controller: "TicketStatisticCtrl",
                                controllerAs: "vm"
                            },
                            "ticketViewer@serviceDashboard": {
                                templateUrl: "scripts/spa/serviceDashboard/templates/informationRegion/ticketViewer.template.html",
                                controller: "TicketViewerCtrl",
                                controllerAs: "vm"
                            },
                            "ticketGraph@serviceDashboard": {
                                templateUrl: "scripts/spa/serviceDashboard/templates/informationRegion/ticketsGraph.template.html",
                                controller: "TicketGraphCtrl",
                                controllerAs: "vm"
                            }
                        }
                    })
                    .state("reports", {
                        url: "/reports",
                        views: {
                            "": {
                                templateUrl: "scripts/spa/reporting/templates/reporting.template.html",
                                controller: "ReportingCtrl",
                                controllerAs: "mainReportingCtrl"
                            },
                            "serviceTrends@reports": {
                                templateUrl: "scripts/spa/reporting/templates/leftPanel/serviceTrendsFilter.template.html",
                                controller: "ServiceTrendsCtrl",
                                controllerAs: "vm"
                            },
                            "sheduler@reports": {
                                templateUrl: "scripts/spa/reporting/templates/leftPanel/sheduler.template.html",
                                controller: "ShedulerCtrl",
                                controllerAs: "vm"
                            },
                            "reportViewer@reports": {
                                templateUrl: "scripts/spa/reporting/templates/reportViewer/reportViewer.template.html",
                                controller: "ReportViewerCtrl",
                                controllerAs: "vm"
                            }
                        },
                        resolve: {
                            gridData: ["ReportService",
                                function (reportService) {
                                    return reportService.getReportData().then(function(data) {
                                        return data;
                                    });

                                }
                            ]
                        }

                    });
            }
        ])
        .config(["ChartJsProvider",
            function (chartJsProvider) {
                chartJsProvider.setOptions({ colours: ["#FFB6C1", "#9ACD32", "#F0E68C", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"] });
            }
        ])
        .config(["cfpLoadingBarProvider",
            function (cfpLoadingBarProvider) {
                cfpLoadingBarProvider.includeSpinner = false;
            }
        ])
        .config(["localStorageServiceProvider",
            function (localStorageServiceProvider) {
                localStorageServiceProvider.setPrefix("EzeCastleIntegration");
            }
        ])

        .run(["$rootScope", "$state", "$stateParams", "cfpLoadingBar", "SessionService",
            function (rootScope, $state, $stateParams, cfpLoadingBar, sessionService) {
                rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                    cfpLoadingBar.start();
                    sessionService.checkAccess(event, toState, toParams, fromState, fromParams);

                });
                rootScope.$on('$stateChangeSuccess', function() {
                    cfpLoadingBar.complete();
                });
            }
        ])
        .run(["$rootScope", "$state", "$stateParams",
            function (rootScope, state, stateParams) {
                rootScope.$state = state;
                rootScope.$stateParams = stateParams;
            }
        ]);
})();