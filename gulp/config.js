var dest, src, test, reports, path;

path = require('path');

dest = './dist';
src = './src';
test = './test';
reports = './reports';

module.exports = {
  browserSync: {
    server: {
      baseDir: dest
    }
  },
  browserify: {
    // A separate bundle will be generated for each bundle config in the list below
    bundleConfigs: [{
      entries: src + '/strings.js',
      dest: dest,
      template: src + '/_bundleTemplate.js',
      outputName: 'strings.js',
      require: [],
      external: [],
      standalone: 'strings'
    }]
  },
  production: {
    jsSrc: dest + '/strings.js',
    dest: dest
  },
  karma: {
    configFile: __dirname + '/../karma.conf.js',
    //Browserify plugins
    browserify: {
      debug: true
    },
  },
  linter: {
    files: [ src + '/**/*.js', '!'  + src + '/**/_*.js']
  },
  complexity: {
    files: [ src + '/**/*.js', '!'  + src + '/**/_*.js']
  },
  cleaning: {
    dist: dest,
    reports: reports
  }
};
