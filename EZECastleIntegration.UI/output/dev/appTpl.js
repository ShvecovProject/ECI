angular.module('EZECastleIntegrationSPA').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('scripts/spa/common/templates/foother.template.html',
    "<footer class=\"navbar navbar-default navbar-fixed-bottom\">\r" +
    "\n" +
    "    <div class=\"container-fluid\">\r" +
    "\n" +
    "        <div class=\"pull-right navbar-text\"><a href=\"http://amtoss.com.ua\" target=\"_blank\">A-MTOSS</a> ©2016 All rights reserved.</div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</footer>"
  );


  $templateCache.put('scripts/spa/common/templates/topBar.template.html',
    "<div data-ng-controller=\"TopBarCtrl as vm\" id=\"topBar\">\r" +
    "\n" +
    "    <div class=\"navbar navbar-default navbar-fixed-top\">\r" +
    "\n" +
    "        <div class=\"container-fluid\">\r" +
    "\n" +
    "            <div class=\"navbar-header\">\r" +
    "\n" +
    "                <button type=\"button\" data-ng-show=\"vm.isUserLogined()\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navBar\">\r" +
    "\n" +
    "                    <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "                    <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "                    <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "                <a class=\"navbar-brand\" data-ui-sref=\"index\">EZE Castle Integration</a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"collapse navbar-collapse\" data-ng-if=\"vm.isUserLogined()\" id=\"navBar\">\r" +
    "\n" +
    "                <ul class=\"nav navbar-nav navbar-left\">\r" +
    "\n" +
    "                    <li data-ng-repeat=\"menuItem in vm.menuItems\"\r" +
    "\n" +
    "                        data-ng-mouseover=\"isHover=true\" data-ng-mouseleave=\"isHover=false\">\r" +
    "\n" +
    "                        <a data-ui-sref=\"{{menuItem.href}}\" data-ng-bind=\"menuItem.title\" data-ng-class=\"{'overMenuItem':isHover}\"></a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "                <ul class=\"nav navbar-nav navbar-right\">\r" +
    "\n" +
    "                    <p class=\"navbar-text\" data-ng-bind=\"vm.userInfo.userName\"></p>\r" +
    "\n" +
    "                    <li data-ng-click=\"vm.logout()\">\r" +
    "\n" +
    "                        <a href=\"#\">\r" +
    "\n" +
    "                            <span class=\"glyphicon glyphicon-log-out\"></span>\r" +
    "\n" +
    "                            Log Out\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-12 companyName\" data-ng-if=\"vm.isUserLogined() && !vm.state.is('index')\">\r" +
    "\n" +
    "        <h3 class=\"text-center text-info\"> Hello, {{vm.userInfo.memberName}} ({{vm.userInfo.companyName}})</h3>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('scripts/spa/index/templates/banner.template.html',
    "<div class=\"row-fluid carousel\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <uib-carousel active=\"vm.active\" class=\"banner\">\r" +
    "\n" +
    "            <uib-slide ng-repeat=\"slide in vm.slides track by slide.id\" interval=\"vm.interval\" index=\"slide.id\">\r" +
    "\n" +
    "                <img style=\"margin: auto; min-height: 290px;\" data-ng-src=\"{{slide.imageSrc}}\" />\r" +
    "\n" +
    "                <div class=\"carousel-caption\">\r" +
    "\n" +
    "                    <h2>ECI Customer Portal</h2>\r" +
    "\n" +
    "                    <h3>\r" +
    "\n" +
    "                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.\r" +
    "\n" +
    "                        Donec id elit non mi porta gravida at eget metus.Nullam id dolor id ulticies\r" +
    "\n" +
    "                        vechicula it id elit.\r" +
    "\n" +
    "                    </h3>\r" +
    "\n" +
    "                    <button data-ng-if=\"!vm.rootScope.isAuth\" class=\"btn btn-primary btn-lg\" data-ng-click=\"vm.loginToPortal()\">Enter Portal</button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </uib-slide>\r" +
    "\n" +
    "        </uib-carousel>\r" +
    "\n" +
    "        <button id=\"mobileLogin\" data-ng-if=\"!vm.rootScope.isAuth\" class=\"btn btn-default btn-primary visible-xs-block visible-xs text-center\" data-ng-click=\"vm.loginToPortal()\"> Enter Portal</button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('scripts/spa/index/templates/index.template.html',
    "<div class=\"row\" id=\"index\">\r" +
    "\n" +
    "    <div class=\"welcomeImg\" ui-view=\"banner\"></div>\r" +
    "\n" +
    "    <div class=\"widgets\" ui-view=\"widgets\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('scripts/spa/index/templates/modals/login.template.html',
    "<div id=\"loginForm\">\r" +
    "\n" +
    "    <div class=\"container-fluid\">\r" +
    "\n" +
    "        <div class=\"card card-container\">\r" +
    "\n" +
    "            <img id=\"profile-img\" class=\"profile-img-card img-circle\" src=\"../Content/img/avatar.png\" />\r" +
    "\n" +
    "            <form class=\"form-signin\" name=\"loginForm\" novalidate data-ng-submit=\"loginForm.$valid && vm.login()\">\r" +
    "\n" +
    "                <h3 class=\"text-center\">ECI Web Portal</h3>\r" +
    "\n" +
    "                <span id=\"reauth-email\" class=\"reauth-email\"></span>\r" +
    "\n" +
    "                <div class=\"form-group\" ng-class=\"{ 'has-error' : loginForm.email.$invalid && !loginForm.email.$pristine }\">\r" +
    "\n" +
    "                    <label class=\"sr-only\" for=\"email\">Email</label>\r" +
    "\n" +
    "                    <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Email address\" required  data-ng-model=\"vm.user.Email\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"form-group\" ng-class=\"{ 'has-error' : loginForm.password.$invalid && !loginForm.password.$pristine }\">\r" +
    "\n" +
    "                    <label class=\"sr-only\" for=\"password\">Password</label>\r" +
    "\n" +
    "                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required data-ng-model=\"vm.user.Password\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div data-ng-show=\"loginForm.$submitted || loginForm.email.$touched\">\r" +
    "\n" +
    "                    <div class=\"alert alert-danger\" data-ng-show=\"loginForm.email.$error.required\">Email is required</div>\r" +
    "\n" +
    "                    <div class=\"alert alert-danger\" data-ng-show=\"loginForm.email.$error.email\">This is not a valid email.</div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div data-ng-show=\"(loginForm.$submitted || loginForm.password.$touched ) &&  loginForm.email.$valid\">\r" +
    "\n" +
    "                    <div class=\"alert alert-danger\" data-ng-show=\"loginForm.password.$error.required\">Password is required</div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div data-ng-show=\"vm.authentifivationFailed && loginForm.email.$valid && loginForm.password.$valid \">\r" +
    "\n" +
    "                    <div class=\"alert alert-danger\" data-ng-bind=\"vm.loginErrorMessage\"></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div id=\"remember\" class=\"checkbox\">\r" +
    "\n" +
    "                    <label>\r" +
    "\n" +
    "                        <input type=\"checkbox\" value=\"remember-me\"> Remember me\r" +
    "\n" +
    "                    </label>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Sign in</button>\r" +
    "\n" +
    "            </form>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('scripts/spa/index/templates/widgets.template.html',
    "<div class=\"row-fluid\" id=\"widgetsRegion\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <!--<div class=\"panel\">\r" +
    "\n" +
    "            <div class=\"panel-body\">-->\r" +
    "\n" +
    "                <div class=\"col-md-4\">\r" +
    "\n" +
    "                    <div class=\"panel\">\r" +
    "\n" +
    "                        <div class=\"panel-heading \">\r" +
    "\n" +
    "                            <h3 class=\"text-center\">Recent News</h3>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"panel-body\">\r" +
    "\n" +
    "                            <p class=\"text-center\" data-ng-bind=\"vm.recentNews\"></p>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-md-4\">\r" +
    "\n" +
    "                    <div class=\"panel\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h3 class=\"text-center\">Latest Whitepapers</h3>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"panel-body\">\r" +
    "\n" +
    "                            <p class=\"text-center\" data-ng-bind=\"vm.latestWhitepapers\"></p>\r" +
    "\n" +
    "                            <!--<ul class=\"list-group\">\r" +
    "\n" +
    "                                <li class=\"list-group-item\" data-ng-repeat=\"document in vm.resentWhitePagers\">\r" +
    "\n" +
    "                                    <a>\r" +
    "\n" +
    "                                        <span class=\"glyphicon glyphicon-file\"></span>\r" +
    "\n" +
    "                                        <span class=\"list-group-item-heading\" data-ng-bind=\"document.title\"></span>\r" +
    "\n" +
    "                                    </a>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                            </ul>-->\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"col-md-4\">\r" +
    "\n" +
    "                    <div class=\"panel\">\r" +
    "\n" +
    "                        <div class=\"panel-heading\">\r" +
    "\n" +
    "                            <h3 class=\"text-center\"> Contact us</h3>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"panel-body\">\r" +
    "\n" +
    "                            <address class=\"text-center\">\r" +
    "\n" +
    "                                <strong data-ng-bind=\"vm.companyContactUs.name\"></strong>\r" +
    "\n" +
    "                                <br/>\r" +
    "\n" +
    "                                <span>\r" +
    "\n" +
    "                                    {{vm.companyContactUs.address.postCode}}\r" +
    "\n" +
    "                                    {{vm.companyContactUs.address.addressLine1}}\r" +
    "\n" +
    "                                </span>\r" +
    "\n" +
    "                                <br/>\r" +
    "\n" +
    "                                {{vm.companyContactUs.address.city}}\r" +
    "\n" +
    "                                <br/>\r" +
    "\n" +
    "                                <abbr title=\"Phone\">P:</abbr> {{vm.companyContactUs.telephone}}\r" +
    "\n" +
    "                            </address>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <!--<div class=\"panel-footer\">\r" +
    "\n" +
    "            </div>-->\r" +
    "\n" +
    "        <!--</div>\r" +
    "\n" +
    "    </div>-->\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('scripts/spa/reporting/templates/leftPanel/serviceTrendsFilter.template.html',
    "<div class=\"list-group\">\r" +
    "\n" +
    "    <a class=\"list-group-item text-center\">\r" +
    "\n" +
    "        <h4 class=\"list-group-item-heading\">\r" +
    "\n" +
    "            Service Trends\r" +
    "\n" +
    "        </h4>\r" +
    "\n" +
    "        <p class=\"text-center\">Please select a report.</p>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <button class=\"list-group-item\" data-ng-class=\"{'active':mainReportingCtrl.currentSelectReport===report.id}\" data-ng-repeat=\"report in vm.aviableReports\" data-ng-click=\"mainReportingCtrl.loadReport(report)\">\r" +
    "\n" +
    "        <h4 class=\"list-group-item-heading\" data-ng-bind=\"report.name\"></h4>\r" +
    "\n" +
    "        <p class=\"list-group-item-text\">Report Discription</p>\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('scripts/spa/reporting/templates/leftPanel/sheduler.template.html',
    "<div class=\"panel ezeWidget\" id=\"shedulerPanel\">\r" +
    "\n" +
    "    <div class=\"panel-heading panelHeader\"  data-ng-click=\"isCollapsedSheduler=!isCollapsedSheduler\">\r" +
    "\n" +
    "        <h5>\r" +
    "\n" +
    "            Sheduler\r" +
    "\n" +
    "        </h5>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"panel-body\" data-uib-collapse=\"isCollapsedSheduler\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <h5 class=\"text-center\">----TDD-----</h5>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('scripts/spa/reporting/templates/reportViewer/reportViewer.template.html',
    "<!--<h5 class=\"text-center\" data-ng-bind=\"mainReportingCtrl.staticText\"></h5>-->\r" +
    "\n" +
    "<!--<h4 class=\"text-info text-center\">Grid works in a test mode, for this moment we check the functionality of the angular ui grid. </h4>\r" +
    "\n" +
    "<div ui-grid=\"vm.testGrid\" ui-grid-selection ui-grid-resize-columns ui-grid-exporter class=\"reportGrid\"></div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<kendo-grid options=\"vm.customerGrid\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "</kendo-grid>"
  );


  $templateCache.put('scripts/spa/reporting/templates/reporting.template.html',
    "<div class=\"row\" id=\"reporting\">\r" +
    "\n" +
    "    <div class=\"col-md-4 col-lg-3 col-md-xs-2 col-sm-4 leftPanel\">\r" +
    "\n" +
    "        <div class=\"serviceTrandsFilter\" ui-view=\"serviceTrends\"></div>\r" +
    "\n" +
    "        <div class=\"sheduler\" ui-view=\"sheduler\"></div>\r" +
    "\n" +
    "        <div class=\"customReportButton\">\r" +
    "\n" +
    "            <button class=\"btn btn-lg btn-block btn-info\">Custom Report</button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-7 col-lg-9 col-sm-8 reportViewer\">\r" +
    "\n" +
    "        <div class=\"reportViewer\" ui-view=\"reportViewer\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('scripts/spa/serviceDashboard/templates/informationRegion/modals/addTicket.template.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h5 class=\"modal-title\">Add Ticket</h5>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "    <form id=\"addTicketForm\" class=\"form-horizontal\" name=\"addTicketForm\">\r" +
    "\n" +
    "        <div class=\"container-fluid\">\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <label for=\"teamDD\" class=\"col-md-2 control-label\">Team:</label>\r" +
    "\n" +
    "                <div class=\"col-sm-5\">\r" +
    "\n" +
    "                    <select id=\"teamDD\" data-ng-model=\"vm.newTicket.team\" class=\"form-control dropdown\" ng-options=\"opt.name for opt in  vm.teamData\">\r" +
    "\n" +
    "                        <!--<option data-ng-repeat=\"team in vm.teamData\" value=\"{{team.id}}\">\r" +
    "\n" +
    "                            {{team.name}}\r" +
    "\n" +
    "                        </option>-->\r" +
    "\n" +
    "                    </select>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"form-group\" ng-class=\"{ 'has-error' :addTicketForm.$submitted && addTicketForm.discription.$error.required}\">\r" +
    "\n" +
    "                <label for=\"discription\" class=\"col-md-2 control-label\">Discription:</label>\r" +
    "\n" +
    "                <div class=\"col-sm-10\">\r" +
    "\n" +
    "                    <textarea class=\"form-control\" rows=\"5\" id=\"discription\" name=\"discription\" data-ng-model=\"vm.newTicket.discription\" required></textarea>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <!--<div data-ng-show=\"addTicketForm.$submitted || addTicketForm.discription.$touched\">\r" +
    "\n" +
    "                <div class=\"alert alert-danger\" data-ng-show=\"addTicketForm.discription.$error.required\">Discription required</div>\r" +
    "\n" +
    "            </div>-->\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "        <div class=\"text-center\">\r" +
    "\n" +
    "            <button type=\"submit\" class=\"btn btn-success\" data-ng-click=\"vm.addTicket()\">Add Ticket</button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('scripts/spa/serviceDashboard/templates/informationRegion/ticketStatistics.template.html',
    "<div class=\"row ezeWidget\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <div class=\"col-md-3 col-xs-6\" data-ng-repeat=\"widget in vm.tiketModel\">\r" +
    "\n" +
    "            <div href=\"#\" class=\"ticketStatisticWidget text-center\">\r" +
    "\n" +
    "                <i class=\"fa fa-3x\" data-ng-class=\"widget.wIcon\"></i>\r" +
    "\n" +
    "                <h6>\r" +
    "\n" +
    "                    {{widget.wText}}\r" +
    "\n" +
    "                    <br/>\r" +
    "\n" +
    "                    <strong>{{widget.wCount}}</strong>\r" +
    "\n" +
    "                </h6>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <br/>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('scripts/spa/serviceDashboard/templates/informationRegion/ticketViewer.template.html',
    "<div class=\"row ezeWidget\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <h3>\r" +
    "\n" +
    "            Service Tickets\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-link\" data-ng-click=\"vm.addTicket()\">\r" +
    "\n" +
    "                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                Add Ticket\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "        </h3>\r" +
    "\n" +
    "            <div class=\"form-inline\">\r" +
    "\n" +
    "                <div class=\"form-group\">\r" +
    "\n" +
    "                    <label for=\"team\">TEAM:</label>\r" +
    "\n" +
    "                    <select id=\"team\" data-ng-model=\"vm.selectTeam\" class=\"form-control\">\r" +
    "\n" +
    "                        <option value=\"\">--No Selected--</option>\r" +
    "\n" +
    "                        <option data-ng-repeat=\"team in vm.teamData\" value=\"{{team.id}}\">\r" +
    "\n" +
    "                            {{team.name}}\r" +
    "\n" +
    "                        </option>\r" +
    "\n" +
    "                    </select>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"form-group\">\r" +
    "\n" +
    "                    <label for=\"period\">PERIOD:</label>\r" +
    "\n" +
    "                    <input id=\"period\" date-range-picker class=\"form-control date-picker\" type=\"text\" ng-model=\"vm.periodDates\" style=\"width: 225px\" required />\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"buttonSwitches form-inline\">\r" +
    "\n" +
    "                <div class=\"form-group\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"btn btn-info\" data-ng-click=\"vm.statusFilter=vm.tiketStatusEnum.open\">\r" +
    "\n" +
    "                        Open\r" +
    "\n" +
    "                        <i class=\"label label-info label-as-blage pull-right\" data-ng-bind=\"(vm.tickets | filter:{status:vm.tiketStatusEnum.open}).length\"></i>\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"form-group\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"btn btn-info\" data-ng-click=\"vm.statusFilter=vm.tiketStatusEnum.closed\">\r" +
    "\n" +
    "                        Closed\r" +
    "\n" +
    "                        <i class=\"label label-info label-as-blage pull-right\" data-ng-bind=\"(vm.tickets | filter:{status:vm.tiketStatusEnum.closed}).length\"></i>\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <table class=\"table table-bordered table-hover table-responsive\">\r" +
    "\n" +
    "                <tr>\r" +
    "\n" +
    "                    <th>ID</th>\r" +
    "\n" +
    "                    <th>Discription</th>\r" +
    "\n" +
    "                    <th>Status</th>\r" +
    "\n" +
    "                    <th>Team</th>\r" +
    "\n" +
    "                    <th>Date Created</th>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "                <tr data-ng-repeat-start=\"ticket in vm.tickets.slice(((vm.currentPage-1)*5), vm.currentPage*5) | filter:{status:vm.statusFilter, team:{id:vm.selectTeam}}| dateRange:vm.periodDates\">\r" +
    "\n" +
    "                    <td class=\"col-md-1\">\r" +
    "\n" +
    "                        <i class=\"fa fa-1x fa-plus\" aria-hidden=\"true\" data-ng-if=\"!ticket.expanded\" data-ng-click=\"ticket.expanded = true\"></i>\r" +
    "\n" +
    "                        <i class=\"fa fa-1x fa-minus\" aria-hidden=\"true\" data-ng-if=\"ticket.expanded\" data-ng-click=\"ticket.expanded = false\"></i>\r" +
    "\n" +
    "                       {{ticket.id}}\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td class=\"col-md-4\">{{ticket.discription}}</td>\r" +
    "\n" +
    "                    <td class=\"col-md-2\">{{ticket.status}}</td>\r" +
    "\n" +
    "                    <td class=\"col-md-2\">{{ticket.team.name}}</td>\r" +
    "\n" +
    "                    <td class=\"col-md-2\">{{ticket.dateCreated | date:\"dd-MM-yyyy\"}}</td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "                <tr data-ng-if=\"ticket.expanded\" data-ng-repeat-end=\"\">\r" +
    "\n" +
    "                    <td class=\"detalized\" colspan=\"5\">\r" +
    "\n" +
    "                        <p data-ng-bind=\"ticket.discription\"></p>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "            </table>\r" +
    "\n" +
    "            <uib-pagination total-items=\"vm.tickets.length\" items-per-page=\"5\" ng-model=\"vm.currentPage\" class=\"pagination-sm\"></uib-pagination>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('scripts/spa/serviceDashboard/templates/informationRegion/ticketsGraph.template.html',
    "<div class=\"row ezeWidget\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <h3 class=\"text-center\">\r" +
    "\n" +
    "            Graphs\r" +
    "\n" +
    "        </h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"form-inline\">\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <label for=\"team\">TEAM:</label>\r" +
    "\n" +
    "                <select id=\"team\" data-ng-model=\"vm.selectTeam\" class=\"form-control\">\r" +
    "\n" +
    "                    <option value=\"\">--No Selected--</option>\r" +
    "\n" +
    "                    <option data-ng-repeat=\"team in vm.teamData\" value=\"{{team.id}}\">\r" +
    "\n" +
    "                        {{team.name}}\r" +
    "\n" +
    "                    </option>\r" +
    "\n" +
    "                </select>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <label for=\"period\">PERIOD:</label>\r" +
    "\n" +
    "                <input id=\"period\" date-range-picker class=\"form-control date-picker\" type=\"text\" ng-model=\"vm.periodDates\" style=\"width: 225px\" required />\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"vm.chartData\"\r" +
    "\n" +
    "                chart-labels=\"vm.labels\" chart-legend=\"true\" chart-series=\"vm.series\"\r" +
    "\n" +
    "                height=\"75\"></canvas>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('scripts/spa/serviceDashboard/templates/navigationRegion/application.template.html',
    "<div class=\"panel ezeWidget\" id=\"applicationPanel\">\r" +
    "\n" +
    "    <div class=\"panel-heading panelHeader\" data-ng-click=\"isCollapsedApplication=!isCollapsedApplication\">\r" +
    "\n" +
    "        My Shortcuts\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"panel-body\" data-uib-collapse=\"isCollapsedApplication\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-4 col-sm-4 col-lg-4 col-xs-4\" data-ng-repeat=\"application in vm.applicationForUser\">\r" +
    "\n" +
    "                <div class=\"applicationLogo\">\r" +
    "\n" +
    "                    <a data-ng-click=\"vm.selectApp(application.idApplication)\">\r" +
    "\n" +
    "                        <div class=\"cover\">\r" +
    "\n" +
    "                            <i class=\"fa fa-3x\" data-ng-class=\"application.cssIcon\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"details\">\r" +
    "\n" +
    "                            <h5 class=\"text-center\" data-ng-bind=\"application.nameApp\"></h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <br />\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('scripts/spa/serviceDashboard/templates/navigationRegion/knowledgeCenter.template.html',
    "<div class=\"panel ezeWidget\" id=\"knowledgeCenter\">\r" +
    "\n" +
    "    <div class=\"panel-heading panelHeader\"  data-ng-click=\"isCollapsedKnowledge=!isCollapsedKnowledge\">\r" +
    "\n" +
    "        Knowledge Center\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"panel-body\" data-uib-collapse=\"isCollapsedKnowledge\">\r" +
    "\n" +
    "        <ul class=\"list-group\">\r" +
    "\n" +
    "            <li class=\"list-group-item\" data-ng-repeat=\"document in vm.documentsByUser\">\r" +
    "\n" +
    "                <a>\r" +
    "\n" +
    "                    <span class=\"fa fa-file-text\"></span>\r" +
    "\n" +
    "                    <span class=\"list-group-item-heading\" data-ng-bind=\"document.text\"></span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('scripts/spa/serviceDashboard/templates/navigationRegion/notify.template.html',
    "<div class=\"panel ezeWidget\" id=\"notifyPanel\">\r" +
    "\n" +
    "    <div class=\"panel-heading panelHeader\" data-ng-click=\"isCollapsedNotify=!isCollapsedNotify\">\r" +
    "\n" +
    "        My Notifications\r" +
    "\n" +
    "        <span class=\"label pull-right\" data-ng-bind=\"vm.notifyByUser.length\"></span>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"panel-body\" data-uib-collapse=\"isCollapsedNotify\">\r" +
    "\n" +
    "        <div class=\"alert alert-info\" data-ng-class=\"{'alert-danger':notify.isDanger}\" role=\"alert\" data-ng-repeat=\"notify in vm.notifyByUser\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"close\" aria-label=\"Close\" data-ng-click=\"vm.removeNotifyItem(notify)\">\r" +
    "\n" +
    "                <span aria-hidden=\"true\">&times;</span>\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            {{notify.text}}\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <p class=\"text-center text-info text-uppercase\" data-ng-hide=\"vm.notifyByUser.length!==0\"> For now you do not have any notifications </p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('scripts/spa/serviceDashboard/templates/serviceDashboard.template.html',
    "<div class=\"row\" id=\"serviceDashboard\">\r" +
    "\n" +
    "    <div class=\"col-md-3 navigationPanel\">\r" +
    "\n" +
    "        <div class=\"notification\" ui-view=\"notify\"></div>\r" +
    "\n" +
    "        <div class=\"applications\" ui-view=\"applications\"></div>\r" +
    "\n" +
    "        <div class=\"knowledgeCenter\" ui-view=\"knowledgeCenter\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-9 informationPanel\">\r" +
    "\n" +
    "        <div class=\"statistics\" ui-view=\"ticketStatistics\"></div>\r" +
    "\n" +
    "        <div class=\"viewer\" ui-view=\"ticketViewer\"></div>\r" +
    "\n" +
    "        <div class=\"graph\" ui-view=\"ticketGraph\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );

}]);
