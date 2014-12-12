module.exports = function(grunt) {
grunt.initConfig({
  uglify: {
    main: {
      files: {
        'indiesocial.min.js': [
          'indiesocial.js'
        ]
      }
    }
  },
  fontello: {
    dist: {
      options: {
          config  : 'fontello.json',
          fonts   : 'font',
          styles  : 'css',
          force   : true
      }
    }
  },
  'gh-pages': {
    src: ['index.html', 'indiesocial.min.js', 'font/*', 'css/fontello.css', 'css/fontello-ie7.css']
  },
  jshint: {
    all: ['Gruntfile.js', 'indiesocial.js']
  },
  jsonlint: {
    all: {
      src: [ '*.json' ]
    }
  },
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-fontello');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-gh-pages');
grunt.loadNpmTasks('grunt-jsonlint');

grunt.registerTask('default', [ 'fontello', 'uglify' ]);
grunt.registerTask('test', [ 'jsonlint', 'jshint' ]);
};
