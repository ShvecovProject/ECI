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