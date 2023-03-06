import React, { useRef, useState } from "react";
import "./Login.Style.scss";
const Login = () => {
  const [isCeoLogin, setCeoLogin] = useState(false);
  const userEmail = useRef();
  const userPassword = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = userEmail.current.value;
    const password = userPassword.current.value;
    if (email.length === 0 || password.length === 0) {
      alert("아이디, 비밀번호를 모두 입력해 주세요");
      return;
    }
    login(email, password);
  };
  const login = (email, password) => {
    if (isCeoLogin) {
      alert("사장님 로그인" + email + password);
      return;
    }
    alert("일반 로그인", email, password);
    return;
  };
  return (
    <div className="Container">
      <form onSubmit={handleSubmit} className="LoginContents">
        <div className="LoginForm">
          <label htmlFor="user-email">이메일</label>
          <br />
          <input
            type="text"
            id="user-email"
            className="LoginInput"
            ref={userEmail}
          ></input>
        </div>
        <div className="LoginForm">
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <input
            type="password"
            ref={userPassword}
            className="LoginInput"
          ></input>
        </div>
        <div className="LoginOption">
          <input
            type="checkbox"
            id="user-type"
            onClick={() => setCeoLogin(!isCeoLogin)}
          ></input>
          <label htmlFor="user-type">사장님 계정</label>
          <span> /</span>
          <input type="checkbox" id="auto-login"></input>
          <label htmlFor="auto-login">자동 로그인</label>
        </div>
        <div className="ButtonContainer">
          <button type="submit" className="Loginbutton">
            로그인
          </button>
          <button className="Loginbutton">회원가입</button>
          <button className="Loginbutton">이메일/비밀번호 찾기</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
