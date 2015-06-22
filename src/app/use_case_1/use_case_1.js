angular.module('use_case_1', [
        'ui.router',
        'sub_case_11'
    ])

    .value(
        'test', 2
    )

    .config(function ($stateProvider) {
        $stateProvider
            .state('use_case_1', {
                url: '/use_case_1',
                views: {
                    'menu': {
                        templateUrl: 'app/_main/menu/main_menu.html',
                        controller: 'MenuController as cMenu'
                    },
                    'main': {
                        templateUrl: 'app/use_case_1/use_case_1.html',
                        controller: 'UseCase1Controller as cUc1'
                    },
                    'sub': {},
                    'footer': {
                        templateUrl: 'app/_main/footer/main_footer.html',
                        controller: 'FooterController as cFooter'
                    }
                }

            })
        ;
    })
    .controller('UseCase1Controller', function UseCase1Controller($state) {
        var cUc1 = this;
        cUc1.state = $state.current.name;
    })
;