module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-nodemon');

    var userConfig = require('./gruntConfig.js');

    var taskConfig = {
        //variables
        pkg: grunt.file.readJSON('package.json'),
        dist_target: '<%= dist_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>',
        build_target: '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>',

        //grunt tasks

        browserify: {
            build: {
                src: ['src/modules/modules.js'],
                dest: '<%= build_dir %>/modules.js',
                options: {debug: true}
            }
        },

        clean: {
            build: ['<%= build_dir %>'],
            dist: ['<%= dist_dir %>']
        },

        concat: {
            dist_js: {
                src: [
                    '<%= bower_files.js %>',
                    'module.prefix',
                    '<%= build_dir %>/src/**/*.js',
                    '<%= build_dir %>/templates-app.js',
                    'module.suffix',
                    '<%= build_dir %>/modules.js'
                ],
                dest: '<%= dist_target %>.js'
            }

        },

        concurrent: {
            dev: {
                tasks: ['nodemon:dev', 'watch'],
                options: {
                      logConcurrentOutput: true
                }
            }
        },

        copy: {
            build: {
                files: [
                    {
                        src:  ['<%= app_files.js %>'],
                        dest: '<%= build_dir %>',
                        cwd: '.',
                        expand: true
                    },
                    {
                        src: ['<%= bower_files.js %>'],
                        dest: '<%= build_dir %>',
                        cwd: '.',
                        expand: true
                    },
                    {
                        src: ['<%= app_files.img %>'],
                        dest: '<%= build_dir %>',
                        cwd: '.',
                        expand: true
                    },
                    {
                        src: ['<%= bower_files.fonts %>'],
                        dest: '<%= build_dir %>/fonts/',
                        cwd: '.',
                        expand: true,
                        flatten: true
                    }
                ]
            },
            dist: {
                files: [
                    {
                        src: ['<%= app_files.img %>'],
                        dest: '<%= dist_dir %>/src/images/',
                        cwd: '.',
                        expand: true,
                        flatten: true
                    },
                    {
                        src: ['<%= bower_files.fonts %>'],
                        dest: '<%= dist_dir %>/fonts/',
                        cwd: '.',
                        expand: true,
                        flatten: true
                    }
                ]
            }
            /*
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
                    },
                    {
                        src: ['<%= app_files.img %>'],
                        dest: '<%= dist_dir %>/src/images/',
                        cwd: '.',
                        expand: true,
                        flatten: true
                    }
                ]  
            },
            fonts: {
                files: [
                    {
                        src: ['<%= bower_files.fonts %>'],
                        dest: '<%= build_dir %>/fonts/',
                        cwd: '.',
                        expand: true,
                        flatten: true
                    },
                    {
                        src: ['<%= bower_files.fonts %>'],
                        dest: '<%= dist_dir %>/fonts/',
                        cwd: '.',
                        expand: true,
                        flatten: true
                    }
                ]
            }
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
                    '<%= build_dir %>/assets/*.css',
                    '<%= html2js.app.dest %>',
                    '<%= build_dir %>/modules.js'
                ]
            },
            dist: {
                dir: '<%= dist_dir %>',
                src: [
                    '<%= dist_dir %>/**/*.js',
                    '<%= dist_dir %>/**/*.css'
                ]
            }
        },

        karma: {
            unit: {
                background: true,
                options: {
                    files: [
                        'dist/assets/<%= dist_target %>.js'
                    ],
                    plugins: [
                        'karma-jasmine',
                        'karma-phantomjs-launcher'
                    ],
                    frameworks: [
                        'jasmine'
                    ],
                    browsers: [
                        'PhantomJS'
                    ]
                }
            }
        },


        less: {
            build: {
                files: {
                    //'destination': 'source'
                    '<%= build_target %>.css': 'src/less/main.less'
                }
            },
            dist: {
                options: {
                    compress: true
                },
                files: {
                   //'destination': 'source'
                   '<%= dist_target %>.css': 'src/less/main.less'
                }
            }
        },

        ngAnnotate: {
            compile: {
                files: [
                    {
                        src: ['<%= dist_target %>.js'],
                        dest: '<%= dist_target %>.js'
                    }
                ]
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

        uglify: {
            dist: {
                files: {
                    '<%= dist_target %>.js': '<%= dist_target %>.js'
                }
            }
        },

        watch: {
            jssrc: {
                files: ['<%= app_files.js %>'],
                tasks: ['copy', 'index']
            },
            html: {
                files: ['<%= app_files.html %>'],
                tasks: ['index:build']

            },
            tpl: {
                files: ['<%= app_files.tpl %>'],
                tasks: ['html2js']
            },
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: [],
                options: {
                    reload: true
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
    grunt.registerTask('build', ['clean:build', 'copy:build', 'html2js',         'browserify',  'less:build', 'index:build']);
    grunt.registerTask('dist',  ['clean:dist',  'copy:dist',  'concat', 'ngAnnotate', 'uglify', 'less:dist',  'index:dist', 'karma:unit:run']);

    function filterForExtension(extension, files, dir) {
        var extRegExp = new RegExp('\\.' + extension + '$'),
            dirRegExp = new RegExp(
                '^(' + grunt.config('build_dir') + '|'
                     + grunt.config('dist_dir') + ')\/',
                'g'
            )
        ;

        return files.filter(function (file) {
            return file.match(extRegExp);
        }).map(function (file) {
            return file.replace(dirRegExp, '');
        });
    }

    grunt.registerMultiTask('index', 'Process index.html template', function () {
        var  jsFiles = filterForExtension('js',  this.filesSrc),
            cssFiles = filterForExtension('css', this.filesSrc);

        //grunt.log.writeln(cssFiles);

        grunt.file.copy('src/index.html', this.data.dir + '/index.html', {
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