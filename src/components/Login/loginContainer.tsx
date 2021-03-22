import React from "react";
import Login from "./login";

const LoginContainer: React.FC = () => {
  const onSubmit = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Login onSubmit={onSubmit}/>
  )
};

export default LoginContainer;