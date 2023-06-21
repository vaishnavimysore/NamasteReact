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
