import React from 'react';
import styles from './PasswordInput.module.scss';

export default function PasswordInput() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <div>
          <span className={styles.label}>비밀번호</span>
          <span className={styles.required}>*</span>
        </div>
        <input type="password" />
      </div>
      <div className={styles.form}>
        <div>
          <span className={styles.label}>비밀번호 확인</span>
          <span className={styles.required}>*</span>
        </div>
        <input type="password" />
      </div>
    </div>
  );
}
