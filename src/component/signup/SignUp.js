import React, { useState } from "react";
import NormalForm from "./NormalForm";
import OwnerForm from "./OwnerForm";

const SignUp = () => {
  const [isOwnerForm, setOwnerForm] = useState(false);
  return (
    <form>
      <NormalForm />
      <div>
        <input
          type="checkbox"
          id="checkOwner"
          onClick={() => setOwnerForm(!isOwnerForm)}
        />
        <label htmlFor="checkOwner">사장님 계정으로 가입하시나요?</label>
      </div>
      {isOwnerForm && <OwnerForm />}
    </form>
  );
};

export default SignUp;
