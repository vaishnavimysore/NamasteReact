Assignment 10

1. Explore all the ways to write css.
   A:

1. Importing .css file to the react file
1. Inline css to the jsx elements using style attribute to it.
1. Using css modules- a CSS Module is a CSS file in which all class names and animation names are scoped locally by default
1. Styled Components is a third-party library that lets you design reusable custom HTML components with predefined CSS properties and use them anywhere you choose inside your project.
1. Tailwind CSS

1. How do we congifure tailwind?
   A:

https://tailwindcss.com/docs/configuration

https://tailwindcss.com/docs/installation

3. What does the keywords content, theme, extend, plugins mean in talwind.config.js?
   A:
   The content section of your tailwind.config.js file is where you configure the paths to all of your HTML templates, JavaScript components, and any other source files that contain Tailwind class names.

The theme section of your tailwind.config.js file is where you define your project’s color palette, type scale, fonts, breakpoints, border radius values, and more.
If you’d like to preserve the default values for a theme option but also add new values, add your extensions under the theme.extend key in your configuration file. Values under this key are merged with existing theme values and automatically become available as new classes that you can use.

Plugins let you register new styles for Tailwind to inject into the user’s stylesheet using JavaScript instead of CSS.

Imp Links: https://tailwindcss.com/docs/theme

4. Why do we have .postcssrc file?
   A:

PostCSS is a JavaScript tool that transforms your CSS code into an abstract syntax tree (AST) and then provides an API (application programming interface) for analyzing and modifying it using JavaScript plugins.

PostCSS provides a large ecosystem of plugins to perform different functionalities like linting, minifying, inserting vendor prefixes, and many other things.
