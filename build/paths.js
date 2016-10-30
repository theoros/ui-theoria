var source = 'src/';
var output = 'dist/';

var paths = {
  pathsFile: 'build/paths.js',
  tasksFile: 'build/tasks.js',
  bundleFile: 'scripts.js',
  entryFile: source + 'app.js',
  gulpfile: 'gulpfile.babel.js',
  output: output,
  outputFiles: output + '**/*.js',
  pugFiles: source + '**/*.pug',
  scssFiles: source + '**/*.scss',
  sourceFiles: source + '**/*.js'
};

module.exports = paths;
