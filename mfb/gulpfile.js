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
newer = require('gulp-newer'),
imagemin = require('gulp-imagemin'),
concat = require('gulp-concat'),
sourcemaps = require('gulp-sourcemaps'),
browserSync = require('browser-sync').create()

sass.compiler = require('node-sass')

function clean(cb) {
  return del(build)
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
  return src(app + 'templates/**/*.pug')
  .pipe(newer(build))
  .pipe(pug())
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

exports.default = series(clean, images, html, scss, js)
exports.build = series(clean, images, html, scss, js, init)