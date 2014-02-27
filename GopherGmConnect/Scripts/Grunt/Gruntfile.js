module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ember-templates');
    // Default task(s).
    grunt.registerTask('default', ['emberTemplates']);

};