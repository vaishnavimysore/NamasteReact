import { createContext } from "react";

//We use createContext hook to create a context or global scope object, which can be accessed anywhere
const userContext = createContext({
  loggedInUser: "Default User",
});

export default userContext;
