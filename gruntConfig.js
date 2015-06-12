module.exports = {
    build_dir : 'build',
    app_files: {
        js:     ['src/app/**/*.js'],
        tpl:    ['src/app/**/*.html'],
        less:   ['src/less/**/*.less'],
        html:   ['src/index.html'],
        img:    ['src/images/*.*']
    },
    bower_files: {
        js: [
            'bower_components/angular/angular.min.js',
            'bower_components/ui-router/release/angular-ui-router.min.js'
        ],
        fonts: [
            'bower_components/bootstrap/fonts/*'
        ]
    }
};