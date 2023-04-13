import React from 'react';
import styles from './NormalRegister.module.scss';
import EmailInput from '../../../component/Register/NormalRegister/EmailInput';
import PasswordInput from '../../../component/Register/NormalRegister/PasswordInput';
import NicknameInput from '../../../component/Register/NormalRegister/NicknameInput';

export default function NormalRegister() {
  return (
    <section className={styles.wrapper}>
      <img src="asset/register/Logo.svg" alt="logo" />
      <EmailInput />
      <PasswordInput />
      <NicknameInput />
      <input className={styles.input} type="date" />
      <div>
        <div>
          <span>휴대전화</span>
          <span className={styles.required}>*</span>
        </div>
        <input className={styles.input} />
      </div>
    </section>
  );
}
