'use strict';

var gulp         = require('gulp');
var babel        = require('gulp-babel');
var browserSync  = require('browser-sync');
var concat       = require('gulp-concat');
var eslint       = require('gulp-eslint');
var filter       = require('gulp-filter');
var newer        = require('gulp-newer');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var reload       = browserSync.reload;
var css          = require('gulp-css');
var sourcemaps   = require('gulp-sourcemaps');
var rev          = require('gulp-rev');
var revReplace   = require('gulp-rev-replace');
var uglify       = require('gulp-uglify');
var csso         = require('gulp-csso');
var useref       = require('gulp-useref');
var clean        = require('gulp-clean');
var babelify = require('babelify');
var source = require('vinyl-source-stream');


var onError = function(err) {
  notify.onError({
    title:    "Error",
    message:  "<%= error %>",
  })(err);
  this.emit('end');
};

var plumberOptions = {
  errorHandler: onError,
};

var jsFiles = {
  vendor: [

  ],
  source: [
    'src/components/**/*.js',
    'src/components/**/*.jsx',
  ]
};

// Lint JS/JSX files
gulp.task('eslint', function() {
  return gulp.src(jsFiles.source)
    .pipe(eslint({
      baseConfig: {
        "parseOptions": {
            "parser":"babel-eslint"
        } 
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Concatenate jsFiles.vendor and jsFiles.source into one JS file.
// Run copy-react and eslint before concatenating
gulp.task('concat', ['eslint'], function() {
  return gulp.src(jsFiles.vendor.concat(jsFiles.source))
    .pipe(sourcemaps.init())
    // .pipe(babel({ presets: ['es2015'] }))
    // .pipe(concat('app.js'))
    browserify({
      entries: 'src/index.js',
      extensions: ['.js'],
      debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    // .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public'));
});

gulp.task("index", function() {
  var jsFilter = filter("src/**/*.js", { restore: true });
  var cssFilter = filter("src/**/*.css", { restore: true });
  var indexHtmlFilter = filter(['src/**/*', '!**/index.html'], { restore: true });

  return gulp.src("src/index.html")
    .pipe(useref())      // Concatenate with gulp-useref
    .pipe(jsFilter)
    .pipe(uglify())             // Minify any javascript sources
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    .pipe(csso())               // Minify any CSS sources
    .pipe(cssFilter.restore)
    .pipe(indexHtmlFilter)
    .pipe(rev())                // Rename the concatenated files (but not index.html)
    .pipe(indexHtmlFilter.restore)
    .pipe(revReplace())         // Substitute in new filenames
    .pipe(gulp.dest('public'));
});

gulp.task('clean', function () {
  return gulp.src('public', {read: false})
    .pipe(clean({force: true}));
});

// Watch JS/JSX and Sass files
gulp.task('watch', function() {
  gulp.watch('src/**/*.{js,jsx,html}', ['concat', 'index']);
  gulp.watch('css/**/*.css', ['css']);
});

// BrowserSync
gulp.task('browsersync', function() {
  browserSync({
    server: {
      baseDir: './public'
    },
    port: 8000,
    open: false,
    online: false,
    notify: false,
  });
});

gulp.task('build', ['concat', 'index']);
gulp.task('default', ['build', 'browsersync', 'watch']);
