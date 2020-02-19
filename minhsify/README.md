# Overview

This kit is used to develop Front End pages based on Bootstrap. It has all essential tools for building seamless, cross-platform and responsive web pages.

## Technologies used

![HTML5](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/html-64.png)&nbsp;&nbsp;![CSS3](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/css-64.png)&nbsp;&nbsp;![Node](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/nodejs-64.png)&nbsp;&nbsp;![Bootstrap](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/boostrap-64.png)&nbsp;&nbsp;![SASS](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/sass-64.png)&nbsp;&nbsp;![jQuery](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/jquery-64.png)

## Features

| Feature | Summary |
| --- | --- |
| Yarn Scripts | Workflow for this boilerplate is based on Damon Bauer's article: [Why NPM Scripts?](https://css-tricks.com/why-npm-scripts). Generate, minify and concatenate JavaScript, HTML, CSS, Images, Icons using one command to help keep your workflow straightforward. Run `yarn` to install dependencies, `yarn dev` to start development and `yarn build` to build assets.
| PUG | Supported [PUG](https://pugjs.org/api/getting-started.html) to generate HTML pages on the fly. Please use the following tool to convert HTML code to PUG: [PUG Converter](https://hadijaveed.github.io/All-Convertors).
| Responsive | A responsive starter kit optimized for many devices and screens. Powered by [Bootstrap](http://getbootstrap.com).
| SCSS | Compile SCSS into CSS, bringing support for variables, mixins and more.
| HTML Linting | HTML Linting is provided using [HTML Inspector](https://cdnjs.cloudflare.com/ajax/libs/html-inspector/0.8.2/html-inspector.js). Please check your Browser console for HTML based errors.
| SCSS Linting | SCSS Linting is provided using [Stylelint](https://yarnpkg.com/en/package/stylelint).
| JavaScript Linting | JavaScript Linting is done using [ESLint](https://eslint.org). [ECMAScript 2015](http://babeljs.io/learn-es2015) standard is used to write core script file. [Uglify-JS](https://yarnpkg.com/en/package/uglify-js) is used to compress core script file.
| Bootstrap Linting | Bootstrap Linting is provided using [Bootlint](https://yarnpkg.com/en/package/bootlint).
| Cross Device Sync | [BrowserSync](https://www.browsersync.io) server for viewing your site locally while you develop.
| Image Compression | [Imagemin-CLI](https://yarnpkg.com/en/package/imagemin-cli) is used to compress JPG, PNG and GIF files.
| Yarn | Use [Yarn](https://yarnpkg.com/en/) to install and run dependencies. Please install Yarn on your platform using this [link](https://yarnpkg.com/en/docs/install).
| Addons | [FontAwesome](http://fontawesome.io/icons), [Real Favicon](http://realfavicongenerator.net), [jQuery](http://jquery.com) libraries included with this boilerplate.
| SVG Sprites | You can disable generation of `sprite.svg` by removing `yarn run sprites` from `svgs` script.
| Audio/Video | Recommended Usage of [MediaElement.js](https://www.mediaelementjs.com/) for cross browser player rendering.

## FAQS

#### 1. What are the steps to clone and run this boilerplate?

1.  Create a new directory on your machine: `mkdir ~/Desktop/my-app`.
2.  Open the directory using terminal: `cd my-app`.
3.  Clone this repository: `git clone https://github.com/tpkahlon/minhsify.git .`.
4.  Run: `yarn && yarn dev`.

#### 3. How to store additional assets related to this application?
Use `media`  directory.

#### 5. What additional steps to take into consideration when coding an application using this kit?
1.  Please use `https://` protocol for any third-party library/resource included in `default.pug`. Please follow this approach while importing Google fonts in `style.scss`.
2.  Please use HTTP2 `defer` or `async` attributes when you want to load scripts in document's `head`.
3.  Preload assets in the `default.pug` file. See the following link: [Mozilla: Preload](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).

#### 6. Are there any tricks to speed up development process?
Use `yarn run bs` to quickly fetch and see Bootstrap SCSS variables under `app/sass` location. Use `yarn run bsx` to remove that fetched file.
