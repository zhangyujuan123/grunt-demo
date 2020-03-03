module.exports = function (grunt) {
  grunt.initConfig({
    // cssmin:{
    //   'rectangle.min.css':'rectangle.css'
    // }
    uglify:{
      'rectangle.min.js':'rectangle.js'
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.registerTask('default', ['cssmin']);
};