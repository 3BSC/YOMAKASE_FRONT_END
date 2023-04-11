import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './page/Register/RegisterPage/index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>메인</div>} />
      <Route path="/login" element={<div>로그인</div>} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/find-password" element={<div>비밀번호 찾기</div>} />
    </Routes>
  );
}

export default App;
