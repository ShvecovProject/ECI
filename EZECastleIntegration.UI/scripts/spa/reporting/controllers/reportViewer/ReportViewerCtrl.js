(function () {
    function reportViewerCtrl( gridData) {
       
        //var testGridData = [
        //    {
        //        "firstName": "Cox",
        //        "lastName": "Carney",
        //        "team": "Team 1",
        //        "employed": true,
        //        "invoice": 150
        //    },
        //    {
        //        "firstName": "Lorraine",
        //        "lastName": "Wise",
        //        "team": "Team 2",
        //        "employed": false,
        //        "invoice": 250
        //    },
        //    {
        //        "firstName": "Nancy",
        //        "lastName": "Waters",
        //        "team": "Team 3",
        //        "employed": false,
        //        "invoice": 600
        //    }
        //];

        //this.testGrid = {
        //    columnDefs: [
        //        { displayName: "First Name", field: 'firstName', resizable: false, filter: { placeholder: "First Name Filter" } },
        //        { displayName: 'Last Name', field: 'lastName' },
        //        {
        //            displayName: "Team",
        //            field: 'team',
        //            filter: {
        //                type: uiGridConstants.filter.SELECT,
        //                selectOptions: [{ value: 'Team 2', label: 'Team 2' }, { value: 'Team 1', label: 'Team 1' }, { value: 'Team 3', label: 'Team 3' }]
        //            }

        //        },
        //        { displayName: "Is Employed", field: 'employed', enableSorting: false },
        //        { displayName: "Invoice", field: "invoice", aggregationType: uiGridConstants.aggregationTypes.sum }
        //    ],
        //    data: testGridData,
        //    enableSorting: true,
        //    enableColumnResizing: true,
        //    enableFiltering: true,
        //    showGridFooter: true,
        //    showColumnFooter: true,
        //    enableGridMenu: true,
        //    enableSelectAll: true,

        //    exporterCsvFilename: 'EZECastleIntegrationt.csv',
        //    exporterPdfFilename: 'EZECastleIntegrationt.csv',
        //    exporterPdfDefaultStyle: { fontSize: 9 },
        //    exporterPdfTableStyle: { margin: [30, 30, 30, 30] },
        //    exporterPdfTableHeaderStyle: { fontSize: 10, bold: true, italics: true, color: 'red' },
        //    exporterPdfHeader: { text: "EZE Castle Integration", style: 'headerStyle' },
        //    exporterPdfFooter: function (currentPage, pageCount) {
        //        return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
        //    },
        //    exporterPdfCustomFormatter: function (docDefinition) {
        //        docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
        //        docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
        //        return docDefinition;
        //    },
        //    exporterPdfOrientation: 'portrait',
        //    exporterPdfPageSize: 'LETTER',
        //    exporterPdfMaxGridWidth: 500,
        //    exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location"))

        //};

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

    angular.module('EZECastleIntegrationSPA.Reporting')
        .controller("ReportViewerCtrl", [ 'gridData', reportViewerCtrl]);
})();