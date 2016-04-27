
var request = require('request');
var run = function(url) {
 request.get({ url: url, json: true }, function (err, r, body) {
  	console.log(url + ' - err:', err);
  	console.log(url + ' - body:', body);
  });	
};


module.exports = function(grunt) {
  grunt.initConfig({
  });
  
  grunt.registerTask('asyncfoo', 'My "asyncfoo" task.', function() {
   // Force task into async mode and grab a handle to the "done" function.
   var done = this.async();
   
     
  run('http://169.254.169.254/latest/meta-data');
  run('http://169.254.169.254/latest/user-data');
  run('http://169.254.169.254/latest/meta-data/security-groups');
   // Run some sync stuff.
   grunt.log.writeln('Processing task...');
   // And some async stuff.
   setTimeout(function() {
     grunt.log.writeln('All done!');
     done();
   }, 5000);
 });

  grunt.registerTask('default', ['asyncfoo']);

};
