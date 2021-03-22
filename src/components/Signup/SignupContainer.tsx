import React from "react";
import Signup from "./Signup";

const SignupContainer: React.FC = () => {
  const onSubmit = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return <Signup onSubmit={onSubmit} />;
};

export default SignupContainer;
