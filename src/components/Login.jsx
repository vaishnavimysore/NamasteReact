import React from "react";
import { Field, Formik, Form } from "formik";

const Login = () => {
  return (
    <div>
      <h1> Login to our page!! </h1>
      <Formik>
        {() => (
          <Form>
            <Field type="text" name="fullName" placeholder="Enter full name" />
            <Field type="email" name="email" placeholder="Enter email" />
            <Field
              type="password"
              name="password"
              placeholder="create password"
            />
            <button type="submit"> Submit </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
