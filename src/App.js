import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>메인</div>} />
      <Route path="/login" element={<div>로그인</div>} />
      <Route path="/signup" element={<div>회원가입</div>} />
      <Route path="/find-password" element={<div>비밀번호 찾기</div>} />
    </Routes>
  );
}

export default App;
