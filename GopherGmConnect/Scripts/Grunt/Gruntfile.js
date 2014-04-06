module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            style: {
                files: {
                    "../../Content/less/compiled/styles.css": "../../Content/**/*.less"
                }
            }
        },

        emberTemplates: {
            compile: {
                options: {        
                    templateBasePath: '../ember/templates/'
                },
                files: {
                    "../ember/templates/templates.js": ['../ember/templates/**/*.hbs'],
                }
            }
        },

        watch: {
            emberTemplates: {
                files: '../ember/templates/**/*.hbs',
                tasks: ['emberTemplates']
            },
            css: {
                files: ['../../Content/less/**/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true,
                }
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['emberTemplates', 'css']);

};