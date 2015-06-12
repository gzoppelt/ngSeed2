module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-nodemon');

    var userConfig = require('./gruntConfig.js');

    var taskConfig = {

        browserify: {
            build: {
                src: ['src/modules/modules.js'],
                dest: '<%= build_dir %>/modules.js',
                options: {debug: true}
            }
        },

        clean: [
            '<%= build_dir %>'
        ],

        concurrent: {
            dev: {
                tasks: ['nodemon:dev', 'watch'],
                options: {
                      logConcurrentOutput: true
                }
            }
        },

        copy: {
            appjs: {
                files: [
                    {
                        src:  ['<%= app_files.js %>'],
                        dest: '<%= build_dir %>',
                        cwd: '.',
                        expand: true
                    }
                ]
            },
            bowerjs: {
                files: [
                    {
                        src: ['<%= bower_files.js %>'],
                        dest: '<%= build_dir %>',
                        cwd: '.',
                        expand: true
                    }
                ]

            },
            images: {
                files: [
                    {
                        src: ['<%= app_files.img %>'],
                        dest: '<%= build_dir %>',
                        cwd: '.',
                        expand: true
                    }
                ]  
            },
            fonts: {
                files: [
                    {
                        src: ['<%= bower_files.fonts %>'],
                        dest: '<%= build_dir %>/src/fonts/',
                        cwd: '.',
                        expand: true,
                        flatten: true
                    }
                ]
            }
            /*
            tpl: {
                files: [
                    {
                        src: ['<%= app_files.tpl %>'],
                        dest: '<%= build_dir %>',
                        cwd: '.',
                        expand: true
                    }
                ]
            }
            */
        },

        html2js: {
            app: {
                options: {
                    base: 'src' // = default
                },
                src: ['<%= app_files.tpl %>'],
                dest: '<%= build_dir %>/templates-app.js'
            }
        },

        index: {
            build: {
                dir: '<%= build_dir %>',
                src: [
                    '<%= bower_files.js %>',
                    '<%= build_dir %>/src/**/*.js',
                    '<%= build_dir %>/src/**/*.css',
                    '<%= html2js.app.dest %>',
                    '<%= build_dir %>/modules.js'
                ]
            }
        },

        less: {
            build: {
                files: {
                    //'destination': 'source'
                    '<%= build_dir %>/src/app/<%= pkg.name %>_<%= pkg.version %>.css': 'src/less/main.less'
                }
            }
        },

        nodemon: {
            dev: {
                script: 'server/server.js',
                options: {
                    watch: ['server']
                }
            }
        },

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            jssrc: {
                files: ['<%= app_files.js %>'],
                tasks: ['copy', 'index']
            },
            html: {
                files: ['<%= app_files.html %>'],
                tasks: ['index:build']

            },
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: [],
                options: {
                    livereload: false
                }
            },
            less: {
                files: ['<%= app_files.less %>'],
                tasks: ['less:build']
            },
            modules: {
                files: 'src/modules/**/*.js',
                task: ['browserify']
            }
        }
    };

    grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

    grunt.registerTask('default', ['build', 'concurrent']);
    grunt.registerTask('build', ['clean', 'copy', 'html2js', 'browserify', 'less:build', 'index:build'])

    function filterForExtension(extension, files) {
        var extRegExp = new RegExp('\\.' + extension + '$'),
            dirRegExp = new RegExp(
                '^(' + grunt.config('build_dir') + '|' +
                     + grunt.config('dist_dir') + ')\/',
                'g'
            );
        return files.filter(function (file) {
            return file.match(extRegExp);
        }).map(function (file) {
            return file.replace(dirRegExp, '');
        });
    };

    grunt.registerMultiTask('index', 'Process index.html template', function () {
        var  jsFiles = filterForExtension('js',  this.filesSrc),
            cssFiles = filterForExtension('css', this.filesSrc);

        //grunt.log.writeln(this.data.dir);

        grunt.file.copy('src/index.html', 'build/index.html', {
            process : function (contents, path) {
                return grunt.template.process(contents, {
                    data: {
                        scripts: jsFiles,
                        styles: cssFiles,
                        version: grunt.config('pkg.version')
                    }
                });
            }
        });

    });

};