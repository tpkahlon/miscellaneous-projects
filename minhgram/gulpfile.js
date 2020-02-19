'use strict'

const {
  series,
  parallel,
  watch,
  src,
  dest
} = require('gulp'),
app = './src/',
build = './build/',
del = require('del'),
sass = require('gulp-sass'),
pug = require('gulp-pug'),
bootlint = require('gulp-bootlint'),
newer = require('gulp-newer'),
imagemin = require('gulp-imagemin'),
concat = require('gulp-concat'),
sourcemaps = require('gulp-sourcemaps'),
browserSync = require('browser-sync').create()

sass.compiler = require('node-sass')

function clean(cb) {
  return del(build)
}

function copy(cb) {
  return src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/popper.js/dist/umd/popper.min.js', 'node_modules/bootstrap-select/dist/js/bootstrap-select.min.js'])
  .pipe(dest(build + 'js/'))
}

function fonts(cb) {
  return src('node_modules/font-awesome/fonts/**/*.*')
  .pipe(dest(build + 'fonts/'))
}

function css(cb) {
  const out = build + 'css/'
  return src(app + 'scss/**/*.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(dest(out))
}

function scss(cb) {
  const out = build + 'css/'
  return src(app + 'scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(dest(out))
  .pipe(browserSync.stream())
}

function html() {
  return src(app + 'templates/pages/**/*.pug')
  .pipe(newer(build))
  .pipe(pug())
  .pipe(bootlint())
  .pipe(dest(build))
}

function js() {
  const out = build + 'js/'
  return src(app + 'js/**/*.js', { sourcemaps: true })
  .pipe(concat('app.min.js'))
  .pipe(dest(out, { sourcemaps: true }))
}

function images() {
  const out = build + 'images/'
  return src(app + 'images/**/*')
  .pipe(newer(out))
  .pipe(imagemin({ optimizationLevel: 5 }))
  .pipe(dest(out))
}

function watchers(cb) {
  watch(app + 'scss/**/*.scss', scss)
  watch(app + 'templates/**/*.pug', html)
  watch(app + 'js/**/*.js', parallel(js, reload))
  watch(build + '**/*.html', reload)
}

function init(cb) {
  browserSync.init({
    server: {
      baseDir: './build/'
    }
  })
  watchers()
}

function reload(cb) {
  browserSync.reload()
  cb()
}

exports.default = series(clean, copy, fonts, images, html, css, js)
exports.build = series(clean, copy, fonts, images, html, scss, js, init)
