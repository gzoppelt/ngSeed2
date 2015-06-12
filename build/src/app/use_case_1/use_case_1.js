angular.module('use_case_1', [
        'ui.router',
        'sub_case_11'
    ])
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
                    },
                    'sub': {},
                    'footer': {
                        template: '<span class="glyphicon glyphicon-heart"></span> from Z-Bit'
                    }
                }

            })
        ;
    })
;