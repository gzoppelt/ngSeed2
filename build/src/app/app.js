//app.js
'use strict';
angular.module('propr', [
        'ui.router',
        'templates-app',
        'modules',

        'main',
        'main_menu',
        'use_case_1',
        'test_doge_debug'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                views: {
                    'menu': {
                        templateUrl: 'app/_main/menu/main_menu.html',
                        controller: 'MenuController as cMenu'
                    },
                    'main': {
                        templateUrl: 'app/_main/main.html',
                        controller: 'MainController'
                    },
                    'sub': {},
                    'footer': {
                        template: '<span class="glyphicon glyphicon-heart"></span> from Z-Bit'
                    }
                }
            })
        ;
        $urlRouterProvider
            .otherwise('/')
        ;
    })
;