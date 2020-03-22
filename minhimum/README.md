# Minhimum

`Minhimum` is a utility dependency to build static prototypes on the fly.

Focus on structure of core `minhimum` files. Blanket of `npm` scripts to run this dependency may vary or can be revised with better approach (gulp, webpack etc.), depending on your needs.

## Objective

The primary objective of `Minhimum` is to remove dependency on CSS Frameworks by utilizing CSS modules available in latest browsers while taking advantage of utility classes.

It helps in building quick prototypes for your web application from ground up.

## Highlights

- `REM` unit is declared as core unit.
- Your stylesheets hold Grid/Flex controls only.
- `Minhimum` keeps utility declarations for all use cases.
- Variables declarations are in form of `.25x`, `.5x`, `1x`, `1.25x`, `1.5x` multiples.
- Responsive declaration is in range of `sm=30rem`, `md=40rem`, `lg=60rem`, `xl=70rem` multiples.
- Naming conventions align with `Bootstrap` for better readability.

## Usage

- Follow writing approach from BEM, SMACSS when building custom components.
- Use CSS Grid for layout.
- Use Flex for placement of child elements within a Grid.
- There are `utility` classes available to use in your `Pug/HTML` files.

## Learnings

- Media query cannot hold CSS variables. Once this feature is available, it will help in organic file structure.
- Avoid declaring `import` after `:root` declaration in nested files. It breaks stylesheet in browser.

## Upcoming Features

- Add utility classes to handle font sizes.
