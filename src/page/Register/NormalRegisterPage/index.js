import React from 'react';
import NormalRegister from '../NornalRegisterForm';
import styles from './NormalRegisterPage.module.scss';

export default function NormalRegisterPage() {
  return (
    <div className={styles.wrapper}>
      <NormalRegister />
      <button type="button" className={styles.submit}>회원가입</button>
    </div>
  );
}
