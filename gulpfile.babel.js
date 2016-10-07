'use strict';

import gulp from 'gulp';
import path from 'path';
import browserSync from 'browser-sync';
import contac from 'gulp-concat';
import eslint from 'gulp-eslint';
import filter from 'gulp-filter';
import less from 'gulp-less';
import css from 'gulp-css';
import rev from 'gulp-rev';
import revReplace from 'gulp-rev-replace';
import uglify from 'gulp-uglify';
import csso from 'gulp-csso';
import useref from 'gulp-useref';
import clean from 'gulp-clean';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';
import watchify from 'watchify';

const reload = browserSync.reload;

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
  gulp.src('./src/img/favicon.png')
    .pipe(gulp.dest('./public'));
});

gulp.task('less', function () {
  return gulp.src('./src/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('.tmp/css'));
});

gulp.task('index', ['less'], function() {
  var jsFilter = filter('public/app.jsx', { restore: true });
  var cssFilter = filter(['src/**/*.css', '.tmp/css/**/*.css'], { restore: true });
  var indexHtmlFilter = filter(['src/**/*', '!**/index.html'], { restore: true });

  return gulp.src('src/index.html')
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
  return gulp.src('./public', {read: false})
    .pipe(clean({force: true}));
});

// Watch JS/JSX and Sass files
gulp.task('watch', function() {
  gulp.watch('src/**/*.{js,jsx,html}', ['jsx', 'index']);
  gulp.watch('src/less/**/*.less', ['less', 'index']);
  gulp.watch('src/css/**/*.css', ['index']);
  gulp.watch('src/img/**/*.{png,jpg}', ['img']);
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

gulp.task('build', [ 'less', 'img', 'jsx', 'index']);
gulp.task('default', ['build', 'browsersync', 'watch']);
