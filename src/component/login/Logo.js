import React from "react";
import "./Logo.Style.scss";
const Logo = () => {
  return (
    <>
      <figure id="logo">
        <img src="/images/logo.png" alt="logo" />
      </figure>
      <div id="titleWrapper">
        <span id="title">요마카세</span>
        <span id="slogan">요즘 오마카세의 모든 것</span>
      </div>
    </>
  );
};

export default Logo;
