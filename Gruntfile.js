/*jslint node: true */
"use strict";

module.exports = function (grunt) {

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        
        /**
        * Less
        */
        less: {
            dev: {
                files: {
                    "build/css-tinter.css": "src/css-tinter.less"
                },
                options: {
                    compress: true
                }
            }
        },
        
        /**
        * Watch
        */
        watch: {
            styles: {
                files: ['src/css-tinter.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Developer
    grunt.registerTask('default', ['less']);
    grunt.registerTask('dev', 'watch');

};