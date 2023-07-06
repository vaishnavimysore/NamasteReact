Is JSX mandatory for React?
A: No, JSX is not mandatory for React but use of it simplifies and eases the use of lengthy code.
  JSX is an Extension syntax which is written as mix of both HTML and JS to create React elements. So anything that is done in JSX can also be done in 
  JS but with alittle more effort. If you dont want to do compilation in your build environment(ie, conversion of jsx into JS code), skip jsx.

Is ES6 mandatory for React?
A: Using es6 is not mandatory but enchances the code with ease in reading and maintaining.. The latest projects created on React rely a lot on ES6. 
  React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const). 
  ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015

{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
* {TitleComponent} - TitleComponet is a JS varaible within the {}'s.
* {<TitleComponent/>} - <TitleComponent/> is a JSX functional component that returns a JSX element. 
* {<TitleComponent></TitleComponent>} - It is exactly same a the JSX functional compnent which returna JSX element excpet that it has no child
components. The opening and closing tags are used to add child components.

How can I write comments in JSX?
A: Wrap the data in { /* */ } to write comments in JSX 
  ```
{ /* This is a comment in JSX */ }

```
