angular.module('templates-app', ['app/_main/main.html', 'app/_main/menu/main_menu.html', 'app/test_doge_debug/test_doge_debug.html', 'app/use_case_1/sub_case_11/sub_case_11.html', 'app/use_case_1/use_case_1.html']);

angular.module("app/_main/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/_main/main.html",
    "<div class=\"jumbotron\">\n" +
    "    <p class=\"lead\">\n" +
    "        This example shows the best practices for Angular applications\n" +
    "        working together with npm modules by browserifying them.\n" +
    "    </p>\n" +
    "</div>\n" +
    "<div>This is the application root!</div>\n" +
    "<hr>");
}]);

angular.module("app/_main/menu/main_menu.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/_main/menu/main_menu.html",
    "<div class=\"header\">\n" +
    "    <ul class=\"nav nav-pills pull-right\">\n" +
    "        <li ng-repeat=\"page in cMenu.pages\"><a ng-href=\"{{page.link}}\">{{page.text}}</a></li>\n" +
    "        <li><a ng-href=\"#/\">Home</a></li>\n" +
    "    </ul>\n" +
    "    <h2 class=\"text-muted\">{{cMenu.title}}</h2>\n" +
    "</div>");
}]);

angular.module("app/test_doge_debug/test_doge_debug.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/test_doge_debug/test_doge_debug.html",
    "<div class=\"jumbotron\">\n" +
    "    <h3>This is the form for <strong>test_doge_debug</strong></h3>\n" +
    "    <p>\n" +
    "        doge-debug is a tiny npm module that has been made available to<br>\n" +
    "        AngularJS with grunt-browserify. <br><br>\n" +
    "        If it works you will see in the console.\n" +
    "    </p>\n" +
    "</div>");
}]);

angular.module("app/use_case_1/sub_case_11/sub_case_11.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/use_case_1/sub_case_11/sub_case_11.html",
    "<div class=\"jumbotron\">\n" +
    "    This will be the form for <strong>sub_case_11</strong>\n" +
    "    <div>\n" +
    "        <ul class=\"nav nav-pills pull-left\">\n" +
    "            <li ><a ng-href=\"#/use_case_1\">Back</a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/use_case_1/use_case_1.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/use_case_1/use_case_1.html",
    "<div class=\"jumbotron\">\n" +
    "    <ul class=\"nav nav-pills pull-right\">\n" +
    "        <li ><a ng-href=\"#/use_case_1/sub_case_11\">Sub Case 11</a></li>\n" +
    "    </ul>\n" +
    "    <h3 class=\"text-muted\">Use Case 1</h3>\n" +
    "    This will be the form for <strong>use_case_1</strong>\n" +
    "</div>");
}]);
