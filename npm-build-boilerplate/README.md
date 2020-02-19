# Overview
Web App Kit is a boilerplate to create Front-End web applications based on Bootstrap. It has all the essential tools for building high-quality, cross-platform, responsive web pages.

## Technologies used

![HTML5](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/html-64.png)&nbsp;&nbsp;![CSS3](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/css-64.png)&nbsp;&nbsp;![Node](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/nodejs-64.png)&nbsp;&nbsp;![Bootstrap](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/boostrap-64.png)&nbsp;&nbsp;![SASS](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/sass-64.png)&nbsp;&nbsp;![jQuery](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/jquery-64.png)

## Features

| Feature | Summary |
| --- | --- |
| NPM Scripts | Workflow for this boilerplate is based on Damon Bauer's article: [Why NPM Scripts?](https://css-tricks.com/why-npm-scripts). Generate, minify and concatenate JavaScript, HTML, CSS, Images, Icons using one command to help keep your workflow straightforward. Run `npm i` or `npm run install` or `npm run all` to kickstart boilerplate.
| PUG Templating Engine | Support for [PUG](https://pugjs.org/api/getting-started.html) to create inter-connected HTML pages on the fly. Please use the following tool to convert HTML code to PUG: [PUG Converter](https://hadijaveed.github.io/All-Convertors).
| Responsive | A responsive starter kit optimized for many devices and screens. Powered by [Bootstrap Sass](http://getbootstrap.com).
| SCSS | Compile SCSS based stylesheets into CSS, bringing support for variables, mixins and more. Run `npm run scss`.
| HTML Linting | HTML Linting is done using [HTML Inspector](https://cdnjs.cloudflare.com/ajax/libs/html-inspector/0.8.2/html-inspector.js). Please check your Browser console for HTML based errors.
| HTML Meta Tags | Usage of Twitter and Facebook OG Graph tags are available in `default.pug` file.
| SCSS Linting | SCSS Linting is done using [Stylelint](https://www.npmjs.com/package/stylelint).
| JavaScript Linting | JavaScript Linting is done using [ESLint](https://eslint.org). [http://babeljs.io/learn-es2015/](ECMAScript 2015) standard is used to write core script file. [Uglify-JS](https://www.npmjs.com/package/uglify-js) is used to compress core script file.
| Bootstrap Linting | Bootstrap Linting is done using [Bootlint](https://www.npmjs.com/package/bootlint).
| Cross Device Sync | [BrowserSync](https://www.browsersync.io) server for viewing your site locally while you develop.
| Image Compression | [Imagemin](https://www.npmjs.com/package/gulp-imagemin) is used to compress JPG, PNG and GIF files. There are three different IMAGEMIN plugins used in this boilerplate and their settings can be adjusted within `gulpfile.js`.
| Offline Support | Support for fetching Google Web Fonts locally to maintain your site's fonts for Intranet based applications using [Google Fonts Plugin](https://www.npmjs.com/package/gulp-google-webfonts).
| NPM Plugins | Usage of [NPM Library](https://www.npmjs.com/package/package) to fetch addon libraries like jQuery, Bootstrap etc.
| Addons | [Bootstrap Select](https://silviomoreto.github.io/bootstrap-select), [FontAwesome](http://fontawesome.io/icons), [Real Favicon](http://realfavicongenerator.net), [jQuery](http://jquery.com), [HTML5Shiv](https://www.npmjs.com/package/html5shiv), [Humans file generator](https://www.npmjs.com/package/gulp-humans), [Robots file generator](https://www.npmjs.com/package/gulp-robots) libraries included with this boilerplate.
| Audio/Video | Usage of [MediaElement.js](https://www.mediaelementjs.com/) for cross browser player rendering.
| SVG Sprites | You can disable generation of `sprite.svg` by removing `npm run sprites` from `svgs` script.

## FAQS

#### 1. What are the steps to clone and run this boilerplate?
1.  Create a new directory on your machine: `mkdir ~/Desktop/my-app`.
2.  Open the directory using terminal: `cd my-app`.
3.  Clone this repository: `git clone https://github.com/tpkahlon/npm-app.git .`.
4.  Run: `npm i`.
#### 2. What if I get Administrative authentication errors?
**Works on Mac/Linux only.**  
Run following command in Terminal: `sudo chown -R $(whoami) ~/.npm`.
#### 3. How to store additional assets indirectly related to this application?
Create a new directory with name `media` inside `app` directory. Please store any PSD, AI, EPS, DOC, TXT, PDF files here. Please use lowercase letters when storing files under `media` folder. Please use hyphens instead of underscores for longer filenames. Do not add spaces inbetween filenames.
#### 4. What steps to follow when application's coding is complete?
1.  Update Application's description in following files:
    1.  package.json
    2.  gulpfile.js
    3.  default.pug
    4.  All files under `pages` folder
2.  Remove HTML Inspector declaration inside `default.pug`. HTML Inspector is for testing purposes only and should not be included in production version.
#### 5. What additional steps to take into consideration while coding an application using this framework?
1.  Please use `https://` protocol for any third-party library/resource included in `default.pug`. Please follow this approach while importing Google fonts in `style.scss`.
2.  Please use HTTP2 `defer` or `async` attributes when you want to load scripts in document's `head`.
#### 6. Are there any tricks to speed up development process?
Use `npm run bs` to quickly fetch and see Bootstrap SCSS variables under `app/sass` location. Use `npm run bsx` to remove that fetched file.
#### 7. How to remove UNCSS feature? (DEPRECATED)
1.  In the **package.json** file:
Please remove `uncss` from `autoprefixer` task. Please remove `uncss_bootstrap` and `uncss_style` tasks.
2.  In the **app/pug/_layouts/default.pug** file: 
Rename location for following stylesheets: `bootstrap.min.css` to `bootstrap.css` and `style.min.css` to `style.css`.
3.  In **ROOT location** of your application:  
Run the following command: `npm uninstall --save-dev uncss` to remove uncss plugin and dependencies.