'use strict';

var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var concat       = require('gulp-concat');
var eslint       = require('gulp-eslint');
var filter       = require('gulp-filter');
var reload       = browserSync.reload;
var css          = require('gulp-css');
var rev          = require('gulp-rev');
var revReplace   = require('gulp-rev-replace');
var uglify       = require('gulp-uglify');
var csso         = require('gulp-csso');
var useref       = require('gulp-useref');
var clean        = require('gulp-clean');
var babelify     = require('babelify');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');
var sourcemaps   = require('gulp-sourcemaps');
var browserify   = require('browserify');
var watchify     = require('watchify');


// Lint JS/JSX files
gulp.task('eslint', function() {
  return gulp.src('src/**/*.js*')
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

gulp.task('jsx', ['eslint'], function() {
    var b =  watchify(
    browserify({
      entries: ['./src/app.jsx'],
      debug: true,
      extensions: [' ', 'js', 'jsx']
    })
    .transform(babelify.configure({
      presets: ["es2015", 'react']
    })))
    return b.bundle()
    .on('error', function(err) { console.error(err); this.emit('end'); })
    .pipe(source('app.jsx'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    // .pipe(uglify())
    .pipe(gulp.dest('./public'));
});

gulp.task('img', function() {
  gulp.src('./src/img/*')
    .pipe(gulp.dest('./public/img'));
  gulp.src('./src/img/favicon.ico')
    .pipe(gulp.dest('./public'));
});

gulp.task("index", function() {
  var jsFilter = filter("public/app.jsx", { restore: true });
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
  gulp.watch('src/**/*.{js,jsx,html}', ['jsx', 'index']);
  gulp.watch('css/**/*.css', ['css']);
  gulp.watch('img/**/*.{png,jpg}', ['img']);
});

// BrowserSync
gulp.task('browsersync', function() {
  browserSync({
    server: {
      baseDir: './public'
    },
    port: 5000,
    open: false,
    online: false,
    notify: false,
  });
});

gulp.task('build', ['jsx', 'index', 'img']);
gulp.task('default', ['build', 'browsersync', 'watch']);
