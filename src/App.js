import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NormalRegister from './page/Register/NornalRegisterPage';
import TypeSelect from './page/Register/TypeSelectPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>메인</div>} />
      <Route path="/login" element={<div>로그인</div>} />
      <Route path="/signup" element={<TypeSelect />} />
      <Route path="register-normal" element={<NormalRegister />} />
      <Route path="register-owner" element={<div>사장님 회원가입</div>} />
      <Route path="/find-password" element={<div>비밀번호 찾기</div>} />
    </Routes>
  );
}

export default App;
