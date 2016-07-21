module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    var htmlminOptions = {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dist: {
                src: ["dist", ".tmp"]
            }
        },

        replace: {
            html: {
                options: {
                    patterns: [
                        {
                            match: /="bower_components/g,
                            replacement: '="../bower_components'
                        },
                        {
                            match: /="node_modules/g,
                            replacement: '="../node_modules'
                        },
                        {
                            match: /src="app/g,
                            replacement: 'src="../.tmp/app'
                        }
                    ]
                },
                files: [
                    {expand: true, flatten: true, src: ['index.html'], dest: 'dist/'}
                ]
            }
        },

        htmlmin: {
            dist: {
                options: htmlminOptions,
                files: {
                    'dist/index.html': 'dist/index.html'
                }
            }
        },

        ngtemplates: {
            options: {
                htmlmin: htmlminOptions,
                usemin: 'dist/assets/js/app.min.js'
            },
            app: {
                src: 'app/**/*.html',
                dest: '.tmp/assets/js/templates.js'
            }
        },

        sass: {
            dist: {
                options: {
                    loadPath: [
                        'bower_components/bootstrap-sass/assets/stylesheets',
                        'bower_components/font-awesome/scss'
                    ],
                    style: 'expanded'
                },
                files: {
                    'assets/css/main.css': 'assets/scss/main.scss'
                }
            }
        },

        copy: {
            css: {
                expand: true,
                src: 'assets/css/*.css',
                dest: 'dist/'
            },
            images: {
                expand: true,
                src: 'assets/images/**/*',
                dest: 'dist/'
            },
            fonts: {
                expand: true,
                src: 'assets/fonts/**/*',
                dest: 'dist/'
            },
            fonts_bootstrap: {
                expand: true,
                cwd: 'bower_components/bootstrap-sass/assets/',
                src: 'fonts/**/*',
                dest: 'assets/'
            },
            font_awesome: {
                expand: true,
                cwd: 'bower_components/font-awesome/',
                src: 'fonts/**/*',
                dest: 'assets/'
            }
        },

        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: '**/*.js',
                    dest: '.tmp/app'
                }]
            },
            component: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/assets/js',
                    src: '**/*.js',
                    dest: '.tmp/concat/assets/js'
                }]
            }
        },

        useminPrepare: {
            html: 'dist/index.html'
        },

        usemin: {
            html: 'dist/index.html',
            options: {
                dest: 'dist'
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'assets/css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            },
            build: {
                bsFiles: {
                    src: [
                        'dist/assets/css/*.css',
                        'dist/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './dist'
                    }
                }
            }
        },

        watch: {
            sass: {
                files: 'assets/scss/**/*.scss',
                tasks: ['sass']
            }
        },

        ngconstant: {
            options: {
                name: 'app',
                deps: false,
                dest: 'app/constants.js',
                constants: {
                    CONST: grunt.file.readJSON('config.json')
                }
            },
            build: {}
        }
    });

    grunt.registerTask('default', ['debug']);

    grunt.registerTask('copy-fonts', ['copy:fonts_bootstrap', 'copy:font_awesome']);

    grunt.registerTask('debug', [
        'sass',
        'copy-fonts',
        'ngconstant',
        'browserSync:dev',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'sass',
        'replace:html',
        'copy:css',
        'copy:images',
        'copy-fonts',
        'copy:fonts',
        'ngconstant',
        'useminPrepare',
        'ngtemplates',
        'ngAnnotate:app',
        'concat:generated',
        'ngAnnotate:component',
        'uglify:generated',
        'cssmin:generated',
        'usemin'
    ]);

    grunt.registerTask('release', [
        'build',
        'browserSync:build',
        'watch'
    ]);

};