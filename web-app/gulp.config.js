module.exports = function() {
    var config = {
        // Root locations
        dist: './dist',
        app: './app',
        js: './dist/js/**/*.js',
        pug: [
          './app/pug/*.pug'
        ],
        pugAll: [
          './app/pug/**/*.pug'
        ],
        // Locations
        script: [
            './app/js/custom.js'
        ],
        vendorJS: [
            './bower_components/html5shiv/dist/html5shiv.min.js',
            './app/js/respond.min.js',
            './app/js/modernizr.min.js',
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/jquery-ui/jquery-ui.min.js',
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
            './bower_components/bootstrap-select/js/bootstrap-select.js',
            './bower_components/typeahead.js/dist/bloodhound.min.js',
            './bower_components/typeahead.js/dist/typeahead.bundle.min.js',
						'./bower_components/filament-tablesaw/dist/tablesaw.js',
						'./bower_components/filament-tablesaw/dist/tablesaw-init.js'
        ],
        vendorCSS: [
            './bower_components/bootstrap-select/dist/css/bootstrap-select.min.css',
            './bower_components/filament-tablesaw/dist/tablesaw.css'
        ],
        // ./app Locations
        css: './dist/css',
        images: [
            './app/images/**/*.+(png|jpg|jpeg|gif|svg)',
            '!' + './app/images/master_picture.png'
        ],
        sass: './app/sass/**/*.scss',
        // Fonts Locations
        fonts: [
            './bower_components/font-awesome/fonts/**/*.*',
            './bower_components/bootstrap-sass/assets/fonts/bootstrap/**/*.*'
        ]
    };
    return config;
};
