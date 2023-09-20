Assignmnet 11

1. What is prop drilling?
   A:

   If we want to pass nay data from parent component to child's child component in any scenario, then we have to pass the data as props to the first child, destructure it and then pass it as props to the child's child. This is known as prop drilling as it passes data from top to bottom. This process can continue indefinitely. At the end, it's a long chain of component dependencies that can be difficult to manage and maintain.

2. What is lifting the state up?
   A:

   It’s important to keep in mind that state is an object that keeps track of variable changes in components.Lifting state up occurs when state is placed in a common ancestor (or parent) of child components. Because each child component has access to the parent they will then have access to state (via prop drilling as seen above). If state is updated inside the child component it is lifted back up to the parent container.
   Child component cannot control the state variable of the parent component directly, instead to do so, the parent’s state variable function has to be passed down to the child as a prop variable. This is known as lifting the state up.

3. What are Context Consumer and Context Provider?
   A:
   Context Consumer component is used when the context scope variable is to accessed by a class based component. For a functional based component, we can use useContext hook to access the context variable whenever needed.

   Context Provider component is used when we want to update or change the context scope variable in a component. Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
   One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.

   The component that has to be consumed with this change in the context have to be wrapped around with this provider component and the scope of change is limited to the wrapped component only.

4. If you do not pass a value to the provider does it take the default value?
   A:

No, if we donot pass a value or a null to the provider it doesnt take the default value, the component wrapped with it doesnt take anything, which is null.
