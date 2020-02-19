/*

Table of Content:
1. Variables Declaration
2. Task - Download Google Fonts locally
3. Task - PUG to HTML Rendering
4. Task - Sass to CSS Rendering
5. Task - Combine Vendor Stylesheets
6. Task - Compile Javascript
7. Task - Combine Javascript from Bower packages
8. Task - Compress Images
9. Task - Copy Fonts from NPM/Bower
10. Tasks - Generate Favicon
11. Tasks - Clean before Primary tasks execute
12. BUILD Task
13. DEFAULT Task
14. Function to colorize console alerts
15. Function to delete files
16. Function to display error alerts

*/

'use strict';

// 1. Variables Declaration
var gulp = require('gulp'),
    options = {},
    fs = require('fs'),
    del = require('del'),
    argv = require('yargs').argv,
    config = require('./gulp.config')(),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    pngquant = require('imagemin-pngquant'),
    realFavicon = require('gulp-real-favicon'),
    FAVICON_DATA_FILE = 'dist/faviconData.json',
    googleWebFonts = require('gulp-google-webfonts'),
    $ = require('gulp-load-plugins')({
        lazy: true
    });

// 2. Task - Download Google Fonts locally
gulp.task('google-fonts', function() {
    return gulp.src('./fonts.list')
        .pipe(googleWebFonts(options))
        .pipe(gulp.dest(config.dist + '/fonts'));
});

// 3. Task - PUG to HTML Rendering
gulp.task('pug', function() {
    return gulp.src(config.pug)
        .on('error', onErrorMsg)
        .pipe($.pug({
          pretty: true
        }))
        .on('error', onErrorMsg)
        .pipe($.bootlint())
        .pipe($.if(argv.production, $.htmlmin({collapseWhitespace: true})))
        .pipe($.size({title: '************ FILE SIZE: HTMLs ****'}))
        .pipe(gulp.dest(config.dist))
        .on('finish', browserSync.reload);
});

gulp.task('html', ['robots'], function() {
  gulp.src('./dist/*.html', {
    read: false
  })
  .pipe($.save('before-sitemap'))
  .pipe($.sitemap({
    siteUrl: 'http://localhost:3000'
  })) // Returns sitemap.xml
  .pipe(gulp.dest('./dist'))
  .pipe($.save.restore('before-sitemap')); //restore all files to the state when we cached them
});

gulp.task('robots', function () {
    gulp.src('./dist/index.html')
        .pipe($.robots({
            useragent: '*',
            // allow: ['folder1/', 'folder2/'],
            disallow: ['cgi-bin/']
        }))
        .pipe(gulp.dest('./dist'));
});

// 4. Task - Sass to CSS Rendering
gulp.task('sass', ['clean-sass', 'vendor-styles'], function() {
    return gulp.src(config.sass)
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.if(argv.production, $.sass({
          style: 'compressed'
        }).on('error', $.sass.logError)))
        .pipe($.size({title: '************ FILE SIZE: Styles (before) ****'}))
        // .pipe($.if(argv.production, $.sourcemaps.init()))
        .pipe($.if(argv.production, $.cssnano()))
        .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
        // .pipe($.if(argv.production, $.sourcemaps.write()))
        .pipe($.size({title: '************ FILE SIZE: Styles (after) ****'}))
        .pipe(gulp.dest(config.css))
        .pipe(browserSync.stream({ stream: true }));
});

// 5. Task - Combine Vendor Stylesheets
gulp.task('vendor-styles', function() {
    return gulp.src(config.vendorCSS)
        .pipe(gulp.dest(config.dist + '/css'));
});

// 6. Task - Compile Javascript
gulp.task('script', ['clean-scripts', 'vendor-scripts'], function() {
    return gulp.src(config.script)
        .pipe($.plumber())
        // .pipe($.sourcemaps.init())
        .pipe($.if(argv.production, $.uglify()))
        // .pipe($.sourcemaps.write('.'))
        .pipe($.size({title: '************ FILE SIZE: Scripts (after) ****'}))
        .pipe(gulp.dest(config.dist + '/js'))
        .pipe(browserSync.stream({ stream: true }));
});

