angular.module('test_doge_debug', [
        'ui.router'
    ])
    .config(function ($stateProvider) {
        $stateProvider
            .state('test_doge_debug', {
                url: '/test',
                views: {
                    'menu': {
                        templateUrl: 'app/_main/menu/main_menu.html',
                        controller: 'MenuController as cMenu'
                    },
                    'main': {
                        controller: 'test_doge_debugController',
                        templateUrl: 'app/test_doge_debug/test_doge_debug.html'
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
    .controller('test_doge_debugController', function (debug) {
        debug('This is the output of test_doge_debug!');
    })
;