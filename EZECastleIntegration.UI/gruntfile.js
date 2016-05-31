/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    this.buildType = {
        release: "release",
        dev: "dev"
    };
    this.vendorsFiles = [
        "modernizr",
        "jquery",
        "bootstrap",
        "angular",
        "angular-resource",
        "angular-animate",
        "angular-ui-router",
        "ui-bootstrap",
        "ui-bootstrap-tpls",
        "Chart",
        "angular-chart",
        "loading-bar",
        "moment",
        "ng-bs-daterangepicker",
        "daterangepicker",
        "angular-daterangepicker",
        "angular-local-storage"
      
    ];
    this.kendoFiles = [
      "scripts/vendors/common/kendo.all.min.js",
       "scripts/vendors/common/kendo.angular.min.js"
    ];
    this.getResource = function (type) {
        var returnValue = [],
            basePath = "",
            typeFile = type === this.buildType.dev ? ".js" : ".min.js";
        switch (type) {
            case this.buildType.dev:
                basePath = "scripts/vendors/dev/";
                break;
            case this.buildType.release:
                basePath = "scripts/vendors/release/";
                break;
        }
        for (var i = 0, max = this.vendorsFiles.length; i < max; i++) {
            returnValue.push(basePath + this.vendorsFiles[i] + typeFile);
        }
        return returnValue;
    };
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: {
            clean: ['output/release', 'output/dev','output/fonts']
        },
        concat: {
            js_vendors_dev: {
                src: this.getResource(this.buildType.dev),
                dest: 'output/dev/vendors.js'
            },
            js_vendors_release: {
                src: this.getResource(this.buildType.release),
                dest: 'output/release/vendors.min.js'
            },
            js_spa: {
                src: [
//-------------------------------EZECastleIntegration.Index------------------------------------------------------------------------------------------------
                             //-----main
                    'scripts/spa/index/index.js',
                    //--services
                    "scripts/spa/index/services/RecentNewsService.js",
                             //--controllers
                    "scripts/spa/index/controllers/IndexCtrl.js",
                    'scripts/spa/index/controllers/CarouselCtrl.js',
                    'scripts/spa/index/controllers/WidgetsCtrl.js',
                    'scripts/spa/index/controllers/LoginCtrl.js',

                    //

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
                      //services
                      'scripts/spa/common/services/AuthService.js',
                      'scripts/spa/common/services/SessionService.js',
                      //controllers
                      'scripts/spa/common/controllers/RootCtrl.js',
                      'scripts/spa/common/controllers/TopBarCtrl.js',
                      

//-------------------------------------EZECastleIntegrationSPA-----------------------------------------------------------------------------------------------
                    "scripts/spa/app.js"
                ],
                dest: 'output/dev/spa.js'
            },

            css: {
                src: ['content/css/**/*.css'],
                dest: 'output/dev/app.css'
            }
        },

        ngtemplates: {
            app: {
                src: 'scripts/spa/**/*.template.html',
                dest: 'output/dev/appTpl.js',
                options: {
                    module: 'EZECastleIntegrationSPA'
                }
            }
        },

        copy: {
            copyCssToRelease: {
                src: [
                 'output/dev/app.css'
                ],
                expand: true,
                dest: 'output/release/',
                flatten: true,
                filter: 'isFile'
            },
            copyBaseFontsDev: {
                src: [
                     'fonts/**.*woff2',
                     'fonts/**.*ttf',
                     'fonts/**.*woff'
                ],
                expand: true,
                dest: 'output/fonts/',
                flatten: true,
                filter: 'isFile'
            },
            copyKendoFonts: {
                src: [
                  'content/kendo/fonts/**.*ttf',
                  'content/kendo/fonts/**.*woff'
                ],
                expand: true,
                dest: 'output/dev/images/',
                flatten: true,
                filter: 'isFile'
            },
            copyKendoMaterial: {
                src: [
                 'content/kendo/Material/**'
                ],
                expand: true,
                dest: 'output/dev/Material/',
                flatten: true,
                filter: 'isFile'
            },
            copyKendoSource: {
                src: this.kendoFiles,
                expand: true,
                dest: 'output/dev/',
                flatten: true,
                filter: 'isFile'
            },
            //todo
            copyKendoFontsRel: {
                src: [
                  'content/kendo/fonts/**.*ttf',
                  'content/kendo/fonts/**.*woff'
                ],
                expand: true,
                dest: 'output/release/images/',
                flatten: true,
                filter: 'isFile'
            },
            copyKendoMaterialRel: {
                src: [
                 'content/kendo/Material/**'
                ],
                expand: true,
                dest: 'output/release/Material/',
                flatten: true,
                filter: 'isFile'
            },
            copyKendoSourceRel: {
                src: this.kendoFiles,
                expand: true,
                dest: 'output/release/',
                flatten: true,
                filter: 'isFile'
            }
        },

        uglify: {
            js: {
                src: 'output/dev/spa.js',
                dest:'output/release/spa.min.js'
            },
            jsTemplates: {
                src: 'output/dev/appTpl.js',
                dest: 'output/release/appTpl.min.js'
            }
        },

        //cssmin: {
        //    minify: {
        //        src: 'dev/app.css',
        //        dest:'output/release/app.min.css'
        //    }
        //}
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['clean','copy', 'concat', 'ngtemplates']);
    grunt.registerTask('release', ['clean','concat','copy', 'ngtemplates', 'uglify']);
};