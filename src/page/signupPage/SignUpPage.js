import React from "react";
import SignUp from "../../component/signup/SignUp";
import SignUpFooter from "../../component/signup/SignUpFooter";
import SignUpHeader from "../../component/signup/SignUpHeader";

const SignUpPage = () => {
  return (
    <>
      <SignUpHeader />
      <SignUp />
      <SignUpFooter />
    </>
  );
};

export default SignUpPage;
