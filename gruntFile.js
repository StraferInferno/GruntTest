module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint:{
    	files:['*.js', '!gruntFile.js'],
    	options:{
    		"curly":true,
    		"eqnull": true,
    		"eqeqeq": true,
    		"undef" : true,
    		"globals": {
    		  "jQuery":true
    		}
    	}
    },
    less:{
    	all:{
    		options:{

    		},
    		files:{
    			"./styles.css": "./styles.less"
    		}
    	}
    },
    watch:{
    	scripts:{
    		files:['**/*.js'],
    		tasks:['jshint'],
    		options:{
    			spawn:false
    		}
    	},
    	less:{
    		files:['**/*.less'],
    		tasks:['less'],
    		options:{
    			spawn:false
    		}
    	}
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['jshint','less','watch']);
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
};