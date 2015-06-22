angular.module('main', [
    'ui.router',
    'main_menu',
    'main_footer'
    ])
    .controller('MainController', function ($state) {
        var cMain = this;
        cMain.message = 'This is the application root!';
        cMain.state = $state.current.name;
    })
;