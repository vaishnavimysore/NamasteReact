import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return <h1>Error!!! Please check code!!</h1>;
};

export default Error;
