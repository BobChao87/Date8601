module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    uglify: {
      options: {
        sourceMap: true,
        sourceMapIncludeSources: true,
      },
      date8601: {
        files: {
          'dist/date8601.js': ['src/date8601.js', 'src/**/*'],
        },
      },
    },
    watch: {
      date8601: {
        files: 'src/**/*',
      },
      grunt: {
        // No tasks, this is to cause self reloading
        file: 'Gruntfile.js',
      },
      npm: {
        file: 'package.json',
        // Maybe a task to install new NPM stuff?
      },
    },
  });

  // grunt.registerTask('');
};
