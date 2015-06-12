angular.module('sub_case_11',[
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
                    },
                    'sub': {
                        templateUrl: 'app/use_case_1/sub_case_11/sub_case_11.html'
                    },
                    'footer': {
                        template: '<span class="glyphicon glyphicon-heart"></span> from Z-Bit'
                    }
                }

            })
        ;
    })
;