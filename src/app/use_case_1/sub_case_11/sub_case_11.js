angular.module('sub_case_11', [
    'ui.router'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('sub_case_11', {
                url: '/use_case_1/sub_case_11',
                views: {
                    'menu': {
                        templateUrl: 'app/_main/menu/main_menu.html',
                        controller: 'MenuController as cMenu'
                    },
                    'main': {
                        templateUrl: 'app/use_case_1/use_case_1.html',
                        controller: 'UseCase1Controller as cUc1'

                    },
                    'sub': {
                        templateUrl: 'app/use_case_1/sub_case_11/sub_case_11.html',
                        controller:  'SubCase11Controller as cSc11'
                    },
                    'footer': {
                        templateUrl: 'app/_main/footer/main_footer.html',
                        controller: 'FooterController as cFooter'
                    }
                }

            })
        ;
    })
    .controller('SubCase11Controller', function SubCase11Controller ($state) {
        var cSc11 = this;
        cSc11.state = $state.current.name;
    })
;