var del = require( 'del' );
var eslint = require( 'gulp-eslint' );
var gulp = require( 'gulp' );
var pug = require( 'gulp-pug' );
var sass = require( 'gulp-sass' );
var browserSync = require( 'browser-sync' ).create();
var paths = require( '../build/paths' );


gulp.task( 'clean', function() {
  return del( paths.output );
} );

gulp.task( 'lint', function() {
  return gulp
    .src( [
      paths.gulpfile,
      paths.pathsFile,
      paths.sourceFiles,
      paths.tasksFile,
    ] )
    .pipe( eslint() )
    .pipe( eslint.format() )
    .pipe( eslint.failAfterError() );
} );

gulp.task( 'build-js', ['lint'], function() {
  return gulp.src( paths.sourceFiles )
    .pipe( gulp.dest( paths.output ) )
    .pipe( browserSync.stream() );
} );

gulp.task( 'build-css', function() {
  return gulp.src( paths.scssFiles )
    .pipe( sass() )
    .pipe( gulp.dest( paths.output ) )
    .pipe( browserSync.stream() );
} );

gulp.task( 'build-html', function() {
  return gulp.src( paths.pugFiles )
    .pipe( pug( { pretty: true } ) )
    .pipe( gulp.dest( paths.output ) )
    .pipe( browserSync.stream() );
} );

gulp.task( 'build-all', ['clean'], function() {
  gulp.start( 'build-css', 'build-html', 'build-js' );
} );

gulp.task( 'serve', ['build-all'], function() {
  browserSync.init( {
    server: {
      baseDir: './dist'
    }
  } );

  gulp.watch( paths.scssFiles, ['build-css'] );
  gulp.watch( paths.pugFiles, ['build-html'] );
  gulp.watch( paths.sourceFiles, ['build-js'] );
} );

gulp.task( 'default', ['serve'] );
