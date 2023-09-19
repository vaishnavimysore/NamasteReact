Assignment 9

1. When and why do we need lazy()?
   A:

We use lazy() when we want to lazy load a component. That is loading the .js compiled file only when the path is requested or clicked. This also known as dynamic loading, code splitting etc. Until then this file is not loaded for optimization purpose. Web optimization is the process of using controlled experimentations to improve the performance of a web application.

So when a user visits a web page, instead of loading the entire page, only a portion of it renders. Then, react lazy loading delays the remaining webpage until the user scrolls to that portion of the web page.

For example, if a web page has an image that the user has to scroll down to see, you can display a placeholder. Then, you can lazy load the full image only when the user arrives at that section where the image is.

React websites are built in chunks as components in different files. Then, they get imported to some other files to make up a web page. Bundling is the process of following these imported files and merging them into a single file which is known as a “bundle”. You can use tools like Webpack, Rollup or Browserify. This bundle can then be included on a webpage to load an entire app at once.

Syntax exmaple for dynamic import using lazy():
'''
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./components/Grocery")); //Grocery component is lazy loaded here/ loaded only when path is cliked

'''

Imp links: https://www.copycat.dev/blog/react-lazy/

2. What is suspense?
   A:

A component created using React lazy() is loaded only when it needs to be rendered. Therefore, you need to display some kind of placeholder content while the lazy component is being loaded . Such as a loading indicator so users know that there’s actually something loading that they need to wait for.

React Suspense component lets us show a loading indicator as a fallback prop while we’re waiting for the lazy component to load.

'''

      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}> //Shimmer UI is used here for Suspense/wait before loading the component
            <Grocery />
          </Suspense>
        ),
      },

'''

Imp links: https://www.copycat.dev/blog/react-lazy/

3. A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
   A:

Here, whenever the user types a character, we update the input value and use the new value to search the list and show the results. There are two different updates that need to happen. The first update is an urgent update, to change the value of the input field and, potentially, some UI around it. The second, is a less urgent update to show the results of the search.
Until React 18, all updates were rendered urgently. This means that the two state states above would still be rendered at the same time, and would still block the user from seeing feedback from their interaction until everything rendered. What we’re missing is a way to tell React which updates are urgent, and which are not.

So for telling React which rendering is urgent and which is non-urgent or telling it there is a transition, we use startTransition() API. The updates wrapped in this API will be considered as non urgent will be interrupted if more urgent updates like clicks or key presses come in. If a transition gets interrupted by the user (for example, by typing multiple characters in a row), React will throw out the stale rendering work that wasn’t finished and render only the latest update.

Transition updates transition the UI from one view to another.

Imp Links: https://github.com/reactwg/react-18/discussions/41

4. Advantages and Disadvantages of using this code splitting pattern?
   A:

Lazy loading is a technique that allows you to defer loading some components or resources until they are actually needed or requested by the user. This way, you can improve the performance and responsiveness of your app, as well as save bandwidth and battery life.

Adv:
Splitting the code into smaller chunks and loading them on demand can reduce the time it takes for your app to start, while loading only necessary code and resources can prevent memory leaks and crashes. Additionally, lazy loading components or resources that are not immediately visible or needed can improve the responsiveness and interactivity of your app, as well as avoid blocking the main thread or showing blank screens. Furthermore, splitting your code into smaller bundles can reduce the overall size of your app and the amount of code

Faster initial loading time
Lower memory usage
better user experience
Smaller app size

DisAdv:
Many network calls can be a problem when there is a slow connection
Additional code dependencies can increase the bundle size
Complexity in dev and testing process

5. When and why do we need suspense?
   A:
   Suspense is need when we are doing a lazy loading of a component and to have a good UI experience while loading the component/page.
