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