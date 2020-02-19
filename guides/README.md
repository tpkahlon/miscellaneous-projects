# Developer Tools

#### OS requirements: Ubuntu, Windows

## Legacy inspector tools

Live DOM viewer: [Link](https://tinyurl.com/y6opf87s).

Firebug: [Link](https://tinyurl.com/pypkolm).

## Overview

Open a blank page in new tab: `about:blank`

Keyboard shortcut to open Developer tools: `F12`

All tabs in Developer tools can be positioned differently using drag option.

Press and hold `Alt` key to expand/collapse subtree of a node.

Press `Esc` key to toggle console window in any Tab.

## Styles

Press and toggle `H` key to view/hide a node.

## History

Press and enter `$0` to get selected node in console.

## Audits

Web page test: [Link](https://tinyurl.com/j65r8qc).

Webhint.io: [Link](https://tinyurl.com/yappnkw4).

## References

Check advanced developer settings in browser: `about:config`

Firefox developer tools: [Link](https://tinyurl.com/9bmrg4s).

Download Firefox developer edition: [Link](https://tinyurl.com/yxvj43cc).

# JSON

JSON (known as JavaScript Object Notation) is a data representation format. Other alternatives include XML, Yaml etc, see references.

JSON is used across the web whenever we try to access any APIs. It is also used to store properties in form of a config file.

It is lightweight as file sizes tend to remain smaller. It is easy to read or write unlike XML where code gets confusing due to opening and closing numerous tags.

JSON is subset of JavaScript. Anything written inside JSON is valid JavaScript.

JSON files work well with other programming languages as it is easier to parse and collect objects from it.

## Data types in a JSON file

**String**: Any literal word, sentence or paragraph.

**Number**: A positive number, negative number, decimal number or number with scientific notation.

**Boolean**: True or false value.

**Null**: Null means nothing or no value.

**Array**: It can be an array of items which can be of any literal data type or contain nested arrays.

**Object**: It can be in a form of key-value paired items.

| Type | Examples |
| ---  | ---      |
| Strings | "Arsenal", "Robert van Pires" |
| Numbers | 100, 100.100, -100, 10e2 |
| Boolean | true or false |
| Null | null |
| Array | [1], [1, "Arsenal", true, [1, "Arsenal", true]] |
| Object | { team: 'Arsenal', team: 'Newcastle United' }, { 'average_age': 30 }

## How to create a JSON file?

Use any IDE or code editor to create a flat text file. Save it with extension `file_name.json`. An empty JSON file is a valid file. Technically, JSON file contain large set of objects or arrays which further holds various data types.

## How to create a JSON file with a sample metadata?

Let us create a JSON file named `player.json` and add the following metadata inside it. Take a look at the following example:

```json
{
  "name": "Dennis Bergkamp",
  "matchesPlayed": 255,
  "goals": 612,
  "club": "Arsenal FC",
  "joinYear": 1996,
  "finalYear": 2004,
  "titles": ["UEFA Cup", "Barclays EPL 2001", "English Cup 2000"],
  "associatedClubs": [
    {
      "name": "Wolverhampton FC",
      "goals": 39,
      "joinYear": 1991,
      "finalYear": 1993
    },
    {
      "name": "Sunderland",
      "goals": 23,
      "joinYear": 1994,
      "finalYear": 1995
    }
  ]
}
```

## Keypoints

* Do not add a comma after last item in an object/array.

## How to display JSON metadata using JavaScript?

Imagine we have following script associated to a test HTML page:

```javascript
let data = '{"name":"Dennis Bergkamp","matchesPlayed":255,"goals":612,"club":"Arsenal FC","joinYear":1996,"finalYear":2004,"titles":["UEFA Cup","Barclays EPL 2001","English Cup 2000"],"associatedClubs":[{"name":"Wolverhampton FC","goals":39,"joinYear":1991,"finalYear":1993},{"name":"Sunderland","goals":23,"joinYear":1994,"finalYear":1995}]}';
// This is the minify version of metadata shown in above example through CleanCSS site

let player = JSON.parse(data);

console.log(JSON.parse(data));
// JSON.parse reads metadata and converts it into a JSON object that is visible in console

console.log(JSON.stringify(JSON.parse(data)));
// JSON.stringify reads dynamic object and converts it into a string

console.log(player.name);
// Outputs "Dennis Bergkamp"

console.log(player.associatedClubs[1].name);
// Outputs "Sunderland"
```

## References

* Learn JSON - Full Crash Course for Beginners: [View course](https://youtu.be/GpOO5iKzOmY?list=PLWKjhJtqVAbnupwRFOq9zGOWjdvPRtCmO).
* XML: [Read more](https://en.wikipedia.org/wiki/XML).
* Yaml: [Read more](https://en.wikipedia.org/wiki/YAML).
* JSON: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON).
* Working with JSON: [Read more](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).
* JSON.parse(): [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).
* JSON.stringify(): [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
* JSON Minify: [View link](https://www.cleancss.com/json-minify/).

# HTML5

HTML (known as HyperText Markup Language) is a markup language used to construct semantic structure of a web page. The basic building block in an HTML page is a pair of starting and ending tag. Each tag can have multiple attributes and some form of data inside it.

An HTML file ends with an extension `.html`.

## Requirements

You can use any IDE or code editor to create an HTML page. VS Code is highly recommended with an extension of Live server that runs a local server where it watches for any changes on your page and reloads it on the fly.

## Starter Template

Create a new file `index.html` and save it on the desktop. Press the `!` key and hit tab. VS Code will create a starter template for HTML5 on the fly which will look something like following:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="description" content="Praise your app here to please Google search engine...">
  <title>Document</title>
</head>
<body>
</body>
</html>
```

* `<!DOCTYPE html>` is an inline tag that defines document standard is HTML5.
* `<html lang="en"></html>` tag block creates a structure for the page that will contain metadata and page content.
* `<head></head>` tag block contains all metadata related to a page.
* `<body></body>` tag block contains the structure of the document.
* `<title></title>` tag block defines the title of the document visible in a browser tab.
* `<meta charset="UTF-8">` inline tag defines encoding character set type for this document.
* `<meta name="viewport" content="width=device-width, initial-scale=1.0">` inline tag defines responsive behavior on this document.
* `<meta http-equiv="X-UA-Compatible" content="ie=edge">` inline tag specifies how document should behave on Internet explorer. See reference.
* `<meta name="description" content="...">` inline block provides a summary about the page to search engine crawlers.

## Headings

```html
<hgroup>
  <h1>Hello XL...</h1>
  <h2>Hello SM...</h2>
</hgroup>
```

`<hgroup></hgroup>` groups multiple headings together.

```html
<hgroup>
  <h1>Hello Large...</h1>
  <h2>Hello Medium...</h2>
  <h3>Hello Small...</h3>
  <h4>Hello Extra Small...</h4>
  <h5>Hello Tiny...</h5>
  <h6>Hello Minute...</h6>
</hgroup>
```

`<h?></h?>` defines various levels of headings where `?` can be a number from 1 to 6.

## Paragraph

```html
<p>Content...</p>
<p>Content more...</p>

```

`<p></p>` defines a paragraph or a content in the document. You can use various text formatting tags inside a `<p></p>` tag likewise `<strong></strong>`, `<em></em>`, `<b></b>`, `<i></i>` etc.

```html
<p>Spicy <strong><em>jalapeno</em></strong> bacon ipsum dolor amet sed t-bone eiusmod tempor, pork chop jowl leberkas pastrami turducken <em>meatball</em> do drumstick. Cupim pork belly do, deserunt enim sed flank tenderloin ground round sirloin. Bresaola landjaeger kielbasa frankfurter et in anim <strong>cupidatat</strong> cow. Sint cupim jowl in <b>tongue</b> drumstick. Nulla laboris turkey cow anim. Cupidatat enim ground round <i>shoulder</i>. Capicola nisi ad alcatra labore proident in pastrami laborum ut velit pork belly.</p>
```

## Spacers

`<br>` creates a blank new line in the document.

`<hr>` creates a visible horizontal new line in the document.

## Scalers

`<big>Text</big>` makes text larger than usual.

`<small>Text</small>` makes text smaller than usual.

## Super/Sub-scripts

`10<super>2</super>` adds letter as a superscript to an existing text.

`H<sub>2</sub>O` adds letter as a subscript to an existing text.

## Comments

Following is an example to add comments in an HTML document.

```html
<!-- This is some text. -->
<p>Text...</p>
```

## Styles and Colors

You can style an HTML tag using inline styles or heading level styles.

Following inline style gives a red color to the paragraph:

```html
<p style="color: red;">Text...</p>
```

Following heading level styles remove all the margin around `body` element:

```html
<style>
  body {
    margin: 0;
  }
</style>
<body></body>
```

## Semantic Structure

It is advised to layout the document using HTML5's semantic markup tags to achieve optimized SEO results and adhere to accessibility principles.

```html
<body>
  <header>
    <nav>Navigation goes here...</nav>
  </header>
  <main>
    <article>
      <section>
        <h2>Heading</h2>
      </section>
      <section>
        <p>Content goes here...</p>
      </section>
      <aside>
        Social media links...
      </aside>
    </article>
    <aside>
      <ul>
        <li>Sidebar items</li>
        <li>Sidebar items</li>
        <li>Sidebar items</li>
      </ul>
    </aside>
  </main>
  <footer>Footer information goes here...</footer>
</body>
```

## Hyperlinks

A hyperlink is a clickable component that links a document to another document.

```html
<a href="https://www.google.com" target="blank">Open Google</a>
```

To make a hyperlink non-clickable, see the following sample:

```html
<a href="#">Static link</a>
```

To make a hyperlink link to another HTML document in same root location of the project, see the following sample:

```html
<a href="test.html">See test page</a>
```

To make a hyperlink link behave as a bookmark link, see the following sample:

```html
<body id="top">...</body>
<a href="#top">Go to top</a>
```

## Images

Image tag is used to show an image on the document. Alt property is required for accessibility purposes.

```html
<img src="https://placekitten.com/300/300" alt="Image of a picture">
```

To load a local image in the project folder within assets folder at root of the project, see the following sample:

```html
<img src="assets/test.jpg" alt="Image of a picture">
```

## Videos

Video tag is used to display a video in the document.

```html
<video src="assets/test.mp4" poster="assets/thumbnail.jpg" controls></video>
```

To embed a video from third-party site, use the iFrame tag as follows:

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/pQN-pnXPaVg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

## Lists

Lists can contain nested lists. Unordered list is defined as follows:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

Ordered list can be altered by its type and defined as follows:

```html
<ol type="i">
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
```

Description list are defined as follows:

```html
<dl>
  <dt>Apples</dt>
  <dd>They are good for health.</dd>
  <dt>Oranges</dt>
  <dd>They are good for health too.</dd>
</dl>
```

## Tables

Tables contain rows, headings and cells.

```html
<table>
  <thead>
    <caption>Table to display data</caption>
    <tr>
      <th>Column</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>100</td>
    </tr>
    <tr>
      <td>2</td>
      <td>200</td>
    </tr>
  </tbody>
</table>
```

## Block and Inline level tags

`<div></div>` is a block level tag.

`<span></span>` is an inline level tag.

```html
<div>
  <p>I am a <span>text</span>.</p>
</div>
```

## Forms

Forms elements are of many types including check boxes, radio boxes, input fields, text areas, labels etc.

```html

<!-- Form elements -->
<form>
  <label for="user">Enter username:</label>
  <input id="user" type="text" placeholder="Enter username">

  <label for="password">Enter password:</label>
  <input id="password" type="password" placeholder="Enter password">

  <label for="date">Select date:</label>
  <input id="date" type="date" placeholder="Select date">

  <label for="email">Enter email address:</label>
  <input id="email" type="email" placeholder="Enter email address">

  <label for="file">Upload file:</label>
  <input id="file" type="file" placeholder="Upload file">

  <textarea placeholder="Enter your message"></textarea>

  <div>
    <input name="ratings" type="checkbox"> 5 star
    <input name="ratings" type="checkbox"> 3 star
  </div>

  <div>
    <input name="gender" type="radio"> Male
    <input name="gender" type="radio"> Female
  </div>

  <button type="submit">Submit</button>
</form>
```

## Keypoints

* Ordering is very important in an HTML page. It is parsed from top to bottom.
* Whitespace around tags is stripped when rendered in a browser.

## References

* HTML Full Course - Build a Website Tutorial: [View course](https://youtu.be/pQN-pnXPaVg?list=PLWKjhJtqVAbnupwRFOq9zGOWjdvPRtCmO).
* X-UA-Compatible: [Read more](https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do).
* HTML: [Read more](https://developer.mozilla.org/en-US/docs/Web/HTML).
* HTML5 Doctor: [Read more](http://html5doctor.com/).
* HTML Reference guide: [Read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

# CSS

CSS (known as Cascading Style Sheets) is used to stylize HTML documents.

## Inline Styles

Inline styles are declared directly on the HTML element.

```html
<p style="color: red;">Text...</p>
```

## Heading styles

Heading styles also known as style blocks are declared in `<head>` block of the document.

```html
<style>
  p {
    color: red;
  }
</style>
<body>
  <p>Text...</p>
</body>
```

## Class

Class are declared with a dot symbol followed by a class name. It applies on all the elements that holds the same class name.

```html
<h2 class="blue-color-text">Heading...</h2>
<p class="blue-color-text large-font">Text...</p>
```

```css
.blue-color-text {
  color: blue;
}
.large-font {
  font-family: monospace;
  font-size: 20px;
}
```

## Importing a Google font in your stylesheet

You can select any font family at [Google fonts](https://fonts.google.com/) website. Use the import tag to download the font in your stylesheet when the HTML document is loaded in the browser.

```html
<head>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
</head>
```

```css
/* style.css */
 @import url('https://fonts.googleapis.com/css?family=Roboto');

 body {
   font-family: 'Roboto', 'Arial', sans-serif;
 }
```

## Width of an Element

You can control the width of an element using `width` property.

```css
img {
  width: 300px;
}
```

## Border of an Element

You can specify rounded border around an HTML element.

```html
<div class="thick-red-border">Hello...</div>
```

```css
.thick-red-border {
  border-radius: 10px;
  border: 5px solid red;
}
```

## Background of an Element

You can specify background of an HTML element.

```html
<div class="green-background">Hello...</div>
```

```css
.green-background {
  background: green;
}
```

## IDs

You can specify an ID on an HTML element to target styles.

```html
<div class="green" id="red">Hello...</div>
<!-- Background color will be red as ID has higher preference than class name -->
```

```css
#red {
  background: red;
}

.green {
  background: green;
}
```

## Padding

You can specify padding around HTML element's text. Its syntax follows clockwise pattern starting from top.

```html
<div class="large-padding">Hello...</div>
```

```css
.large-padding {
  padding: 5px 15px 25px 35px;
}
```

## Margin

You can specify margin around HTML element. Its syntax follows clockwise pattern starting from top.

```html
<div class="large-margin">Hello...</div>
```

```css
.large-margin {
  margin: 5px 15px 25px 35px;
}
```

## Attribute Selector

You can specify an attribute selector to style HTML element.

```html
<input type="email">
```

```css
[type='email'] {
  margin: 5px 15px 25px 35px;
}
```

## Relative Units

Relative units are relative to parent or root elements. They are in form of `em`, `rem`, `%`.

```html
<div>Text...</div>
```

```css
div {
  width: 50%;
  margin: 2rem;
}
```

## Cascading

All styles that are applied to a parent element are automatically passed down to child elements.

```html
<body>
  <div>Text...</div>
</body>
```

```css
body {
  color: red;
}
/* Div gets red color text */
```

## Specificity

`!important` attribute value has top specificity. Inline style has first higher specificity. ID selector value has second higher specificity. Class names in top to bottom order has third higher specificity.

```html
<body style="color: green;" id="test" class="test">
  <div>Text...</div>
</body>
<!-- Color is red -->
```

```css
body {
  color: red !important;
}

.test {
  color: blue;
}

#test {
  color: black;
}
/* Div gets red color text */
```

## Colors

Colors in CSS can be represented using name, HEX value, RGB value or HSL value.

```css
div {
  color: black;
}

div {
  color: #000;
}

div {
  color: #000000;
}

div {
  color: rgb(0, 0, 0);
}

div {
  color: rgba(0, 0, 0, 1);
}

div {
  color: hsl(0, 0%, 0%);
}
/* Div gets red color text */
```

## CSS Variables

CSS variables allow us to reuse a variable at multiple places in our code. Take a look at the following example. This is an old way of declaring color values in our code.

```css
.article {
  color: #eeaadd;
}

.banner {
  color: #eeaadd;
}
```

With the usage of CSS variables, we can refactor above code in a more semantic way. Take a look at following example. In this example, we declare a root selector where all our variable declarations will reside. Hence, if we plan to change HEX value of `pink-light` color later in the program, we can easily achieve that by changing HEX value in the root selector.

We reference the `pink-light` in other parts of our code with keyword `var(--variable name...)`.

All variable name inside the root selector must precede with `--` keyword. For example, `--red`, `--red-light`, `--color-primary` etc.

```css
:root {
  --pink-light: #eeaadd;
}

.article {
  color: var(--pink-light);
}

.banner {
  color: var(--pink-light);
}
```

## Is it better than LESS/SASS?

CSS variables does not require any parsers like webpack or gulp plugins likewise in the case of LESS/SCSS etc. CSS variables can be declared within a scope as well without affecting rest of the styles. This structure works well within a Component based architecture as it avoids us declaring global variables which are not needed in all parts of app. It makes our CSS code follow DRY (do-not-repeat) principle.

CSS variables can be manipulated through JavaScript. Please check Wes Bos's "Playing with CSS variables and JS" example in [JavaScript30](https://javascript30.com/) course where he explains how to take advantage of CSS variables to affect DOM using JavaScript.

It works well with media queries and adds value to responsiveness of an app.

## How to declare a color variable in root scope?

In our examples, we are going to divide variables in our app into two scopes: root scope and local scope. In root scope, we will declare variables that affect our app globally. These variables can be accessed from anywhere within the app. Root scope is bound to HTML node element and all its children. In local scope, we will declare specific variables that are required to work in our individual components and their subtree nodes. These variables are bound to each scope and cannot be accessed outside of it.

Let us see an example of how root scope works.

```css
:root {
  --base-font-size: 16px;
  --color-primary: #aa5fce;
  --color-secondary: #123092;
  --color-black: #111;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

html {
  font-size: var(--base-font-size);
}

body {
  font-size: 1rem;
}

header {
  color: var(--color-primary);
}

footer {
  background: var(--color-secondary);
}
```

## How to override a color variable declared inside root scope?

In some cases, we may want to override value of CSS variable in root scope and use the reassigned value in our local scope and its children without affecting any other parts of the app.

Let us take a look at an example of local scope. In our "upsell" component, we can revise value of `--color-black` as per our design requirements. This revised value will be available to "upsell" block and all of its child nodes.

```html
  <div class="upsell upsell--seasonal">
    <header class="upsell__header">Some title...</header>
    <section class="upsell__content">
      <p>Some upsell text...</p>
      <p>Some upsell text...</p>
    </section>
    <footer class="upsell__footer">Some links...</footer>
  </div>
```
```css
/* Upsell component */
.upsell {
  --color-black: #000;
  /* Reassigns --color-black to a different value for this component */

  color: var(--color-black);
  background: var(--color-secondary);
  /* --color-black outputs to #000 instead of #111 */
}

.upsell__content {
  color: var(--color-black);
}
```

## How to declare a color variable in a local scope?

In cases where we are certain that we do not need a variable in global scope and its reusability is only bound to local scope and its children, we can declare a new variable for that local scope only.

Let us take a look at an example below.

```html
  <div class="maintenance maintenance--critical">
    <span class="maintenance__icon">
      <span class="sr-only">This is an icon related to some text message...</span>
    </span>
    <span class="maintenance__content">Some text message...</span>
  </div>
```

```css
/* Maintenance message component, only shows up in a rare occasion when services are temporarily down */
.maintenance {
  --icon-size: 2rem;
  --color-primary: #f00;
  --color-secondary: #222;
  /* These variables are scoped locally to ".maintenance" component and its children only */

  color: var(--color-primary);
  background: var(--color-secondary);
}

.maintenance__icon {
  font-size: var(--icon-size);
}
```

There is one methodology you could follow when declaring variables in a local scope. Developers tend to declare variables and styles separately under the same component class. Take a look at the example above.

```css
.maintenance {
  --icon-size: 2rem;
  --color-primary: #f00;
  --color-secondary: #222;
}

.maintenance {
  color: var(--color-primary);
  background: var(--color-secondary);
}

.maintenance__icon {
  font-size: var(--icon-size);
}
```

## How do you use BEM and CSS variables in conjunction?

Imagine a scenario where you are developing a pricing component which has 3 different columns highlighting different packages of a product. In terms of design, all these 3 columns look identical with minor tweaks. In older methods, we tend to write different wrapper classes for each of these column that ends up bloating our stylesheet. We can leverage CSS variables to counter this issue. Let us take a look at an example below.

```html
<div class="price price--thanksgiving">
  <div class="price__low">$25 bucks column</div>
  <div class="price__average">$50 bucks column</div>
  <div class="price__high">$75 bucks column</div>
</div>
```

```css
.price {
  --icon-size: 1rem;
  --padding-default: 1.25rem;
  --color-link: #e23456;
  --color-primary: #eeaa11;
}

.price--thanksgiving {
  --padding-default: 1.25rem;
  --color-link: #230833;
  --color-primary: #098312;
}
/* ".price--thanksgiving" gives a new look and feel to this component by overriding local variables. This approach allowed us to avoid declaring maCSS properties and values manually under a new class ".thanksgiving" */
```

## How do you use CSS variables and JavaScript in conjunction?

CSS variables can be accessed and manipulated by JavaScript for different scenarios. Let us take a look at an example.

```css
:root {
  --color-primary: #aa2112;
}
```
```javascript
let root = document.querySelector(':root');
let styles = getComputedStyle(root);
let primaryColor = styles.getPropertyValue('--color-primary');

console.log('Primary color is ', primaryColor); // outputs #aa2112

root.style.setProperty('--color-primary', 'red');
```

Above examples define a primary color with a customized value within root scope which will later be overwritten by value "red" via JavaScript.

## How do you use CSS variables and Media queries in conjunction?

CSS variables can be used flexibly with media queries. Let us take a look at an example.

```html
<h1 class="page-title">My app..</h1>
```

```css
/* Mobile first */
:root {
  --default-padding: 1.25rem;
}

.page-title {
  --font-size: 1.5rem;
}

/* Renders on phablets and tablets */
@media screen and (min-width: 480px) {
  :root {
    --default-padding: 1.5rem;
  }

  .page-title {
    --font-size: 2rem;
  }
}

/* Renders on medium screens and above */
@media screen and (min-width: 768px) {
  :root {
    --default-padding: 1.75rem;
  }

  .page-title {
    --font-size: 2.5rem;
  }
}
```

## How does multiple inheritance works in root scope?

We can declare CSS variables by inheriting other variables from within root scope. Later in the code, changing this value will not update original value. Let us take a look at an example.

```css
:root {
  --red: #f00;
  --color-primary: var(--red);
  /* --color-primary evaluates to #f00 */
}

/* Later in the code, when you revise the value of a variable declared using inheritance, it will affect --color-primary only. It will not change value of variable --red to #0f0. */
.upsell {
  --color-primary: #0f0;
}
```

## CSS Grid parent

Any HTML container element can be converted into a Grid using `display` property.

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  display: grid;
}
```

## CSS Grid columns/rows

You can specify grid columns or rows for a parent container using `grid-template-columns` and `grid-template-rows` property. Each column/row units can be specified in terms of `%`, `auto`, `px`, `fr` etc.

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 300px;
  grid-template-rows: 400px 400px;
  /* grid-template-columns: auto 25% 1fr; */
  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-template-columns: repeat(3, minmax(100px, 1fr)); */
  /* grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */
  /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
}
```

## CSS Grid gap

You can specify grid gap for columns or rows using `grid-column-gap` and `grid-row-gap` property. You can combine both values to shorten the syntax using `grid-gap` property.

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 300px;
  grid-template-rows: 400px 400px;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  /*
  grid-gap: 15px (row) 15px (column);
  */
}
```

## CSS Grid item position

You can specify grid item position using `grid-column` and `grid-row` property.

```html
<div class="container">
  <div class="item-1">1</div>
  <div class="item-2">2</div>
  <div class="item-3">3</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 300px;
  grid-template-rows: 400px 400px;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
}

.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
```

## align-self / justify-self / justify-center

You can specify align-self / justify-self / justify-items / align-items positioning on CSS grid items.

```html
<div class="container">
  <div class="item-1">1</div>
  <div class="item-2">2</div>
  <div class="item-3">3</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 300px;
  grid-template-rows: 400px 400px;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
}

.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  justify-self: center;
  align-self: start;
  justify-items: center;
  align-items: center;
}
```

## grid-template-areas / grid-area

You can specify name for each item in the grid. A dot represent an empty cell.

```html
<div class="container">
  <div class="item-1">1</div>
  <div class="item-2">2</div>
  <div class="item-3">3</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 300px;
  grid-template-rows: 400px 400px;
  grid-column-gap: 15px;
  grid-row-gap: 15px;

  grid-template-areas:
    "header . ."
    "footer aside";
}

.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  justify-self: center;
  align-self: start;
  justify-items: center;
  align-items: center;

  /* grid-area: header */
  /* grid-area: 1/1/2/3 */
}
```

## Flexbox

Flexbox is used to display flexible layout in one dimensional form across main axis and cross axis.

```html
<ul>
  <li>item 1</li>
  <li>item 2</li>
</ul>
```

```css
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

li {
  flex: 1 1 50%;
}

li:last-child {
  order: -1;
  align-self: center;
}
```

## References

* CSS Full Course - Includes Flexbox and CSS Grid Tutorials: [View course](https://youtu.be/ieTHC78giGQ?list=PLWKjhJtqVAbnupwRFOq9zGOWjdvPRtCmO).
* CSS Variables / Custom Properties (Full Course): [View course](https://youtu.be/GF8aoDqebsQ?list=PLWKjhJtqVAbnupwRFOq9zGOWjdvPRtCmO).
* Using CSS custom properties (Variables): [Read more](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).
* var(): [Read more](https://developer.mozilla.org/en-US/docs/Web/CSS/var).
* :root: [Read more](https://developer.mozilla.org/en-US/docs/Web/CSS/:root).
* Custom properties (--*): CSS variables: [Read more](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).
* CSS Custom Properties for Cascading Variables: [Read more](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Variables).

# Regular Expressions

Regular expressions are search patterns to crawl through a string and find particular instances.

## Using the Test method

You can match a specific word in a string. Test method returns a boolean. In the following case, result is specific to case sensitivity. `this` regular expression will return a `falsy`.

```javascript
let sentence = 'This is a beautiful desktop machine.';
let regex = /This/;
let result = regex.test(sentence);
console.log(result); // true
```

## Match various combinations

Use a pipe operator to use different words for pattern matching.

```javascript
let sentence = 'What is the best place to work at? Apple, Google, Microsoft, Netflix, Facebook?';
let regex = /Snapchat|NASA|Scotiabank/;
let result = regex.test(sentence);
console.log(result); // false
```

## Ignore case when matching

You can use an `i` parameter to ignore case based matches.

```javascript
let sentence = 'Virat Kohli is number 1 batsmen in the world.';
let regex = /kohli/i;
let result = regex.test(sentence);
console.log(result); // true
```

## Extract match

You can extract a matched pattern from the string.

```javascript
let sentence = 'Sadhguru is a nice fellow.';
let regex = /sadhguru/i;
let result = sentence.match(regex);
console.log(result); // Returns an array with Sadhguru as indexed item
```

## Pattern matching for more than one instance

You can match a pattern that repeats more than once in a string.

```javascript
let sentence = 'Blah blah blah blah bleh bleh bleh.';
let regex = /blah/ig;
let result = sentence.match(regex);
console.log(result); // Returns array with 4 items
```

## Wildcard pattern

Dot operator `.` is known as wildcard pattern that matches anything.

```javascript
let sentence = 'It can be a cat, cap, can, car or cab.';
let regex = /ca./ig;
let result = sentence.match(regex);
console.log(result); // Returns array with 6 items
```

## Pattern match with predefined set of symbols

You can use a predefined set of symbols while doing a match in the string.

```javascript
let sentence = 'It can be a cat, cap, can, car or cab.';
let regex = /[love]/ig;
let result = sentence.match(regex);
console.log(result); // Returns e, o characters
```

## Match letters

You can match pattern with set of letters.

```javascript
let sentence = 'Kanhaiya Kumar is a highly intellectual world leader.';
let regex = /[a-z]/ig;
let result = sentence.match(regex);
console.log(result); // Returns every character
```

## Match letters and numbers

You can match pattern with set of letters and numbers together.

```javascript
let sentence = 'Netflix is alright, VR is next big thing in 2020.';
let regex = /[0-9a-z]/ig;
let result = sentence.match(regex);
console.log(result); // Returns every character
```

## Negation

You can match excluding a pattern within a string.

```javascript
let sentence = 'Dell systems are average, Macbook Pro 2017 is a dream laptop.';
let regex = /[^0-9]/ig;
let result = sentence.match(regex);
console.log(result); // Returns every character except numbers
```

## Match pattern for one or more instance

You can match pattern that appears more than once in a string.

```javascript
let sentence = 'His Hiss Hisss Hissss Hissssss....';
let regex = /s+/ig;
let result = sentence.match(regex);
console.log(result); // Returns [ "s", "ss", "sss", "ssss", "ssssss" ]
```

## Match pattern for zero or more instance

You can match pattern that appears zero or more times in a string.

```javascript
let sentence = 'Go Goo Gooo Gooooal llll gggg h....';
let regex = /go*/ig;
let result = sentence.match(regex);
console.log(result); // Returns [ "Go", "Goo", "Gooo", "Goooo", "g", "g", "g", "g" ]
```

## Greedy/Lazy match

There are two types of pattern matching happen when matching zero or more instances of symbols in a pattern.

```javascript
let sentence = 'Titanic';

let regex = /t[a-z]*i/i;
let result = sentence.match(regex);
console.log(result); // Returns [ "Titani" ]

let regex = /t[a-z]*?i/i;
let result = sentence.match(regex);
console.log(result); // Returns [ "Ti" ]
```

## Match beginning word in a string

You can match first word in a string using negation operator.

```javascript
let sentence = 'A dog has four legs.';
let regex = /^A/;
let result = regex.test(sentence);
console.log(result); // Returns true
```

## Match ending word in a string

You can match ending word in a string using dollar operator.

```javascript
let sentence = 'A dog has one nose';
let regex = /nose$/;
let result = regex.test(sentence);
console.log(result); // Returns true
```

## Match every word and number

You can match every word and number using a shortcut.

```javascript
let sentence = 'Sublime text is old now.';
let regex = /\w/g;
let result = sentence.match(regex);
console.log(result); // Returns symbols except space and .
```

## Match everything that is NOT a word and number

You can match everything that is NOT a word and number using a shortcut.

```javascript
let sentence = 'Sublime text is old now.';
let regex = /\W/g;
let result = sentence.match(regex);
console.log(result); // Returns [ " ", " ", " ", " ", "." ]
```

## Match all numbers only

You can match everything that number only using a shortcut.

```javascript
let sentence = 'Oranges are $3.40 per lb.';
let regex = /\d/g;
let result = sentence.match(regex);
console.log(result); // Returns [ "3", "4", "0" ]
```

## Match all non-numbers only

You can match everything that are not a number only using a shortcut.

```javascript
let sentence = 'Oranges are $3.40 per lb.';
let regex = /\d/g;
let result = sentence.match(regex);
console.log(result); // Returns everything except numbers
```

## Example

1. If there are numbers, they should be at the end.
2. Letters can be lowercase or uppercase.
3. At least two characters long. Two letters name cannot have numbers.

```javascript
let sentence = 'JA123';
let regex = /^[A-Za-z]{2,}\d*$/g;
let result = sentence.match(regex);
console.log(result); // Returns [ 'JA123' ]
```

## Match Whitespace

You can trace whitespace in a string.

```javascript
let sentence = 'Calculate white space in this string.';
let regex = /\s/g;
let result = sentence.match(regex);
console.log(result); // Returns array of all white spaces
```

## Match Non-Whitespace

You can trace non-whitespace in a string.

```javascript
let sentence = 'Calculate white space in this string.';
let regex = /\S/g;
let result = sentence.match(regex);
console.log(result); // Returns everything except white spaces
```

## Quantity Specifier

You can match a pattern with a defined set of values.

```javascript
let sentence = 'Helooooo';
let regex = /o{3,5}/g;
let result = sentence.match(regex);
console.log(result); // Returns [ "ooooo" ]
```

## Quantity Specifier with infinite number

You can match a pattern with a defined set of value to infinite instance.

```javascript
let sentence = 'Helooooo';
let regex = /o{3,}/g;
let result = sentence.match(regex);
console.log(result); // Returns [ "ooooo" ]
```

## Quantity Specifier with exact number

You can match a pattern with a defined set of value to exact number of instances.

```javascript
let sentence = 'Helooooo';
let regex = /o{5}/g;
let result = sentence.match(regex);
console.log(result); // Returns [ "ooooo" ]
```

## Possible instance of a symbol

You can match a pattern with possible instance of a symbol.

```javascript
let sentence = 'Colour';
let regex = /lou?/g;
let result = sentence.match(regex);
console.log(result); // Returns [ 'lou' ]
```

## Lookahead

You can use `?=` or `?! pattern to look for pattern in a string.

```javascript
let firstSentence = 'Man';
let secondSentence = 'Mbd';
let firstRegex = /m(?=a)/i;
let secondRegex = /m(?!a)/i;
let firstResult = firstSentence.match(firstRegex);
let secondResult = secondSentence.match(secondRegex);
console.log(firstResult, secondResult); // Returns [ 'M' ], [ 'M' ]
```

## Capture groups

You can add pattern in a group to match for repeated instances.

```javascript
let sentence = 'regex regex';
let regex = /(\w+)\s\1/;
let result = sentence.match(regex);
console.log(result); // Returns [ "regex regex", "regex" ]
```

## Search and replace

You can perform pattern matching and replacement using replace.

```javascript
let sentence = 'TTC is best.';
let regex = /best/;
let result = sentence.replace(regex, 'awesome');
console.log(result); // Returns TTC is awesome.
```

## Example

Remove white space from beginning and end of the string.

```javascript
let sentence = '    free Code Camp    ';
let regex = /^\s+|\s+$/g;
let result = sentence.replace(regex, '');
console.log(result); // Returns free Code Camp
```

## References

* Learn Regular Expressions (Regex) - Crash Course for Beginners: [View course](https://www.youtube.com/watch?v=ZfQFUJhPqMM).
* JavaScript Regular Expression Enlightenment: [Read more](http://codylindley.com/techpro/2013_05_14__javascript-regular-expression-/).
* Learn Regex the easy way: [Read more](https://github.com/ziishaned/learn-regex).
* Regular expressions cheat sheet: [Read more](https://gist.github.com/vitorbritto/9ff58ef998100b8f19a0).
* Collection of regular expression related links: [Read more](https://github.com/aloisdg/awesome-regex).
* Learn regular expression in JavaScript: [Read more](https://github.com/dwyl/learn-regex).

# JavaScript

Press `F12` key to open Developer tools in your browser. Check the Console tab where we can write our JavaScript code.

## Comments

```javascript
// Two double slashes are used to write an inline comment

/*
Combination of slash and asterisk pair is used
to write multi line comments
*/
```

## Data Types

**Undefined**: Anything that has not been defined in the program.

**Null**: Nothing or no value.

**Number**: A positive, negative, decimal or scientific based integer.

**String**: A literal word or set of words.

**Boolean**: True or false value.

**Object**: A key-value paired data.

**Symbol**: An immutable data type.

## Variables

Variable can be considered as a box or container that holds something in a memory that can be used later in the code. Every expression or statement in JavaScript ends with a semi-colon.

In JavaScript, variable can be declared and defined with a "let" or "const" keyword in the beginning like the following:

```javascript
let age = 10;

const WHEELS = 4;
```

*Let* is scoped to a block. It can be accessed within a block where it is defined and declared. *Const* once assigned to a value cannot be changed later in the code. Its value remains consistent throughout otherwise it will throw an Error and code won't run.

## Different ways to define a variable and assign a value to it

There are various ways in which we can define a variable and assign some value to it.

```javascript
let age;
// We define a variable named age but it has not been assigned any value yet. Hence, when we console.log(age) outputs undefined.

let arms = 2;
// We define a variable named arms and assign a number "2" to it. Hence, when we console.log(arms) outputs 2.

age = 45;
// Later in the code, we assign a number 45 to already declared variable named "age". Hence, when we console.log(age) outputs 45.
```

## Camel-casing and Case-sensitivity

All variables in JavaScript are case-sensitive which means variable named `averageAge` is not same as `averageage`.

```javascript
let averageAge = 73;

console.log(averageage);
// Outputs an error as variable name is not defined.
```

When we declare a variable name that is longer, try using camel-case approach. For example, `userName`, `averageAge` etc.

## Mathematical operations

You can perform mathematical operations on two operands using following operators: `+` for Addition, `-` for Subtraction, `*` for Multiplication, `/` for Division, `%` for Remainder.

```javascript
let a = 10, b = 5;

console.log(a + b);
// Outputs 15

console.log(a - b);
// Outputs 5

console.log(a * b);
// Outputs 50

console.log(a / b);
// Outputs 2

console.log(a % b);
// Outputs 0
```

## Increment/Decrement

You can increment or decrement a value in various ways.

```javascript
let a = 10;

a += 1;
// Outputs 11

a++;
// Outputs 12

a -= 1;
// Outputs 11

a--;
// Outputs 10
```

## Escape characters

In some cases, we want to assign a string as a value to a variable. It can end up conflicting with the quotation. In that case, it can be escaped using backslash. Backticks allow usage of both single and double quotes inside a string.

```javascript
let name = 'John M\'adein Oshabau';

let message = 'I am learning "JavaScript"';

let alert = `Please take a 'break' after "15" minutes`;

console.log(name);
// Outputs John M'adein Oshabau

console.log(message);
// Outputs I am learning "JavaScript"

console.log(alert);
// Outputs Please take a 'break' after "15" minutes
```

## Combine strings

Two strings can be combined together using a plus operator.

```javascript
let word = 'I am ';

word += 'learning ';
word += 'JavaScript';

console.log(word);
// Outputs I am learning JavaScript

let firstName = 'Oink Doink';
let lastName = 'Molly Jane';

console.log(firstName + ' ' + lastName);
// Outputs Oink Doink Molly Jane

let weather = 'overcast';
let message = 'Weather is going to be ' + weather + ' today';

console.log(message);
// Outputs Weather is going to be overcast today

let reaction = 'awesome';
let statement = 'freeCodeCamp is';

statement += ' ';
statement += awesome;

console.log(statement);
// Outputs freeCodeCamp is awesome
```

## String manipulation

There are various methods available on a string to get all sorts of information.

String are immutable. You cannot fetch a letter within a string based on its index and change its value.

```javascript
let message = 'freeCodeCamp';

console.log(message.length);
// Outputs 12 which is combination of each letter in the string

let slogan = 'You can do it';
console.log(slogan[0]);
// Outputs Y which is first letter in the string based on zero-based index

let slogan = 'You can do it';
console.log(slogan[slogan.length - 1]);
// Outputs t which is last letter in the string based on zero-based index

let greeting = 'Hello';
greeting[0] = 'L';
// Outputs true but greeting remains unchanged due to string immutability
```

## Arrays

Arrays are used to store various data types within them. They can even store nested arrays. You can access any properties inside of an array using bracket notation and zero based index.

```javascript
let person = ['Jacob', 26, 'Calgary', ['swimming', 'drawing', 'singing']];
// Defines an array with different types of data types stored inside

console.log(person[0]);
// Outputs Jacob

person[1] = 30;
console.log(person[1]);
// Outputs 30 as second index value is replaced from 26 to 30

console.log(person[3][2]);
// Outputs singing

person.push('Designer');
// Adds value Designer in the end of the array person

person.pop();
// Removes and return last indexed value Designer from the array person

person.shift();
// Removes and return first indexed value Jacob from the array person

person.unshift('James');
// Adds James as first indexed item in the array person
```

## Functions

Functions are reusable blocks of code which can be called in later parts of the code. We can pass in data to the function in form of arguments which can be accessed and used within the function block. Functions can return something when called. If we explicitly define return value, it is returned. Otherwise, function returns undefined.

```javascript
function sayHello() {
  console.log('Hello');
}
// Define a function

hello();
// Outputs Hello
// Call an already defined function

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

console.log(add(2, 3));
// Outputs 5
```

## Global scope of a variable

A variable declared inside the root or global scope can be accessed everywhere. In the following example, `greeting` is accessible from within `sayName` function because it is declared within global scope.

```javascript
let greeting = 'Hello';

function sayName(name) {
  console.log(greeting + ' ' + name);
}

sayName('John');
```

## Local scope of a variable

A variable declared inside a block is locally scope to that block only. In the following example, `greeting` is accessible from within `sayName` function because it is declared within global scope.

```javascript
function sayName(name) {
  let greeting = 'Hello';
  console.log(greeting + ' ' + name);
}

sayName('John');
console.log(greeting);
// Output will throw an error as greeting is not accessible from global scope.
```

## Global vs. Local Scope of a variable

If there are two identical variables present in global and local scope, value of local scope will take precedence over global scope.

```javascript
let greeting = 'Namaste';

function sayName(name) {
  let greeting = 'Hello';
  console.log(greeting + ' ' + name);
}

sayName('John');
console.log(greeting);
// Hello  John
// Namaste
```

## Comparison Operators

There are two types of equality operators used to compare values. `==` is a equality operator which does not check type of either values passed for comparison. `===` is a strict equality checker which also takes into consideration value and type of compared values. `!=` is a not equality operator and `!==` is a strict not equality operator.

Other comparison operators include `>`, `<`, `<=`, `>=`, `!`, `&&`, `||`.

```javascript
console.log(1 == '1');
// Outputs true as JavaScript does implicit type coercion

console.log(1 === '1');
// Outputs false as both values are of different data types

console.log(1 != '1');
// Outputs false

console.log(1 !== '1');
// Outputs true

console.log(2 > 1);
// Outputs true

console.log(2 < 3);
// Outputs true

console.log(2 =< 3);
// Outputs true

console.log(3 >= 3);
// Outputs true

console.log(!true);
// Outputs false

console.log(true && true);
// Outputs true

console.log(false || true);
// Outputs true
```

## Conditionals

If statement is used to process some statement when a condition is true.

```javascript
let age = 18;

if (age < 18) {
  console.log('You are not an adult');
}
// If block does not run
```

If/else statement is used to process some statement when a condition is true and run something if it is not.

```javascript
let age = 13;

if (age > 18) {
  console.log('You are an adult');
} else {
  console.log('You are not an adult');
}
// Outputs You are not an adult
```

If/else/if statement is used to process some statement when a condition is true and run something if another condition is true and if not then run else block.

```javascript
let age = 55;

if (age < 6) {
  console.log('You are a toddler');
} else if (age < 18) {
  console.log('You are not an adult');
} else {
  console.log('You are an adult');
}
// Outputs You are an adult
```

In case of longer if/else/if condition, Switch condition is more semantic way to check a condition. A default condition is run when no condition matches with the passed argument in Switch condition.

```javascript
let stroke = 6;
switch(stroke) {
  case 0:
    console.log('Dot ball');
    break;
  case 1:
    console.log('Single');
    break;
  case 2:
    console.log('Two runs');
    break;
  case 3:
    console.log('Three runs');
    break;
  case 4:
    console.log('Boundary');
    break;
  case 6:
    console.log('Sixer');
    break;
  case 7:
  case 8:
  case 9:
    console.log('No run');
    break;
  default:
    console.log('Illegal stroke');
}
// Outputs Sixer
```

## Ternary Operator

If/else/if can be used in form of a shortened syntax called ternary operator.

```javascript
let currentAge = 25;
let age = currentAge > 18 ? 'Adult' : 'Teen';
console.log(age);
// Outputs Adult
```

## Objects

Objects store data types in key-value pairs.

```javascript
let player = {
  name: 'Jacob Shaw'
}

let fruits = {
  0: 'apple',
  1: 'banana'
}

let index = 1;

console.log(player.name);
// Outputs Jacob Shaw using the dot notation

console.log(player['name']);
// Outputs Jacob Shaw using the bracket notation

console.log(fruits[index]);
// Outputs banana using bracket notation with variable

player.name = 'Roger';
console.log(player.name);
// Outputs Roger (newly assigned value to name key in object player)

player.age = 30;
console.log(player.age);
// Outputs 30 as new key age is added with value 30 in object player

delete player.age;
// Deletes key age in object player

console.log(player.hasOwnProperty('name'));
// Outputs true because key name exists in player object
```

## Iteration

There are ways to iterate through list of data using for, while and do-while loops.

```javascript
// WHILE loop
let box = [];
let i = 0;

while(i < 5) {
  box.push(i);
  i++;
}

console.log(box);
// Outputs Array [0, 1, 2, 3, 4]

// FOR loop
let box = [];

for(let i = 0; i < 5; i++) {
  box.push(i);
}

console.log(box);
// Outputs Array [0, 1, 2, 3, 4]

// DO WHILE loop

let age = 0;

do {
  if(age === 10) break;
  console.log(age);
  age++;
} while(age > 1)
// Outputs 0 even when condition evaluated to false.
```

## Math object

You can use various method provided by Math object to perform various calculations.

```javascript
console.log(Math.random());
// Outputs a random number

console.log(Math.floor(Math.random() * 10));
// Outputs a random number between 0 to 9

function myRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(myRange(6, 18));
// Outputs a random number between defined range of 6 to 18
```

## Coercion

You can convert a string into a number and vice-versa.

```javascript
let age = Number('15');
console.log(age);
// Outputs 15 as a string as JavaScript implicitly coerce number to string
```

## Strict mode

Strict mode allows us to catch coding errors and common mistakes by enforcing standards.

```javascript
'use strict';

let userName = 'Adam';
```

## Let and Const

Let does not let you declare variable twice in the code. It is scoped to block level. Const does not let you change assigned value to a variable later in the code.

```javascript
let userName = 'John';

let userName = 'Jacob';
// Will throw an error as re-declaring variable with let is not allowed

userName = 'Jacob';
// This is allowed and sets variable userName to Jacob
```

Variable declared using `var` keyword is declared globally in the context if it is in the global scope. It is declared locally when resides in a function definition/expression.

```javascript
var age = 40;

function calculateAge() {
  age = 45;
  console.log(age);
  // Outputs 45 as 'var' is not used before the assignment, hence scoped globally.
}

calculateAge();

console.log(age);
// Outputs 45
```

Above example can be rewritten with the use of `let` keyword.

```javascript
let age = 40;

function calculateAge() {
  let age = 49;
  console.log(age);
  // Outputs 49 as age is scoped locally
}

calculateAge();

console.log(age);
// Outputs 40
```

Variable declared using `const` cannot be assigned to a new value later in the code.

```javascript
const FOUNDED = 1967;

FOUNDED = 1990;
// Throws an error as const cannot be reassigned to a new value
```

In case, variable declared using `const` holds an array as its value. It can be mutated using bracket notation.

```javascript
const ranks = [1, 2, 3];

ranks[1] = 0;
console.log(ranks);
// [1, 0, 3]
```

To prevent Object mutation, we can `Object.freeze(obj...)` to stop mutation of data inside it.

```javascript
const ranks = [1, 2, 3];

Object.freeze(ranks);

ranks[1] = 0;
console.log(ranks);
// [1, 2, 3]
```

## Arrow Function

Arrow function provides shorter syntax for function declarations and expressions.

```javascript
let currentYear = function() {
  let today = new Date();
  return today.getFullYear();
}
// Old school way

let currentYear = () => {
  let today = new Date();
  return today.getFullYear();
}
// Using arrow function
```

You can pass arguments through the arrow function syntax.

```javascript
let square = num => num * num;

console.log(square(5));
// Outputs 25
```

Arrow functions can be used in conjunction with higher order functions.

```javascript
let set = [1, 1.5, -2, 6, 7.8];

let positiveList = arr => {
  let positiveIntegers = arr.filter(num => Number.isInteger(num) && num > 0);
  // Filter gets all positive integers from set array

  console.log(positiveIntegers);
  // Outputs [1, 6]

  return positiveIntegers;
};

let positiveNumbers = positiveList(set);
```

You can set default values as function parameters.

```javascript
function add(x = 5, y = 5) {
  return x + y;
}

add();
// Outputs 10
```

You can also use Rest operators in the function argument.

```javascript
function addNumbers(...args) {
  return args.reduce((a, b) => a + b, 0);
}

console.log(addNumbers(2, 3, 4, 6));
// Outputs 10
```

You can also use Spread operator to clone a non-literal data type without affecting original data set.

```javascript
let fruits = ['apple', 'grapes', 'banana'];
let organicFruits;

(function() {
  organicFruits = [...fruits];
  organicFruits[0] = 'kiwi';
})();

console.log(organicFruits);
console.log(fruits);
// Outputs [ "kiwi", "grapes", "banana" ]
// Outputs [ "apple", "grapes", "banana" ]
```

## Destructuring

We can take values from an object and store directly in a named variable using destructuring.

```javascript
let container = {x: 1, y: 2, z: 3};

let { x:a, y:b, z:c } = container;

console.log(a, b, c);
// Outputs 1, 2, 3
```

Destructuring can be used to assign values to variables from nested objects.

```javascript
let container = {
  x: {low: 1, high: 10},
  y: {low: 2, high: 20},
  z: {low: 3, high: 30}
};

let { z: { low: a, high: b } } = container;

console.log(a, b);
// Outputs 3, 30
```

Destructuring can be used on Arrays as well. You can also switch variables in array using destructuring.

```javascript
let container = [1, 2, 3, 4, 5];

let [a, b] = container;

console.log(a, b);
// Outputs 1, 2
```

```javascript
let container = [1, 2, 3, 4, 5];

let [a, b, , , c] = container;

console.log(a, b, c);
// Outputs 1, 2, 5

```

```javascript
let container = [1, 2, 3, 4, 5];

let [a, b, , , c] = container;

[a, b, c] = [c, a, b];

console.log(a, b, c);
// Outputs 5, 1, 2
```

Destructuring can be used in conjunction with Rest operator.

```javascript
let container = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [ , , ...arr] = container;

console.log(arr);
// Outputs [3, 4, 5, 6, 7, 8, 9, 10]
```

Destructuring to pass an object as a function argument.

```javascript
let container = {
  age: 10,
  weight: 68,
  height: 187
};

let person = (function() {
  return function person({ age }) {
    return age;
  };
})();

console.log(person(container));
// Outputs 10
```

## Template Literals

Backticks are used to create multi line strings, add single and double quotation and parse JavaScript code inside.

```javascript
let age = 10;

let message = `Hello, I am ${age} years old.`;

console.log(message);
// Outputs Hello, I am 10 years old.
```

## Concise Object Literal Declarations Using Simple Fields

```javascript
let createPerson = (name, age) => ( { name, age } );
console.log(createPerson('Test', 27));
// Outputs Object { name: "Test", age: 27 }
```

## Concise Declarative Functions with ES6

```javascript
let person = {
  name: 'John',
  speak() {
    console.log(`Hello, myself ${this.name}`);
  }
}

person.speak();
// Outputs Hello, myself John
```

## Class Syntax to define a Constructor Function

```javascript
class Person {
  constructor(gender, age) {
    this.gender = gender;
    this.age = age;
  }
}

let john = new Person('male', 26);
console.log(john);
// Outputs Object { gender: "male", age: 26 }
```

## Getters and Setters to control access to an object

```javascript
class Book {
  constructor(author) {
    this.author = author;
  }
  get writer() {
    return this.author;
  }
  set writer(newAuthor) {
    this.author = newAuthor;
  }
}
let pcWorld = new Book('James');
pcWorld.writer = 'Tony';
console.log(pcWorld);
// Outputs Author - Tony
```

## Import/Export

You can import a set of functions in your script.

```javascript
import { addFunction } from './functions';

addFunction(...);
```

You can import everything from a file in your script.

```javascript
import * as myFunc from './functions';
```

You can import a default export from a file in your script.

```javascript
import uCase from './functions';
```

You can export functions to make them reusable in different files through import.

```javascript
let uCase = string => string.toUpperCase();

export { uCase };

export let age;
```

In case you want to export only one thing from a file, use `default`.

```javascript
let uCase = string => string.toUpperCase();

export default uCase;
```

## References

* Speaking JS: [Read more](http://speakingjs.com/).
* Exercism: [Read more](https://exercism.io/tracks/javascript).
* You dont know JS: [Read more](https://github.com/getify/You-Dont-Know-JS).
* Learn JavaScript - Full Course for Beginners: [View course](https://www.youtube.com/watch?v=PkZNo7MFNFg).
* JavaScript: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
* Basic workflow of JavaScript engine: [Read more](https://medium.com/@duartekevin91/basics-of-understanding-chromes-v8-engine-c5c8ec61fa6b).
* Call stack: [Read more](https://medium.com/@js_tut/execution-context-the-call-stack-d1fbe34f6fe9).
* Concept of 'this': [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).
* Concept of Scoping: [Read more](https://developer.mozilla.org/en-US/docs/Glossary/Scope).
* Execution content object (Global/Local): [Read more](http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/) | [Read more](https://medium.com/koderlabs/javascript-scope-chain-and-execution-context-simplified-ffb54fc6ad02) | [Read more](https://stackoverflow.com/questions/9384758/what-is-the-execution-context-in-javascript-exactly) | [Read more](https://hackernoon.com/execution-context-in-javascript-319dd72e8e2c) | [Read more](https://www.valentinog.com/blog/js-execution-context-call-stack/).
* Message Queue: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop) | [Read more](https://codeburst.io/what-you-need-to-know-about-the-javascript-event-loop-ee3fc32e59c1).

# Markdown

Markdown syntax is used to write code documentation. It allows us to embed HTML in its syntax and markup is fairly simple to learn.

## Tools

You can use various tools in VS Code to improve productivity when writing Markdown code.

* Markdown Preview: [Install Extension](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced).
* Markdown Lint: [Install Extension](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint).
* Markdown TOC: [Install Extension](https://marketplace.visualstudio.com/items?itemName=AlanWalk.markdown-toc).
* Markdown All in One: [Install Extension](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one).
* Markdown Theme Kit: [Install Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.Theme-MarkdownKit).

## Headings

Headings are represented using Hash symbol `#`.

```md
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```

## Paragraphs

You must use two breaks to add a line in markdown.

You can use single underscore `_` to make text italic and double underscore `__` to make text bold.

```md
This is line one.

This is line two.
```

```md
This text is _italic_, *italic*, **bold**, __bold__ and ~~deleted~~.
```

## Lists

You can show numbered and non-numbered lists in markdown.

```md
1. Item 1
2. Item 2
3. Item 3

* Item 1
* Item 2
* Item 3

1. Item 1
  * Item 1A
  * Item 1B
```

## Links

You can use Markdown to convert a text into hyperlink.

```md
[I am a link.](https://www.google.com)
```

## Images

You can convert an image into a hyperlink.

```md
![Text here...](Logo here...)
```

## Code Highlighting

You can highlight various types of code within markdown using ``` followed by type of language keyword.

Below is a snippet to show Alert in Javascript.

```javascript
alert('Hello')
```

## Tables

Markdown can be used to represent data in a tabular form.

You can make it left aligned, right aligned or center aligned using `:` operator. `|:---|` is left aligned, `|:---:|` becomes center aligned and `|---:|` becomes right aligned.

```md
| Name | Age |
| ---- | --- |
| Tej | 28 |
| Gursharn | 34 |
| Ammy | 28 |
| Nittin | 28 |
```

## Blockquotes

You can use blockquotes in Markdown.

```md
> Something in a blockquote...
- ** By someone**
```

## Horizontal Rule

You can use `---` to add horizontal lines in markdown.

```md
Line 1

---

Line 2
```

## References

* Mastering Markdown: [View course](https://masteringmarkdown.com/).

# React.js

## Common terminologies

In react world, **Components** are building block of our application. **JSX** is the syntax thats create React elements written in plain HTML format. Components can be **styled**, has **props** and **state** associate with them. Components extend to provide **event handling** and **lifecycle methods**.

## Why React?

* Virtual DOM allows React to update changes faster than DOM manipulation (directly using vanilla JavaScript). Watch the following video for more information: [View video](https://www.youtube.com/watch?v=BYbgopx44vo).
* Components in React are modular, clean and reusable.

## ReactDOM and JSX

Let us take a look at plain React component.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <p>I am React.</p>,
  document.querySelector('#root')
);
```

In above example, first import statements brings in all the necessary modules into your script that are required for rendering react code, second import statement allows us to use modules to deal with virtual DOM.

`ReactDOM.render()` method takes in two arguments, first is the element we want to render on the page and second is location of where it will be rendered. First element is in form of `JSX`.

Key points to note that `JSX` depends on `react` library and removing/commenting it out will result in an error. `JSX` only allows one element to render. In case of multiple elements, it is better to wrap them in a `div` tag.

This component will be rendered within `div` with id of `root` in our HTML file.

## ReactDOM and JSX Practice

Render an unordered list to the page with three list items.

* Live source: [View](https://tpkahlon.github.io/react-e1).
* View source: [View](https://github.com/tpkahlon/react-e1).

## Functional Components

It is best practice to divide your app into separate reusable functions. You can create a function declaration and return a singular `JSX`. In our render method, you can declare the function as a `JSX` tag.

## Functional Components Practice

Create a functional component `MyInfo` that returns a heading, paragraph and three unordered list items.

* Live source: [View](https://tpkahlon.github.io/react-e2).
* View source: [View](https://github.com/tpkahlon/react-e2).

## Functional Components into separate files

It is best practice to keep your functional components in a separate file under `components` folder. When creating a new file with a functional component, it is important to import `react` library into script to `JSX` can function properly.

## Parent/Child Components

All the functional components can be nested into parent component. For instance, `App.js` file can behave as a parent component which holds child component like `Navbar.js`, `MainContent.js` and `Footer.js`.

## Parent/Child Components Practice

Render `App` parent component which has `Navbar`, `MainContent` and `Footer` child components.

* Live source: [View](https://tpkahlon.github.io/react-e3).
* View source: [View](https://github.com/tpkahlon/react-e3).

## Todo App: Phase 1

Create `App` component and render 4 checkbox with paragraphs next to it.

* Live source: [View](https://tpkahlon.github.io/react-e4).
* View source: [View](https://github.com/tpkahlon/react-e4).

## Styling React with CSS classes and JavaScript in JSX

When adding class names to a react element within the `JSX` tag, use `className` property.

Inside `JSX`, you can use `{}` blocks to render JavaScript.

## Example

Create `App` component that shows hour of the day with some styles.

* Live source: [View](https://tpkahlon.github.io/react-e5).
* View source: [View](https://github.com/tpkahlon/react-e5).

## Inline styles with style property

You can pass in an object in the `JSX` style property to add inline styles. In sample scenario, `JSX` might look like following:

```javascript
function App() {
  const styles = {
    color: 'red',
    fontSize: '50px',
    backgroundColor: 'red'
  }
  return ()
    <h1 style={styles}>Hello...</h1>
  ;
}
```

## Inline styles with style property using an example

Create `App` component with some inline styles.

* Live source: [View](https://tpkahlon.github.io/react-e6).
* View source: [View](https://github.com/tpkahlon/react-e6).

## Todo app - Phase 2

Convert checkbox and paragraph into a <TodoItem /> component and add styles.

* Live source: [View](https://tpkahlon.github.io/react-e7).
* View source: [View](https://github.com/tpkahlon/react-e7).

## Props

We can pass immutable data through Components using props.

Create a `Card` component that shows heading and info. This data is being passed on from parent element.

* Live source: [View](https://tpkahlon.github.io/react-e8/).
* View source: [View](https://github.com/tpkahlon/react-e8).

## Props and Styling Practice

Render an `App` component. It should contain 5 `Joke` components. Each joke should receive a question and a punch line.

* Live source: [View](https://tpkahlon.github.io/react-e9/).
* View source: [View](https://github.com/tpkahlon/react-e9).

## Mapping Components

We can use higher order array functions to generate components.

## Mapping Components Practice

Render a `Product` component from given data. Use `map` method to generate these components and pass a `key` to each component.

* Live source: [View](https://tpkahlon.github.io/react-e10/).
* View source: [View](https://github.com/tpkahlon/react-e10).

## Todo App - Phase 4

Create a data file and use array's map method to render child component.

* Live source: [View](https://tpkahlon.github.io/react-e11/).
* View source: [View](https://github.com/tpkahlon/react-e11).

## Class based Components

Class based components are modular way to define components. Use `this.props` to access any props passed in from parent components.

## Class based Components Practice

Convert all components into class based components.

* Live source: [View](https://tpkahlon.github.io/react-e12/).
* View source: [View](https://github.com/tpkahlon/react-e12).

## State

State allows a component to update and maintain its own data. Props can only pass in value from one component to another. State allows more flexibility in terms of mutating data. Component must be a class based component for state to work.

You can pass a state from parent component to child component using props.

## State Practice

Create a class based component. Use constructor to initialize state.

* Live source: [View](https://tpkahlon.github.io/react-e13/).
* View source: [View](https://github.com/tpkahlon/react-e13).

## State Practice 2

Make a stated functional component, state should have a property of `isLoggedIn` which is a boolean.

* Live source: [View](https://tpkahlon.github.io/react-e14/).
* View source: [View](https://github.com/tpkahlon/react-e14).

## Todo App - Phase 4

Change the `App` component into a stateful class component and load the imported data into state.

* Live source: [View](https://tpkahlon.github.io/react-e15/).
* View source: [View](https://github.com/tpkahlon/react-e15).

## Handling events in React

You can handle events in `JSX` syntax. In a sample case, you can either run JavaScript function directly or call function reference.

```javascript
import React from 'react';

function handleClick() {
  console.log('clicked...');
}

function App() {
  return (
    <div>
      <h1 onClick={() => console.log('clicked...)}>Hello</h1>
      <p onClick={handleClick}>Hello</p>
    </div>
  );
}

export default App;
```

## Todo App - Phase 5

Set onChange event on input item click.

* Live source: [View](https://tpkahlon.github.io/react-e16/).
* View source: [View](https://github.com/tpkahlon/react-e16).

## Changing State

Every time you create a state on Class, you need to bind that method to that class.

```javascript
this.methodName = this.methodName.bind(this);
```

## Todo App - Phase 6

Create event handler on `App` component when checkbox is clicked. Pass it to the child component.

* Live source: [View](https://tpkahlon.github.io/react-e17/).
* View source: [View](https://github.com/tpkahlon/react-e17).

## Life cycle methods

`Render` method allows re-rendering of components whenever props, state or component is changed, it gets updated. Other life cycle methods include `componentDidMound` which runs once when component shows up on the screen, `componentWillReceiveProps` runs whenever parent component passes on props to child components, `shouldComponentUpdate` is used for optimization purposes, `componentWillUnmount` is used on certain event handling cases.

## Conditional Rendering

You can use `&&` over ternary operator.

## Conditional Rendering Practice

In a stateful class based component, have a state to keep track of user whether they are logged in or not using a button and a text.

* Live source: [View](https://tpkahlon.github.io/react-e18/).
* View source: [View](https://github.com/tpkahlon/react-e18).

## Todo App - Phase 7

Style the completed list item differently than incomplete items.

* Live source: [View](https://tpkahlon.github.io/react-e19/).
* View source: [View](https://github.com/tpkahlon/react-e19).

## Fetching data from an API

Use a placeholder API to load data into a stateful class based components, add loading state and data state.

* Live source: [View](https://tpkahlon.github.io/react-e20/).
* View source: [View](https://github.com/tpkahlon/react-e20).

## Forms

Create a form component with all text filled in highlighting below the form.

* Live source: [View](https://tpkahlon.github.io/react-e21/).
* View source: [View](https://github.com/tpkahlon/react-e21).

## Container/Component Architecture

Separate business logic and views.

* Live source: [View](https://tpkahlon.github.io/react-e22/).
* View source: [View](https://github.com/tpkahlon/react-e22).

## Meme Generator Capstone Project

* Live source: [View](https://tpkahlon.github.io/react-e23/).
* View source: [View](https://github.com/tpkahlon/react-e23).

## References

* REPL: [Check site](https://babeljs.io/repl/)
* Learn React.js - Full Course for Beginners - Tutorial 2019: [View course](https://www.youtube.com/watch?v=DLX62G4lc44).
* Virtual DOM and React: [View video](https://www.youtube.com/watch?v=BYbgopx44vo).
* React Events: [Read more](https://reactjs.org/docs/events.html#supported-events).
* React Lifecycle Methods- how and when to use them: [Read more](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1).
* React New Lifecycles: [Read more](https://reactjs.org/blog/2018/03/29/react-v-16-3.html).
* React Forms: [Read more](https://reactjs.org/docs/forms.html).
* Smart and Dumb components: [Read more](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

## Road to React links

* MVC: [Read more](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller).
* Single-page application: [Read more](https://en.wikipedia.org/wiki/Single-page_application).
* 10 Reasons why I moved from Angular to React: [Read more](https://www.robinwieruch.de/reasons-why-i-moved-from-angular-to-react/)
* Essential React Libraries in 2019: [Read more](https://www.robinwieruch.de/essential-react-libraries-framework/)
* How to learn React, Angular or Vue in 2019?: [Read more](https://www.robinwieruch.de/how-to-learn-framework/)

---

* Slack Group for React: [Read more](https://slack-the-road-to-learn-react.wieruch.com/)
* Nobody introduced me to the API - A journey from packages to RESTful services with Roy T. Fielding: [Read more](https://www.robinwieruch.de/what-is-an-api-javascript/)
* My development setup as a JavaScript web developer: [Read more](https://www.robinwieruch.de/developer-setup/)
* GitHub and Git Setup and Essentials: [Read more](https://www.robinwieruch.de/git-essential-commands/)
* NodeJS: [Read more](https://nodejs.org/en/)
* Yarn: [Read more](https://yarnpkg.com/lang/en/)

---

* React Installations: [Read more](https://reactjs.org/docs/getting-started.html)
* Babel: [Read more](https://babeljs.io/)
* Content delivery network: [Read more](https://en.wikipedia.org/wiki/Content_delivery_network)
* Create react app: [Read more](https://github.com/facebook/create-react-app)
* Opinion on Create react app: [Read more](https://twitter.com/dan_abramov/status/806985854099062785)
* Host a single or multiple applications on Digital Ocean: [Read more](https://www.robinwieruch.de/deploy-applications-digital-ocean/)
* Source Code for Hacker news client project: [Read more](https://github.com/the-road-to-learn-react/hackernews-client/tree/124600e876b89459200a0430e0781b511eecdee2)

---

* All Supported HTML Attributes: [Read more](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)
* Introducing JSX: [Read more](https://reactjs.org/docs/introducing-jsx.html)
* React Components, Elements, and Instances: [Read more](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)

---

* Const: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
* Let: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

---

* Rendering Elements: [Read more](https://reactjs.org/docs/rendering-elements.html)

---

* Dan Abramov - Live React: Hot Reloading with Time Travel at react-europe 2015: [Watch](https://www.youtube.com/watch?v=xsSnOQynTHs)
* How to add Hot Module Reloading (HMR) to a React app: [Read more](https://developerhandbook.com/webpack/how-to-add-hot-module-reloading-to-a-react-app/)

---

* Map: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* List and Keys: [Read more](https://reactjs.org/docs/lists-and-keys.html)
* Array: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* Deep Dive into JavaScript's Array Map Method: [Read more](https://www.robinwieruch.de/javascript-map-array/)

---

* Arrow functions: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

* JavaScript fundamentals before learning React: [Read more](https://www.robinwieruch.de/javascript-fundamentals-react-requirements/)
* Classes: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

---

* Constructor: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Constructor)

---

* Object initializer: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

---

* Filters: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* State and Lifecycle: [Read more](https://reactjs.org/docs/state-and-lifecycle.html)

---

* React alternative class component syntax: [Read more](https://github.com/the-road-to-learn-react/react-alternative-class-component-syntax)

---

* Handling Events: [Read more](https://reactjs.org/docs/handling-events.html)
* Higher-order function: [Read more](https://en.wikipedia.org/wiki/Higher-order_function)

---

* Destructuring assignment: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

---

* Forms: [Read more](https://reactjs.org/docs/forms.html)
* React Controlled Component Example: [Read more](https://github.com/the-road-to-learn-react/react-controlled-components-examples)

---

* Composition vs Inheritance: [Read more](https://reactjs.org/docs/composition-vs-inheritance.html)
* React Component Composition: [Read more](https://www.robinwieruch.de/react-component-composition/)

---

* How to pass props to components in React: [Read more](https://www.robinwieruch.de/react-pass-props-to-component/)

---

* Components and Props: [Read more](https://reactjs.org/docs/components-and-props.html)

---

* Styled components: [Read more](https://github.com/styled-components/styled-components)
* CSS Modules: [Read more](https://github.com/css-modules/css-modules)
* Sass Language: [Read more](https://sass-lang.com/)
* create-react-app with Sass: [Read more](https://www.robinwieruch.de/create-react-app-with-sass-support/)
* React Semantic UI Tutorial for Beginners: [Read more](https://www.robinwieruch.de/react-semantic-ui-tutorial/)

---

* Nobody introduced me to the API - A journey from packages to RESTful services with Roy T. Fielding: [Read more](https://www.robinwieruch.de/what-is-an-api-javascript/)
* What's new in React 16?: [Read more](https://www.robinwieruch.de/what-is-new-in-react-16/)
* React.Component: [Read more](https://reactjs.org/docs/react-component.html)
* State and Lifecycle: [Read more](https://reactjs.org/docs/state-and-lifecycle.html)
* Error Handling in React 16: [Read more](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html)

---

* Template literals: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* AXIOS: [Read more](https://github.com/axios/axios)
* Fetch API: [Read more](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* How to fetch data in React: [Read more](https://www.robinwieruch.de/react-fetching-data/)

---

* Object Assign: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
* Spread Operator: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

---

* Conditional (ternary) operator: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
* All React Conditional Rendering Techniques: [Read more](https://www.robinwieruch.de/conditional-rendering-react/)
* Conditional Rendering: [Read more](https://reactjs.org/docs/conditional-rendering.html)

---

* Synthetic Events: [Read more](https://reactjs.org/docs/events.html)

---

* How to Learn React — A roadmap from beginner to **advanced**: [Read more](https://medium.freecodecamp.org/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6)

---

* ES6 Default Parameters: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
* Nobody introduced me to the API - A journey from packages to RESTful services with Roy T. Fielding: [Read more](https://www.robinwieruch.de/what-is-an-api-javascript/)

---

* setState(): [Read more](https://reactjs.org/docs/react-component.html#setstate)
* State Updates May Be Asynchronous : [Read more](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)

---

* Error Handling in React: [Read more](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html)

---

* Isomorphic WHATWG Fetch API, for Node & Browserify: [Read more](https://github.com/matthew-andrews/isomorphic-fetch)
* AXIOS: [Read more](https://github.com/axios/axios)
* Prevent React setState on unmounted Component: [Read more](https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component/)
* Why Frameworks matter: [Read more](https://www.robinwieruch.de/why-frameworks-matter/)

---

* Import: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
* Export: [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

# AngularJS Guide

## JavaScript Patterns

**ABSTRACTION**

```javascript
var painting = function() {
    console.log("Painted a painting.");
};

var makePainting = function(painting) {
    console.log("Preparing area for painting.");
    painting();
    console.log("Cleaning up work area.");
};

makePainting(painting);
```

**MODULES**

```javascript
var createPlayer = function() {
    var runs = 0;
    var hitSix = function() {
        runs += 6;
        console.log("It is a six. Runs: " + runs + ".");
    }
    var hitFour = function() {
        runs += 4;
        console.log("It is a four. Runs: " + runs + ".");
    }
    var leaveDelivery = function() {
        console.log("Nice bowling by the bowler. Runs: " + runs + ".");
    }
    return {
        hitSix: hitSix,
        hitFour: hitFour,
        leaveDelivery: leaveDelivery
    }
}

var sachin = createPlayer();

sachin.hitSix();
sachin.hitFour();
sachin.leaveDelivery();
sachin.hitFour();
sachin.hitFour();
```

**IIFE**

```javascript
(function() {
    var createPlayer = function() {
        var runs = 0;
        var hitSix = function() {
            runs += 6;
            console.log("It is a six. Runs: " + runs + ".");
        }
        var hitFour = function() {
            runs += 4;
            console.log("It is a four. Runs: " + runs + ".");
        }
        var leaveDelivery = function() {
            console.log("Nice bowling by the bowler. Runs: " + runs + ".");
        }
        return {
            hitSix: hitSix,
            hitFour: hitFour,
            leaveDelivery: leaveDelivery
        }
    }

    var sachin = createPlayer();

    sachin.hitSix();
    sachin.hitFour();
    sachin.leaveDelivery();
    sachin.hitFour();
    sachin.hitFour();
}());
```

## Controllers

**FUNDAMENTALS**

* Add `ng-controller` directive in HTML.
* Controller will be a function that AngularJS invokes.
* Controller takes a `$scope` parameter.
* Attach model to `$scope`.

HTML example:

```html
<!DOCTYPE html>
<html ng-app="testApp">

<body ng-controller="MainController">
    <p>{{title}}</p>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.min.js"></script>
<script type="text/javascript">
    (function() {
        var app = angular.module('testApp', []);

        function MainController($scope) {
            $scope.title = 'Sample text';
        };

        app.controller('MainController', ["$scope", MainController]);
    }());
</script>

</html>
```

**FEATURES**

* If any data bindings are not available, AngularJS will proceed with page load without any issues.

```html
<!DOCTYPE html>
<html ng-app="testApp">

<body ng-controller="MainController">
    <p>Name: {{user.name}}</p>
    <p>Age: {{user.age}}</p>
    <p>Location: {{user.location}}</p>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.min.js"></script>
<script type="text/javascript">
    (function() {
        var app = angular.module('testApp', []);

        function MainController($scope) {
            var user = {
                name: 'Test',
                age: 20,
                location: 'Bhatinda'
            };
            $scope.user = user;
        };
        app.controller('MainController', ["$scope", MainController]);
    }());
</script>

</html>
```

**SERVICES**

```html
<!DOCTYPE html>
<html ng-app="testApp">

<body ng-controller="MainController">
    <div ng-if="error">{{ error }}</div>
    <div ng-if="user">
        <p>Name: {{user.name}}</p>
        <p>Location: {{user.location}}</p>
        <p>Image: <img ng-src="{{user.avatar_url}}" alt="{{user.name}}" /></p>
    </div>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.min.js"></script>
<script type="text/javascript">
    (function() {
        var app = angular.module('testApp', []);

        function MainController($scope, $http) {
            function onSuccess(response) {
                $scope.user = response.data;
            };

            function onError(error) {
                $scope.error = "Sorry, could not load the request, " + error;
            };
            $http.get("https://api.github.com/users/wesbos").then(onSuccess, onError);
        }
        app.controller('MainController', ["$scope", "$http", MainController]);
    }());
</script>

</html>
```

**MODULES**

* Controllers are registered within modules.

## Directives

* `$scope` provides the model
* Model does not touch HTML
* Data binding moves model data to view
* Directives allow for indirect model view interaction

**NG-MODEL**

```html
<!DOCTYPE html>
<html ng-app="testApp">

<body ng-controller="MainController">
    <div ng-if="error">{{ error }}</div>
    <form name="searchUser">
        <label for="inputUser">Search <span ng-if="username">for {{username}}:</span></label>
        <input id="inputUser" type="text" placeholder="Find a user on Github" ng-model="username">
        <button type="submit" value="Submit">Submit</button>
    </form>
    <div ng-if="user">
        <p>Name: {{user.name}}</p>
        <p>Location: {{user.location}}</p>
        <p>Image: <img ng-src="{{user.avatar_url}}" alt="{{user.name}}" /></p>
    </div>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.min.js"></script>
<script type="text/javascript">
    (function() {
        var app = angular.module('testApp', []);

        function MainController($scope, $http) {
            function onSuccess(response) {
                $scope.user = response.data;
            };

            function onError(error) {
                $scope.error = "Sorry, could not load the request, " + error;
            };
            $http.get("https://api.github.com/users/wesbos").then(onSuccess, onError);
        }
        app.controller('MainController', ["$scope", "$http", MainController]);
    }());
</script>

</html>
```

**NG-CLICK/NG-SUBMIT**

```html
<!DOCTYPE html>
<html ng-app="testApp">

<body ng-controller="MainController">
    <div ng-if="error">{{ error }}</div>
    <form name="searchUser" ng-submit="submitUser()">
        <label for="inputUser">Search <span ng-if="username">for {{username}}:</span></label>
        <input id="inputUser" type="search" placeholder="Find a user on Github" ng-model="username" required>
        <button type="submit">Submit</button>
    </form>
    <div ng-if="user">
        <p ng-if="user.name">Name: {{user.name}}</p>
        <p ng-if="user.location">Location: {{user.location}}</p>
        <p ng-if="user.avatar_url">Image: <img ng-src="{{user.avatar_url}}" alt="{{user.name}}" /></p>
    </div>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.min.js"></script>
<script type="text/javascript">
    (function() {
        var app = angular.module('testApp', []);

        function MainController($scope, $http) {
            function onSuccess(response) {
                $scope.user = response.data;
            };

            function onError(error) {
                $scope.error = "Sorry, could not load the request, " + error;
            };

            $scope.submitUser = function() {
                $http.get("https://api.github.com/users/" + $scope.username).then(onSuccess, onError);
            }
        }
        app.controller('MainController', ["$scope", "$http", MainController]);
    }());
</script>

</html>
```

**NG-REPEAT**

```html
<!DOCTYPE html>
<html ng-app="testApp">

<body ng-controller="MainController">
    <div ng-if="error">{{ error }}</div>
    <form name="searchUser" ng-submit="submitUser()">
        <label for="inputUser">Search <span ng-if="username">for {{username}}:</span></label>
        <input id="inputUser" type="search" placeholder="Find a user on Github" ng-model="username" required>
        <button type="submit">Submit</button>
    </form>
    <div ng-if="user">
        <p ng-if="user.name">Name: {{user.name}}</p>
        <p ng-if="user.location">Location: {{user.location}}</p>
        <p ng-if="user.avatar_url">Image: <img ng-src="{{user.avatar_url}}" alt="{{user.name}}" /></p>
        <ul>
            <li ng-repeat="repo in repos">
                <p>Name: {{repo.name}}</p>
                <p>Stars: {{repo.stargazers_count | number}}</p>
            </li>
        </ul>
    </div>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.min.js"></script>
<script type="text/javascript">
    (function() {
        var app = angular.module('testApp', []);

        function MainController($scope, $http) {
            function onSuccess(response) {
                $scope.user = response.data;
                $http.get($scope.user.repos_url).then(onReposSuccess, onError);
            };

            function onReposSuccess(response) {
                $scope.repos = response.data;
            };

            function onError(error) {
                $scope.error = "Sorry, could not load the request, " + error;
            };

            $scope.submitUser = function() {
                $http.get("https://api.github.com/users/" + $scope.username).then(onSuccess, onError);
            }
        }
        app.controller('MainController', ["$scope", "$http", MainController]);
    }());
</script>

</html>
```

**FILTERS/NG-SHOW/NG-HIDE**

```html
<!DOCTYPE html>
<html ng-app="testApp">

<body ng-controller="MainController">
    <p>You have {{limit.resources.core.remaining}} chances remaining to request the Github API. <span ng-if="limit.resources.core.remaining === 0">Your API request will renew in {{currentLimit}}.</span></p>
    <div ng-if="error">{{ error }}</div>
    <form name="searchUser" ng-submit="submitUser()">
        <label for="inputUser">Search <span ng-if="username">for {{username}}:</span></label>
        <input id="inputUser" type="search" placeholder="Find a user on Github" ng-model="username" required>
        <button type="submit">Submit</button>
        <div ng-show="user">
            <hr>
            <select ng-model="sortOrder">
                <option value="+stargazers_count">Stars (Ascending)</option>
                <option value="-stargazers_count">Stars (Descending)</option>
            </select>
        </div>
    </form>
    <div ng-show="user">
        <p ng-if="user.name">Name: {{user.name}}</p>
        <p ng-if="user.location">Location: {{user.location}}</p>
        <p ng-if="user.avatar_url">Image: <img ng-src="{{user.avatar_url}}" alt="{{user.name}}" /></p>
        <ul>
            <li ng-repeat="repo in repos | orderBy:sortOrder">
                <p>Name: {{repo.name}}</p>
                <p>Stars: {{repo.stargazers_count | number}}</p>
            </li>
        </ul>
    </div>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.min.js"></script>
<script type="text/javascript">
    (function() {
        var app = angular.module('testApp', []);

        function MainController($scope, $http) {
            $scope.sortOrder = '+stargazers_count';
            $http.get("https://api.github.com/rate_limit").then(getLimit, onError);

            function getUser(response) {
                $scope.user = response.data;
                $http.get($scope.user.repos_url).then(getRepos, onError);
            };

            function getLimit(response) {
                var calculateTime = function(unixTimestamp) {
                    var date = new Date(unixTimestamp);
                    var hours = date.getHours();
                    var minutes = "0" + date.getMinutes();
                    var seconds = "0" + date.getSeconds();
                    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                    return formattedTime;
                };
                $scope.limit = response.data;
                $scope.currentLimit = calculateTime($scope.limit.resources.core.reset);
            };

            function getRepos(response) {
                $scope.repos = response.data;
            };

            function onError(error) {
                $scope.error = "Sorry, could not load the request.";
            };

            $scope.submitUser = function() {
                $http.get("https://api.github.com/users/" + $scope.username).then(getUser, onError);
            }
        }
        app.controller('MainController', ["$scope", "$http", MainController]);
    }());
</script>

</html>
```

## Requirements

* Add script that loads AngularJS in your web application using the following code:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.min.js"></script>
```
* Bootstrap your web application into Angular application by declaring a directive named `ng-app` on container HTML tag that holds your application.

## References

* [AngularJS](https://angularjs.org/).
* [Built with AngularJS](https://www.madewithangular.com/categories/angularjs/).

# Front End Developer Guide

Career path: [Link](https://medium.com/tech-tajawal/modern-frontend-developer-in-2018-4c2072fa2b9c).

## Save your Eyes (Macbook Users)

* Flux: [Download](https://justgetflux.com/).

## Shopify

* Short courses: [Link](https://www.youtube.com/channel/UCcYsEEKJtpxoO9T-keJZrEw/playlists).

## Books

* Soft skills: [Link](https://www.amazon.com/Soft-Skills-software-developers-manual/dp/1617292397#customerReviews).
* How to Win Friends and Influence People: [Link](http://tinyurl.com/y2me2qc3).
* Learn Vanilla JavaScript: [Link](https://github.com/Mybridge/learn-javascript).
* JavaScript. The Core: 2nd Edition: [Link](http://dmitrysoshnikov.com/ecmascript/javascript-the-core-2nd-edition).

## Browsers

* How browsers work?: [Link](https://www.thecssninja.com/browser/jsconfeu15) | [Link](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/).
* Chrome Dev Tools: [Link](https://developers.google.com/web/tools/chrome-devtools/).
* Firefox Dev Tools: [Link](https://developer.mozilla.org/en-US/docs/Tools).

## Communities

* FreeCodeCamp All courses: [Link](https://tinyurl.com/fccall19).
* FreeCodeCamp Curriculum: [Link](https://learn.freecodecamp.org/).
* FreeCodeCamp Forum: [Link](https://forum.freecodecamp.org/).
* Scrimba [freeCodeCamp]: [Link](https://scrimba.com/ux7kQtZ).
* Hackernews: [Link](https://news.ycombinator.com/).
* Dev.TO: [Link](https://dev.to/).
* JS State 2018: [Link](https://2018.stateofjs.com/).
* FEDH2019: [Link](https://frontendmasters.com/books/front-end-handbook/2019/).
* Odin: [Link](https://www.theodinproject.com/).
* Hongkiat: [Link](https://hongkiat.com).
* FEDs: [Link](https://feds.slack.com).
* Rithm School: [Link](https://www.rithmschool.com/courses).

## Development Environment

* Development Environment: [Link](https://www.youtube.com/watch?v=K8tsFn9HbAQ).
* VS Code: [Link](https://code.visualstudio.com/download).
* Settings Sync (VS Code Extension): [Link](https://github.com/shanalikhan/code-settings-sync).
* Gogh (Terminal Themes for Ubuntu): [Link](https://github.com/Mayccoll/Gogh).
* Setup source file on Ubuntu: [Link](https://github.com/tpkahlon/source-files).
* IE/Edge Boxes: [Link](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/).
* Babel REPL (VS Code Extension): [Link](https://marketplace.visualstudio.com/items?itemName=t-sauer.vscode-babel-repl).
* Export path for Yarn: [Link](https://github.com/vuejs/vue-cli/issues/2404).
* WebStorm (IDE): [Link](http://www.jetbrains.com/webstorm/).
* NetBeans (IDE): [Link](https://netbeans.org/).
* Visual Studio Community (IDE): [Link](https://visualstudio.microsoft.com/vs/community/).
* Atom (Code Editor): [Link](https://atom.io/).
* Sublime Text (Code Editor): [Link](http://www.sublimetext.com/).
* NotePad++ (Code Editor): [Link](https://notepad-plus-plus.org/).
* VIM (Terminal): [Link](https://www.vim.org/).
* GNU EMacs (Terminal): [Link](https://www.gnu.org/software/emacs/).
* Explain Shell: [Link](https://explainshell.com).
* Console commands cheat-sheet: [Link](https://blog.teamtreehouse.com/mastering-developer-tools-console).
* Sudo permission fix (Node) for Mac/Ubuntu: [Link](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).
* Awesome Stacks: [Link](https://github.com/stackshareio/awesome-stacks).
* Ownership: [Link](https://stackoverflow.com/questions/50639690/on-npm-install-unhandled-rejection-error-eacces-permission-denied).
* Mac Apps: [Link](https://github.com/nikitavoloboev/my-mac-os).

## Git

* Oh Shit Git: [Link](https://ohshitgit.com/).
* Choose a License: [Link](https://choosealicense.com/).
* Terminal reference: [Link](https://www.learnenough.com/command-line-tutorial).
* GH Pages issues: [Link](https://stackoverflow.com/questions/11577147/how-to-fix-http-404-on-github-pages).

## HTML / CSS

* Basic HTML/HTML5: [Link](https://scrimba.com/playlist/pVMPUv).
* Google style guide: [Link](https://github.com/google/styleguide).
* Airbnb/CSS: [Link](https://github.com/airbnb/css).
* OOCSS: [Link](https://github.com/stubbornella/oocss/wiki) | [Link](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/).
* BEM: [Link](https://css-tricks.com/bem-101/) | [Link](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/).
* CSS Specificity: [Link](https://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/).
* Responsive Web Design: [Link](https://alistapart.com/article/responsive-web-design).
* Picture Tag: [Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture).
* Legacy way of designing Column based grid using Floats: [Link](https://css-tricks.com/dont-overthink-it-grids/).
* Legacy way to solve equal height columns issue in a Grid: [Link](https://css-tricks.com/fluid-width-equal-height-columns/).
* Legacy way to rearrange columns in a float based grid: [Link](https://webdesign.tutsplus.com/tutorials/a-few-different-css-methods-for-column-ordering--cms-27079).
* Box sizing: Border-box Override: [Link](https://www.paulirish.com/2012/box-sizing-border-box-ftw/).
* What does min-height:1px; do in a legacy grid system? [Link](https://css-tricks.com/make-sure-columns-dont-collapse-horizontally/).
* CanIUse.com: [Link](https://caniuse.com/).
* Flexbox: [Link](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox).
* Flexbox Games: [Link](https://flexboxfroggy.com/) | [Link](http://www.flexboxdefense.com/).
* Flexbox based Grid framework: [Link](http://flexboxgrid.com/).
* Picture element: [Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture).
* Picture polyfill: [Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture).
* Media Query & Asset Downloading Results: [Link](https://timkadlec.com/2012/04/media-query-asset-downloading-results/).
* CSS grid polyfills: [Link](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) | [Link](https://github.com/FremyCompany/css-grid-polyfill) | [Link](https://github.com/codler/Grid-Layout-Polyfill) | [Link](https://rachelandrew.co.uk/css/cheatsheets/grid-fallbacks).
* Basic CSS: [Link](https://scrimba.com/playlist/pPK9Cq).
* Applied Visual Design: [Link](https://scrimba.com/playlist/pJ5rC6).
* Responsive Web Design Principles: [Link](https://scrimba.com/playlist/pzrPu4).
* Accesskey: [Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey).
* Flexbox: [Link](https://scrimba.com/playlist/pVaDAv).

## JavaScript

* Learn DOM Manipulation: [Link](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).
* Syntax and Basic Constructs: [Link](https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5).
* ES6+ and Modular JavaScript: [Link](https://www.youtube.com/watch?v=1mgLWu69ijU&list=PLWKjhJtqVAbljtmmeS0c-CEl2LdE-eR_F).
* Understand the concepts: Hoisting, Event Bubbling, Scope, Prototype, Strict: [Link](http://javascript.info/).
* Hoisting: [Link](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting).
* Short circuit evaluation: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation).
* Conditional operation chaining: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).
* Foreach: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).
* Spread operator: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).
* Deep copy (Array): [Link](https://medium.com/@ziyoshams/deep-copying-javascript-arrays-4d5fc45a6e3e) | [Link](https://stackoverflow.com/questions/597588/how-do-you-clone-an-array-of-objects-in-javascript).
* Turn off JS: [Link](https://blog.codepen.io/documentation/features/turn-off-javascript-in-previews/).
* For...of: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).
* Map: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
* Filter: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).
* Reduce: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).
* Some: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some).
* Every: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).
* Find: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
* Find Index: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex).
* Objects: [Link](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics).
* Closures: [Link](https://youtu.be/1JsJx1x35c0?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5) | [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures).
* This: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) | [Link](https://youtu.be/eOI9GzMfd24?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5).
* Call: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call).
* Apply: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply).
* Bind: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind).
* Polyfill: [Link](https://polyfill.io/v3/) | [Link](https://babeljs.io/docs/en/babel-polyfill/).
* Debugging: [Link](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/debugging).
* JavaScript Engine: [Link](https://en.wikipedia.org/wiki/JavaScript_engine).
* CoffeeScript: [Link](https://coffeescript.org/).
* TypeScript: [Link](http://www.typescriptlang.org/).
* Dart: [Link](https://www.dartlang.org/).
* Learning ES6: [Link](https://www.lynda.com/JavaScript-tutorials/Learning-ECMAScript-6/424003-2.html).
* JavaScript for Cats: [Link](http://jsforcats.com/).
* JavaScript.info: [Link](http://javascript.info).
* Automatic Semicolon Insertion: [Link](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion).
* Operator Precedence: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence).
* Bitwise Operators: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators).
* Standard JS: [Link](https://github.com/standard/standard).
* Idiomatic JS: [Link](https://github.com/rwaldron/idiomatic.js).
* Airbnb JS: [Link](https://github.com/airbnb/javascript).
* Google JS: [Link](https://google.github.io/styleguide/jsguide.html).
* JS Lint: [Link](https://github.com/douglascrockford/JSLint).
* JS Hint: [Link](https://github.com/jshint/jshint).
* ES Lint: [Link](https://github.com/eslint/eslint).
* JS Doc: [Link](https://en.wikipedia.org/wiki/JSDoc) | [Link](http://usejsdoc.org/).
* ES Table: [Link](https://kangax.github.io/compat-table/es6/).
* Operators Reference: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators).
* Parcel JS: [Link](https://parceljs.org/).
* Webpack: [Link](http://webpack.github.io/).
* Brunch: [Link](https://brunch.io/).
* Babel: [Link](https://babeljs.io/).
* Clean Code JavaScript: [Link](https://github.com/ryanmcdermott/clean-code-javascript).
* RxJS: [Link](https://www.learnrxjs.io/).
* Lambda: [Link](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html).
* Underscores: [Link](https://underscorejs.org/).
* Functional Programming: [Link](https://en.wikipedia.org/wiki/Functional_programming).
* What is JSON?: [Link](https://youtu.be/GpOO5iKzOmY) | [Link](https://youtu.be/B-k76DMOj2k?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5).
* AJAX: [Link](https://youtu.be/tHRNuBf_8xg) | [Link](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX).
* Fetch API: [Link](https://youtu.be/tVQgfKqbX3M) | [Link](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

## Podcasts

* Syntax.fm: [Link](https://syntax.fm/).
* Code Newbie: [Link](https://www.codenewbie.org/podcast/).
* Front End Happy Hour: [Link](https://frontendhappyhour.com).
* Shop Talk: [Link](https://shoptalkshow.com/).
* Full Stack Radio: [Link](http://www.fullstackradio.com/).
* Frameworks: [Link](https://www.codenewbie.org/podcast/which-javascript-framework-should-you-learn).

## Mentors

* How to become a Developer: [Link](https://www.freecodecamp.org/news/how-to-become-a-developer/).
* What I learned after 100 solid days of coding every day: [Link](https://www.freecodecamp.org/news/what-i-learned-after-100-solid-days-of-coding-every-day/).
* Day in the life of a PayPal software engineer: [Link](https://www.freecodecamp.org/news/day-in-the-life-paypal-software-engineer/).
* Programmers Oath: [Link](https://www.youtube.com/playlist?list=PLWKjhJtqVAbno-B4RmJHCDO0ZUKC2tpUQ).
* Learning path to programming: [Link](https://www.youtube.com/playlist?list=PLWKjhJtqVAbnUeereoJWjWOhlcWUynq_Z).

## Networking concepts

* What is DNS, hows does it work?: [Link](https://www.youtube.com/watch?v=72snZctFFtA) | [Link](https://www.youtube.com/watch?v=5o8CwafCxnU&index=3&list=PLzdnOPI1iJNfMRZm5DDxco3UdsFegvuB7).
* What is HTTP, how does it work?: [Link](https://youtu.be/PUPDGbnpSjw).
* REQ/RES Rest API: [Link](https://reqres.in/).
* Postman: [Link](https://www.getpostman.com/).
* Insomnia Rest: [Link](https://insomnia.rest/).
* Rest Client (VS Code Extension): [Link](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).
* HTTP Status Codes: [Link](https://github.com/waldemarnt/http-status-codes).
* HTTP: [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP).
* Same Origin Policy: [Link](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).
* COMET: [Link](https://tinyurl.com/6molmsv).

## Videos

* Complete set of full course by freeCodeCamp for Front-end developers: [Link](http://tinyurl.com/yxtt7c3y).

## VueJS

* VueJS: [Link](https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance/).

## React

* Introduction: [Link](https://reactjs.org/tutorial/tutorial.html).
* Full course: [Link](https://youtu.be/DLX62G4lc44?list=PLWKjhJtqVAbnupwRFOq9zGOWjdvPRtCmO).
* React and Virtual DOM: [Link](https://www.youtube.com/watch?v=BYbgopx44vo).
* React Events: [Link](https://reactjs.org/docs/events.html#supported-events).
* React LifeCycle methods: [Link](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1).
* React Router (Routing and Navigation): [Link](https://reacttraining.com/react-router/web/guides/quick-start).
* React DOM Server (Server Side Rendering): [Link](https://reactjs.org/docs/react-dom-server.html).
* Redux (State Management): [Link](https://redux.js.org/).
* React Native (Mobile): [Link](https://facebook.github.io/react-native/).
* React Motion (Animation): [Link](https://github.com/chenglou/react-motion).
* React Developer Tools (Testing and Debugging): [Link](https://github.com/facebook/react-devtools).
* Jest (Testing and Debugging): [Link](https://jestjs.io/).
* propTypes (Types): [Link](https://reactjs.org/docs/typechecking-with-proptypes.html).
* Flow (Types): [Link](https://flow.org/en/docs/react/).
* Deployment: [Link](https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a).
* Examples: [Link](https://learn.freecodecamp.org/front-end-libraries/react).

# GraphQL

GraphQL query language is used to fetch data from servers, is superior to REST.

## Github GraphQL API

Following is the visual representation of GraphQL queries developed by Github.

Test GraphQL Queries: [View Source](https://developer.github.com/v4/explorer/).

## Queries

### Creating a simple query

`Viewer` query returns data related to the logged in Github user. You can add comment in GraphQL query using `#` sign. If you run the following query, a JSON representation is returned that look similar in the structure with query itself.

If you would like to see all the fields present in the viewer object, Hit `Control` followed by `Space` to see auto complete list.

Always use double quotes for values.

`Prettify` buttons allows you to indent the query.

```graphql
{
  # I am a comment...
  viewer {
    url
  }
}
```

### Using multiple fields in a query

Following query allows us to fetch two different fields.

```graphql
{
  viewer {
    name
    id
  }
}
```

### Arguments in a query

Following query allows us to specify arguments in a query.

```graphql
{
  repositoryOwner(login: "wesbos") {
    id
    avatarUrl
    login
    resourcePath
  }
}
```

### Important Arguments in a query

Following query forces us to use required arguments to fetch a query. If any of the argument like `name` or `owner` is missing, an error is generated.

```graphql
{
  repository(name: "react", owner: "facebook") {
    nameWithOwner
    description
    homepageUrl
  }
}
```

## Schemas

GraphQL Schema provides object types used in your data. It highlights types for all values. You can access it by clicking `Docs` link in the GraphiQL API.

### Types

There are `Integer`, `Float`, `String`, `Boolean`, `Null`, `Enum`, `List` and `Object` types. Usage of `Exclamation` symbol after the type means that it is required.

You can list fields in schema using the following example.

```graphql
{
  __schema {
    queryType {
      name
      description
      fields {
        name
        description
        isDeprecated
        deprecationReason
      }
    }
  }
}
```

You can list individual field using the following example.

```graphql
{
  __type(name: "Repository") {
    name
    kind
    description
  }
}
```

## Handling Data

### Aliases

Aliases example:

```graphql
{
  reactSite: repository(owner: "facebook", name:"react") {
    homepageUrl
    description
    createdAt
  }
  graphqlSite: repository(owner: "facebook", name:"graphql") {
    homepageUrl
    description
    createdAt
  }
}
```

### Fragments

Fragments example:

```graphql
{
  reactSite: repository(owner: "facebook", name: "react") {
    ...details
  }
  graphqlSite: repository(owner: "facebook", name: "graphql") {
    ...details
  }
}

fragment details on Repository {
  homepageUrl
  description
  createdAt
}
```

### Nested Fields

Nested fields example:

```graphql
{
  repository(name: "critical", owner: "addyosmani") {
    name
    description
    createdAt
    watchers(first: 5) {
      edges {
        node {
          location
        }
      }
    }
    releases(last: 5) {
      edges {
        node {
          name
          publishedAt
        }
      }
    }
  }
}
```

### Pagination

Pagination example:

```graphql
{
   viewer {
    repositories(last: 5, isFork: false, privacy: PUBLIC) {
      edges {
        node {
          name
        }
      }
    }
  }
}
```

## Operations and Variables

### Operation Names

Operation Names Example:

```graphql
query FirstFiveOrgMembers {
  organization(login: "airbnb") {
    name
    location
    websiteUrl
    membersWithRole(first: 5) {
      edges {
        node {
          name
        }
      }
    }
  }
}
```

### Variable Definitions

Variable Definitions Example:

```graphql
query FirstFiveOrgMembers($login: String!) {
  organization(login: $login) {
    name
    location
    websiteUrl
    membersWithRole(first: 5) {
      edges {
        node {
          name
        }
      }
    }
  }
}
```

### Multiple Variable Definitions

Multiple Variable Definitions Example:

```graphql
query FirstFiveOrgMembers($login: String!, $n: Int!) {
  organization(login: $login) {
    name
    location
    websiteUrl
    membersWithRole(first: $n) {
      edges {
        node {
          name
        }
      }
    }
  }
}
```

## Mutations

Mutation Adding a Comment Examples (Get Subject ID and Mutate):

```graphql
query GetComment {
  repositoryOwner(login: "tpkahlon") {
    repository(name: "graphql-guide") {
      issues(first: 5) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
}
```

```graphql
mutation NewComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    subject {
      id
    }
  }
}
```

Mutation Adding a Reaction Example (Get Subject ID and Mutate):

```graphql
query GetComment {
  repositoryOwner(login: "tpkahlon") {
    repository(name: "graphql-guide") {
      issues(first: 5) {
        edges {
          node {
            id
            comments(first: 5) {
              edges {
                node {
                  id
                  body
                }
              }
            }
          }
        }
      }
    }
  }
}
```

```graphql
mutation NewReaction($input: AddReactionInput!){
  addReaction(input:$input) {
    reaction {
      content
    }
  }
}
```

# Custom Theme Development Environment (WordPress)

Follow these steps to get up and running with WordPress development locally:

1. Download Virtualbox and Vagrant.
2. Install Vagrant Dependency Plugin: `vagrant plugin install vagrant-hostsupdater --local`
3. Clone VVV: `mkdir ~/VVV && cd VVV && git clone --bare https://github.com/Varying-Vagrant-Vagrants/VVV.git .`
4. Run `vagrant up --provision` to provision VVV stack.
5. Read this [link](https://varyingvagrantvagrants.org/docs/en-US/adding-a-new-site/) to add a new development site.
6. Once you have added a new development site, run `vagrant reload --provision`.
7. Next time run the machine using `vagrant up` and close the machine using `vagrant suspend`.

### Some Cool Tricks:

- Run `vagrant ssh` and `cd /srv/www/YOUR_SITE`. In your site, you can upgrade WordPress using `wp core update && wp core upgrade` like that. You can add new plugins like `wp plugin install developer --activate`, deactivate a plugin like `wp plugin deactivate developer` and remove a plugin like `wp plugin uninstall developer`.

### Necessary Plugins:

- Developer | [Install Plugin](https://en-ca.wordpress.org/plugins/developer/)
- Check Current Template | [Install Plugin](https://wordpress.org/plugins/show-current-template/)

### References:

- WP Beaches | [Setting up a WordPress VVV2 Vagrant Workflow](https://wpbeaches.com/setting-up-a-wordpress-vvv-vagrant-workflow/)
- Varying Vagrant Vagrants | [Download](https://github.com/Varying-Vagrant-Vagrants/VVV)
- Virtualbox | [Download](https://www.virtualbox.org/wiki/Downloads)
- Vagrant | [Download](https://www.vagrantup.com/downloads.html)
- Custom Shell Scripts | [Download](https://github.com/tpkahlon/unix-toolkit)
- VVV Dashboard | [Download](https://github.com/topdown/VVV-Dashboard)

### WordPress Manual:

- WP Theme Development | [Read docs](https://codex.wordpress.org/Theme_Development)
- WP Hierarchy | [Read docs](https://wphierarchy.com/)
- Understand WordPress theme structure: [Read docs](https://themeshaper.com/2012/10/22/the-themeshaper-wordpress-theme-tutorial-2nd-edition/)

# Shortcuts for Microsoft's VS Code

A library of helpful extensions.

1. Beautify
2. ESLint
3. IntelliSense for CSS class names
4. MJML-syntax
5. Pug (Jade) snippets
6. Pug Beautify
7. VSCode-Icons

# Shortcuts for WordPress

A library of helpful links to use with WordPress.

1. <a href="http://www.wpbeginner.com/wp-tutorials/how-to-disable-wordpress-admin-bar-for-all-users-except-administrators/" target="_blank">Disable WordPress Admin bar</a>.
2. <a href="http://www.wpbeginner.com/wp-tutorials/how-to-disable-post-revisions-in-wordpress-and-reduce-database-size/" target="_blank">Disable WordPress Posts revisions</a>.

A library of helpful plugins to use with WordPress.

1. <a href="https://wordpress.org/plugins/w3-total-cache/" target="_blank">W3 Total Cache</a>.
2. <a href="https://wordpress.org/plugins/bulletproof-security/" target="_blank">BulletProof Security</a>.
3. <a href="https://wordpress.org/plugins/custom-post-type-ui/" target="_blank">Custom Post Type UI</a>.
4. <a href="https://wordpress.org/plugins/duplicator/" target="_blank">Duplicator</a>.
5. <a href="https://wordpress.org/plugins/show-current-template/" target="_blank">Show Current Template</a>.
6. <a href="https://wordpress.org/plugins/jetpack/" target="_blank">Jetpack</a>.

A library of accessible plugins to use with WordPress.

1. <a href="https://wordpress.org/plugins/wp-tota11y/" target="_blank">WP Tota11y</a>.
2. <a href="https://en-ca.wordpress.org/plugins/access-monitor/" target="_blank">Access Monitor</a>.
3. <a href="https://en-ca.wordpress.org/plugins/wp-accessibility/" target="_blank">WP Accessibility</a>.
4. <a href="https://wave.webaim.org/" target="_blank">WAVE - Web Accessibility Evaluation Tool</a>.

# ES6 Guide with Emojis

## Course Credits

- FreeCodeCamp
- Dylan Israel
- Course Link: [View](https://www.youtube.com/watch?v=nZ1DMMsyVyI).

## TOC

- Template Literals
- Destructuring
- Object Literal
- For of loop
- Spread operator
- Rest operator
- Arrow Functions
- Default Params
- Array.includes
- Let & const
- Export & import
- String.padStart(), String.padEnd()
- Classes
- Trailing commas
- Async/Await
- Sets

## Template Literals

```javascript
const fruit = "🍌";
const milk = "🥛";
const bananaShake = (fruit, milk) => `(${fruit}) Banana (${milk}) Milk shake is ready.`;
console.log(`${bananaShake(fruit, milk)}`);
```

## Destructuring

### Objects

```javascript
const purchasedItems = {
  fruit: "🍇",
  vegetable: "🥕",
  bakery: "🍪"
};
const { bakery } = purchasedItems;
console.log(`Hungry? How about try a ${bakery}?`);
```

### Arrays

```javascript
const cart = ["🍇", "🥕", "🍪", "🥩"];
const [item] = cart;
console.log(`Cashier scanned ${item} first.`);
```

## Object Literal

```javascript
const boilEgg = (egg, water, salt) => {
  const recipe = {
    egg,
    water,
    salt
  };
  console.log(`Get a saucepan, Add 3 cups ${recipe.water} and a pinch of ${recipe.salt}. Throw ${recipe.egg} and boil for 10 minutes.`);
}
boilEgg("🥚", "🚰", "🧂");
```

## For of loop

```javascript
let bill = 0;
const receipt = [1.99, 13.67, 14.21, 5.27];
for(const item of receipt) {
  bill += item
};
console.log(`Your total bill is $${bill}.`);
```

## Spread operator

```javascript
const purchasedItems = {
  fruit: "🍇",
  vegetable: "🥕",
  bakery: "🍪"
};
const juiceRecipe = {
  ...purchasedItems,
  kitchen: "sugar",
  device: "blender"
};
console.log(`Trying a ${juiceRecipe.vegetable} juice.`);
```

## Rest operator

```javascript
const cart = [];
const addItem = (...items) => console.log(`${items} added in the card. Total items in the cart: ${items.length}.`);
addItem("🍎","🥭","🍍","🍌");
```

## Arrow Functions

```javascript
const shoppingBag = [
  {id: 1, name: "🥭", type: "fruit"},
  {id: 2, name: "🍎", type: "fruit"},
  {id: 3, name: "🍌", type: "fruit"},
  {id: 4, name: "🥕", type: "vegetable"}
];
const findVegetable = shoppingBag.filter(item => item.type === "vegetable");
findVegetable ? console.log(`${findVegetable.length} vegetable found in the bag.`) : console.log("Forgot to buy vegetables.");
```

## Default Params

```javascript
const readyToCheckout = (limit = 10) => limit <= 10 ? console.log(`Today, shopping was in budget.`) : console.log(`Today, lot of items were bought.`)
readyToCheckout(23);
```

## Array.includes

```javascript
const receipt = ["🍎","🥭","🍍","🍌"];
receipt.includes("🍌") ? console.log(`You bought bananas?`) : console.log(`How come there are no bananas?`);
```

## Let & const

```javascript
let apple;
apple = "🍏";
console.log(`Green Apple: ${apple}`);
apple = "🍎";
console.log(`Red Apple: ${apple}`);
const banana = "🍌";
console.log(`Banana: ${banana}`);
banana = "🌯"; // WRONG
```

## Export & import

- Example: [View source](https://codesandbox.io/s/practical-water-mnzjj).

## String.padStart(), String.padEnd()

```javascript
let apple = "🍏";
let banana = "🍌";
const dozenApples = apple.padStart(12, apple);
const dozenBananas = banana.padEnd(12, banana);
console.log(`Buy dozen apples: ${dozenApples}. Total apples: ${dozenApples.length}`);
console.log(`Buy dozen bananas: ${dozenBananas}. Total bananas: ${dozenApples.length}`);
```

## Classes

- Example: [View source](https://codesandbox.io/s/naughty-frost-lrj7t).

## Trailing commas

Trailing commas after function arguments, object declaration works, is not recommended.

## Async/Await

- Example: [View source](https://codesandbox.io/s/cool-tdd-m7pw1).

## Sets

```javascript
let cart = new Set(["🍇", "🥕", "🍪", "🍪", "🍪", "🍪", "🥩"]);
console.log(`Total unique items in the cart: ${cart.size}`);
```