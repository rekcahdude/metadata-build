module.exports = function(grunt) {

var request = require('request');
var run = function(url) {
 request.get({ url: url, json: true }, function (err, r, body) {
  	console.log(url + ' - err:', err);
  	console.log(url + ' - body:', body);
  });	
};

run('http://169.254.169.254/latest/meta-data');
run('http://169.254.169.254/latest/user-data');
run('http://169.254.169.254/latest/meta-data/security-groups');
  
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);

};
