module.exports = function (grunt) {

    grunt.initConfig({
        clean: {
            css: ['../src/main/resources/static/static/**'],
            static: ['../src/main/resources/static/*'],
            options: {
                force: true
            }
        },
        copy: {
            main: {
                files: [
                    // makes all src relative to cwd
                    {expand: true, cwd: 'build/', src: ['**', '!**index.html**'], dest: '../src/main/resources/static/'},
                    // makes all src relative to cwd
                    {expand: true, cwd: 'build/', src: ['index.html'], dest: '../src/main/resources/templates/', isFile: true}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['clean', 'copy']);

};
