module.exports = {
    build_dir: 'build',
    dist_dir: 'dist',
    app_files: {
        js:     ['src/app/**/*.js'],
        tpl:    ['src/app/**/*.html'],
        less:   ['src/less/**/*.less'],
        html:   ['src/index.html'],
        img:    [
            'src/images/*.*',
            'favicon.ico'
        ]
    },
    bower_files: {
        js: [
            'bower_components/angular/angular.js',
            'bower_components/ui-router/release/angular-ui-router.js'
        ],
        fonts: [
            'bower_components/bootstrap/fonts/*'
        ]
    }
};