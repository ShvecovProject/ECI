/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat: {
            js_vendors: {
                src: [
                 "scripts/vendors/modernizr-2.8.3.js",
                 "scripts/vendors/jquery-1.9.1.min.js",
                 "scripts/vendors/bootstrap.min.js",
                 "scripts/vendors/angular.js",
                 "scripts/vendors/angular-route.min.js",
                 "scripts/vendors/angular-resource.min.js",
                 "scripts/vendors/angular-cookies.js",
                 "scripts/vendors/angular-base64.js",
                 "scripts/vendors/angular-animate.min.js",
                 "scripts/vendors/ui-bootstrap.min.js",
                 "scripts/vendors/ui-bootstrap-tpls.min.js",
                 "scripts/vendors/angular-ui-router.min.js",
                 "scripts/vendors/moment.min.js",
                 "scripts/vendors/ng-bs-daterangepicker.min.js",
                 "scripts/vendors/daterangepicker.js",
                 "scripts/vendors/angular-daterangepicker.min.js",
                 "scripts/vendors/Chart.js",
                 "scripts/vendors/angular-chart.js",
                 "scripts/vendors/pdfmake.min.js",
                 "scripts/vendors/vfs_fonts.js",
                 "scripts/vendors/ui-grid.min.js",
                 "scripts/vendors/csv.js",
                 "scripts/vendors/loading-bar.min.js"
                ],
                dest: 'dev/vendors.js'
            },
            js_spa: {
                src: [
//-------------------------------EZECastleIntegration.Index------------------------------------------------------------------------------------------------
                             //-----main
                    'scripts/spa/index/index.js',
                             //--controllers
                    "scripts/spa/index/controllers/IndexCtrl.js",
                    'scripts/spa/index/controllers/CarouselCtrl.js',
                    'scripts/spa/index/controllers/WidgetsCtrl.js',
                    'scripts/spa/index/controllers/LoginCtrl.js',

//-------------------------------EZECastleIntegrationSPA.ServiceDashboard-----------------------------------------------------------------------------------
                    'scripts/spa/serviceDashboard/serviceDashboard.js',
                                 // -- services
                    'scripts/spa/serviceDashboard/services/NotifyService.js',
                    'scripts/spa/serviceDashboard/services/ApplicationService.js',
                    'scripts/spa/serviceDashboard/services/KnowledgeCenterService.js',
                    'scripts/spa/serviceDashboard/services/TicketService.js',
                    'scripts/spa/serviceDashboard/filters/DateRangeFilter.js',
                                  //--controllers
                                              // --main
                    'scripts/spa/serviceDashboard/controllers/ServiceDashboardCtrl.js',
                                             // -- navigationRegion
                    'scripts/spa/serviceDashboard/controllers/navigationRegion/ApplicationCtrl.js',
                    'scripts/spa/serviceDashboard/controllers/navigationRegion/KnowledgeCenterCtrl.js',
                    'scripts/spa/serviceDashboard/controllers/navigationRegion/NotifyCtrl.js',
                                             //--informationRegion
                     'scripts/spa/serviceDashboard/controllers/informationRegion/TicketStatisticCtrl.js',
                     'scripts/spa/serviceDashboard/controllers/informationRegion/TicketViewerCtrl.js',
                     'scripts/spa/serviceDashboard/controllers/informationRegion/TicketGraphCtrl.js',
                     'scripts/spa/serviceDashboard/controllers/informationRegion/AddTicketCtrl.js',

//-------------------------------------EZECastleIntegrationSPA.Reporting------------------------------------------------------------------------------------
                        //--main
                    'scripts/spa/reporting/reporting.js',

                     //--controllers
                    'scripts/spa/reporting/controllers/ReportingCtrl.js',
                    //--leftPanel
                    'scripts/spa/reporting/controllers/leftPanel/ShedulerCtrl.js',
                    'scripts/spa/reporting/controllers/leftPanel/ServiceTrendsFilterCtrl.js',
                    //--ReportViewer
                    'scripts/spa/reporting/controllers/reportViewer/ReportViewerCtrl.js',
                                  //--services
                    'scripts/spa/reporting/services/ReportService.js',
//-------------------------------------EZECastleIntegrationSPA.Common---------------------------------------------------------------------------------------
                      'scripts/spa/common/common.js',
                      'scripts/spa/common/services/AuthService.js',

//-------------------------------------EZECastleIntegrationSPA-----------------------------------------------------------------------------------------------
                    "scripts/spa/app.js"
                ],
                dest: 'dev/spa.js'
            },
            css: {
                src: ['content/css/**/*.css'],
                dest: 'dev/app.css'
            }
        },
        ngtemplates: {
            app: {
                src: 'scripts/spa/**/*.template.html',
                dest: 'dev/appTpl.js',
                options: {
                    module: 'EZECastleIntegrationSPA'
                }
            }
        },
        
        uglify: {
            js: {
                src: 'dev/spa.js',
                dest:'release/spa.min.js'
            },
            jsTemplates: {
                src: 'dev/appTpl.js',
                dest: 'release/appTpl.min.js'
            },
            vendors: {
                src: 'dev/vendors.js',
                dest: 'release/vendors.min.js'
            }
        },
        cssmin: {
            minify: {
                src: 'dev/app.css',
                dest:'release/app.min.css'
            }
            
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat', 'ngtemplates', 'uglify', 'cssmin']);
};