// 7. Task - Combine Javascript from Bower packages
gulp.task('vendor-scripts', function() {
    return gulp.src(config.vendorJS)
        .pipe($.size({title: '************ FILE SIZE: Vendor Scripts ****'}))
        .pipe(gulp.dest(config.dist + '/js'));
});

// 8. Task - Compress Images
gulp.task('images', ['clean-images'], function() {
    return gulp.src(config.images)
        .pipe($.cache($.imagemin()))
        .pipe($.size({title: '************ FILE SIZE: Images ****'}))
        .pipe(gulp.dest(config.dist + '/images'));
});

// 9. Task - Copy Fonts from NPM/Bower
gulp.task('fonts', ['clean-fonts'], function() {
    return gulp.src(config.fonts)
        .pipe($.size({title: '************ FILE SIZE: Fonts ****'}))
        .pipe(gulp.dest(config.dist + '/fonts'));
});

// 10. Tasks - Generate Favicon
gulp.task('generate-favicon', function(done) {
    realFavicon.generateFavicon({
        masterPicture: './app/images/master_picture.png',
        dest: './dist/images/icons',
        iconsPath: './dist/images/icons',
        design: {
            ios: {
                pictureAspect: 'backgroundAndMargin',
                backgroundColor: '#ffffff',
                margin: '25%',
                appName: 'Test'
            },
            desktopBrowser: {},
            windows: {
                pictureAspect: 'whiteSilhouette',
                backgroundColor: '#43BCCD',
                onConflict: 'override',
                appName: 'Test'
            },
            androidChrome: {
                pictureAspect: 'noChange',
                themeColor: '#ffffff',
                manifest: {
                    name: 'Application',
                    display: 'browser',
                    orientation: 'notSet',
                    onConflict: 'override',
                    declared: true
                }
            },
            safariPinnedTab: {
                pictureAspect: 'silhouette',
                themeColor: '#43BCCD'
            }
        },
        settings: {
            compression: 3,
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false
        },
        versioning: {
            paramName: 'v',
            paramValue: 'kPPybMdXj4'
        },
        markupFile: FAVICON_DATA_FILE
    }, function() {
        done();
    });
});
gulp.task('inject-favicon-markups', function() {
    gulp.src(['./dist/*.html'])
        .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
        .pipe(gulp.dest('./dist'));
});
gulp.task('check-for-favicon-update', function(done) {
    var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
    realFavicon.checkForUpdates(currentVersion, function(err) {
        if (err) {
            throw err;
        }
    });
});

// 11. Tasks - Clean before Primary tasks execute
gulp.task('clean-pug', function() {
    var files = config.dist + '/*.html';
    clean(files);
});
gulp.task('clean-images', function() {
    var files = config.dist + '/images';
    clean(files);
});
gulp.task('clean-dist', function() {
    var files = config.dist;
    clean(files);
});
gulp.task('clean-sass', function() {
    var files = config.css;
    clean(files);
});
gulp.task('clean-scripts', function() {
    var files = config.dist + '/js';
    clean(files);
});
gulp.task('clean-fonts', function() {
    var files = config.dist + '/fonts';
    clean(files);
});

// 12. BUILD Task
gulp.task('build', function(cb) {
    runSequence('clean-dist', 'pug', 'html', 'fonts', 'sass', 'script', 'images', 'google-fonts', 'generate-favicon', cb);
});

// 13. DEFAULT Task
gulp.task('default', ['build'], function() {
    browserSync({
        open: true,
        injectChanges: true,
        server: {
            baseDir: './dist'
        },
        watchOptions: {
            debounceDelay: 1000
        }
    });
    gulp.watch(config.sass, ['sass']);
    gulp.watch(config.fonts, ['fonts', browserSync.reload]);
    gulp.watch(config.script, ['script']);
    gulp.watch(config.images, ['images', browserSync.reload]);
    gulp.watch(config.pugAll, ['pug']);
});

// 14. Function to delete files
function clean(path) {
    del.sync(path);
}

// 15. Function to console errors
function onErrorMsg(error) {
    console.log(error.toString());
    this.emit('end');
}
