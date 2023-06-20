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
