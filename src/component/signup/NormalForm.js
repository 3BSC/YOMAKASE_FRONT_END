import React from "react";

const DOMNAIN = ["@naver.com", "@gmail.com", "@hanmail.com", "직접입력"];
const NormalForm = () => {
  return (
    <section>
      <div className="form">
        <label htmlFor="email">이메일</label>
        <input id="email" type="text"></input>
        <select>
          {DOMNAIN.map((domain) => (
            <option id={domain}>{domain}</option>
          ))}
        </select>
        <button>중복검사</button>
      </div>
      <div className="form">
        <label htmlFor="password">비밀번호</label>
        <input id="password" type="password"></input>
      </div>
      <div className="form">
        <label htmlFor="passwordCheck">비밀번호 확인</label>
        <input id="passwordCheck" type="password"></input>
      </div>
      <div className="form">
        <label htmlFor="nickname">닉네임</label>
        <input id="nickname" type="text"></input>
      </div>
      <div className="form">
        <label htmlFor="phone">전화번호</label>
        <input id="phone" type="text"></input>
        <button>인증번호 받기</button>
      </div>
      <div className="form">
        <label htmlFor="cirtification">인증번호</label>
        <input id="cirtification" type="text"></input>
        <button>인증번호 확인</button>
      </div>
    </section>
  );
};

export default NormalForm;
