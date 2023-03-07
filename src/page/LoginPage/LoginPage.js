import React from "react";
import Login from "../../component/login/Login";
import Logo from "../../component/login/Logo";
import "./LoginPage.Style.scss";
const LoginPage = () => {
  return (
    <section id="pageWrapper">
      <Logo />
      <Login />
    </section>
  );
};

export default LoginPage;
