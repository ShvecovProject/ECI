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