/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  
    coffee: {
      options: {
        bare: true
      },
      glob_to_multiple: {
        expand: true,
        cwd: 'static/scripts/apps',
        src: ['**/*.coffee'],
        dest: 'static/scripts/appsJS',
        ext: '.js'
      }
    },

    less: {
        all: {
            src: 'static/less/main.less',
            dest: 'static/css/main.css'
        }
    },
	copy: {
	  html: {
		files: [
		  {expand: true, cwd: 'static/scripts/apps/', src: ['**/*html'], dest: 'static/scripts/appsJS/'}
		]
	  },
	  js: {
		files: [
		  {expand: true, cwd: 'static/scripts/apps/', src: ['**/*js'], dest: 'static/scripts/appsJS/'}
		]
	  }
	},
    watch: {
	  htmltemplates: {
		files: ['static/scripts/apps/**/*.html'],
        tasks: ['copy:html']
	  },
	  js: {
        files: ['static/scripts/apps/**/*.js'],
        tasks: ['copy:js']
      },
      coffescript: {
        files: ['static/scripts/apps/**/*.coffee'],
        tasks: ['coffee']
      },
      less: {
        files: ['static/less/main.less'],
        tasks: ['less']
      } 
    },
    rjsConfig: grunt.file.readJSON('static/scripts/app.build.js'),
    requirejs: {
      compile: {
        options: "<%=rjsConfig%>"
      }
    }
  });

  // These plugins provide necessary tasks.  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  //grunt.loadNpmTasks('grunt-testacular');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  // Default task.
  grunt.registerTask('default', ['coffee', 'less', 'copy', 'watch']);
  
  grunt.registerTask('REQUIRE', ['coffee', 'less', 'copy', 'requirejs']);
};
