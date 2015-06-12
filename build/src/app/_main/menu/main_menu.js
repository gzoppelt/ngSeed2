angular.module('main_menu', [
        'ui.router'
    ])
    .controller('MenuController', function() {
        var cMenu = this;
        cMenu.title = 'ngSeed2';
        cMenu.pages = [
            {link: '#/test', text: 'Test npm module Doge-Debug'},
            {link: '#/use_case_1', text: 'Use Case 1'}
        ];
    })