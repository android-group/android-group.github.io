module.exports = function(grunt){
	grunt.initConfig({
		uglify: {
			dist: {
  			options: {
    			banner: '/*Created at <%= grunt.template.today("dd-mm-yyyy") %> */\n'
  			},
  		
    		files: {
      			'statac/css/horizontal.min.css': ['statac/css/horizontal.css']
   				}
  			}
		},

		watch: {
			options:{
				livereload: false
			}
		}

	});


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-newer');

	grunt.registerTask('default', [uglify]);
}