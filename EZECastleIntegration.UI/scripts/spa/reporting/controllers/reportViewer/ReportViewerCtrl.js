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