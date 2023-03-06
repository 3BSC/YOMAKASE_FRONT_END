import React, { useRef, useState } from "react";

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
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <input type="text" id="user-email" ref={userEmail}></input>
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <input type="password" ref={userPassword}></input>
        </div>
        <div>
          <input
            type="checkbox"
            id="user-type"
            onClick={() => setCeoLogin(!isCeoLogin)}
          ></input>
          <label htmlFor="user-type">사장님 계정</label>
          <input type="checkbox" id="auto-login"></input>
          <label htmlFor="auto-login">자동 로그인</label>
        </div>
        <button type="submit">로그인</button>
      </form>
    </>
  );
};

export default Login;
