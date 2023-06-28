# NamasteReact
What is NPM?
It is a standard repository which consists of all packages which we need in any of our projects. It a package manager for managing/maintaining all different packages which it has(like versions etc). To use any package of consisting in npm, we need to first initialize npm(npm init) in our proj folder and then use npm i/install packagename for installing it in our proj. As a matter of fact, NPM doesnot abbreviate to Node package manager.

What is parcel/webpack? why do we need it?
Parcel or webpack are bundlers. Bundler are tools which are used to bundle/binds/minifies/compresses all our code and its dependencies together and creates a new JS output which can used by the web browsers. Compiler is converts high level code to machine readable code, so its not similar to bundler, which just compresses files into a single file for web use. 
more references : https://gist.github.com/joepie91/3381ce7f92dec7a1e622538980c0c43d
https://dev.to/underscorecode/javascript-bundlers-an-in-depth-comparative-is-webpack-still-the-best-bundler-in-2021-59jk

What is ".parcel-cache" file when we build the proj?
It is a file created by parcel when it is build. It contains also the info related to the build and so when we rebuild the project again and again there is a significant decrease in the time it takes, that is because parcel uses the cache file for rebuilding, instead of re-parsing, re-analysing its build from scratch.
https://stackoverflow.com/questions/60695778/what-is-the-cache-folder-in-parcel-bundler-is-it-necessary-to-push-the-cache

What is npx?
NPX is a command in npm to execute a package without even installing it. It is a npm package runner. It is instslled directly when npm is initailized.
https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm#:~:text=NPX%20is%20an%20npm%20package,used%20to%20execute%20the%20packages.

What is the difference between "dependencies" and "devDependencies"?
Dependencies are the installed using the command "npm i/install packagename", which means the packages are available throughout during the development as well as production phase on web. Whereas devDependencies are installed using the command "npm i/install -D packagename", which means the packages are available only during the development on web.

What is Tree Shaking feature of parcel?
When we install many packages in our project, there'll be a lot of funcs(more than 500 or so) and all of them wouldnt be needed in our project, so tree shaking is the idea where these unwanted functions are removed and only the required functions are kept in our project which makes our fast.
https://medium.com/@netxm/what-is-tree-shaking-de7c6be5cadd

what is HOT module replacement?
It is the feature of refreshing/reloading the webpage without a full reload upon saving changes in our code. This is done by using a file watching algorithm which is writteen in c++. HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh.
https://stackoverflow.com/questions/24581873/what-exactly-is-hot-module-replacement-in-webpack
https://parceljs.org/features/development/

List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words:
Hot Module Replacement : Where the web app is refreshes/reloaded when there are any changes made.
Faster build time: Decrease in the time taken for every build because of cache the previous builds.
Differential Bundling: Parcel bundles the files for different browsers and its versions. As a result we can run our app on different browsers(even the very old ones)
Diagnostics: If theres an error in our code, Parcel displays the error beautifully and highlights where the error is occurred along with hints to fix it.
Image optimization: Parcel does conversion, resizing and otimization of pictures.
Code Splitting: When multiple parts of our code depend on same common modules, these files are automatically duplicated into separate bundles.This allows commonly used dependencies to be loaded in parallel with your application code and cached separately by the browser!
Transpilation: Parcel transpiles your JavaScript and CSS for your target browsers automatically! Just declare a browserslist in your package.json, and Parcel takes care of transpiling only what's needed.
https://parceljs.org/

What is .gitignore? What should we add in it and not add into it?
.gitignore file consists of the file names that dont need to be checked into the github repository. The node_modules folder, the .parcel cache folder and the dist folder or added in to it as they are not required to be in github, as they can be generated on the uses system as well. As well as the ones which have confidential info can be added here. The source code files, package.json and package-lock.json shouldnt be added here as we need them in github. With the help of package.json and lock.json we can install the dependencies based on it.

What is the difference  between "package.json" and "package-lock.json"?
Package.json is a versioning file used to install packages in our projects.It contains metadata about the project and functional dependencies that are required by the application.
Package-lock.json is created for locking the dependency of the installed version. It will install install the exact version of the package mentioned in this file to maintain consistency in all the projects that are being installed on various hosts.
https://www.geeksforgeeks.org/difference-between-package-json-and-package-lock-json-files/

Why should I not modify "package -lock.json"?
We should avoid updating the package. json manually since it could break the synchronization between package. json and package-lock. json

What is node modules? Is it a good idea to push this folder to git?
node modules are the files/code fetched and used in our project when a package is installed. It also contains dependencies related to our package(this is transitive dependency). It is a heavy folder and need not be added to git as it can be regenerated by installing the packages needed through package.json.

What is the dist folder?
dist folder contains all the dev build files mainly the HTML,CSS and JS files after optimization and compression that would be need to put our content on the web.

What is "browserslist"?
Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.
As javascript evolves, browsers won't support new features at the same pace, for instance not all browsers have built-in support for ES6 (aka ES2015). By using browserslist, transpilers/bundlers know what browsers you want to support, so they can "group" browsers in different categories and generate separate bundles
https://stackoverflow.com/questions/55510405/what-is-the-significance-of-browserslist-in-package-json-created-by-create-react

What is the difference between Caret^ and Tilda~ in package.json?
~version: “Approximately equivalent to version”, will update you to all future "patch versions", without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

^version: “Compatible with version”, will update you to all future "minor and patch versions", without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.
https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json

Read about Script types in HTML
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script

What is JSX?

JSX is Java Script syntax to create React elements with easy and in minimal steps. It is not part of React. React and JSX are different. We can build our apps using pure React as well but its quite complicated to understand and lengthy to create an element. 
JSX is using HTML and JS together in .js file to create REACT elements. JSX and HTML are purely different. JSX syntax looks like HTML but its not HTML.
JSX is purely REACT code which in turn is JS code. But the browser does not understand this JSX because it's not valid JavaScript code. This is because we're assigning an HTML tag to a variable that is not a string but just HTML code.
So to convert it to browser understandable JavaScript code, we use a tool like Babel which is a JavaScript compiler/transpiler.

**Using JSX:**

```
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

**Without using JSX:**

```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```
https://legacy.reactjs.org/docs/jsx-in-depth.html

Superpowers of JSX?

-Minimal expressions/steps to create a React element
-Easy to write and code, just like  HTML 
-Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

Role of Type attribute in script tag of HTML? What options can we use?

The type attribute specifies the type of the script. The type attribute identifies the content between the <script> and </script> tags. It has a Default value which is “text/javascript”.

**type attribute can be of the following types:**

text/javascript : It is the basic standard of writing javascript code inside the <script> tag.

**Syntax**

`<script type="text/javascript"></script>`

- text/ecmascript : this value indicates that the script is following the EcmaScript standards.
- module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- text/babel : This value indicates that the script is a babel type and required bable to transpile it.
- text/typescript: As the name suggest the script is written in TypeScript.

`{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}` in JSX.

- `{TitleComponent}`- Its the JSX variable being used in a JS code. This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` - This value describes TitleComponent as a JSX fucntional component being used in a JS code with {}. It returns a JSX value. A JSX functional component is just like a normal JS function which returns a JSX value. Always starts with capital letter. It is used with < />.
- `<TitleComponent></TitleComponent>` - This value is exactly same as the above JSX functional component only when {<TitleComponent/>} has no child components. The opening and closing tags are created to include the child components.

```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
  </TitleComponent>
```



