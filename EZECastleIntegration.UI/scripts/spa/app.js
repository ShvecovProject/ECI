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