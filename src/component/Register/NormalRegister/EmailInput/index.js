import React from 'react';
import styles from './EmailInput.module.scss';

const EMAILS = ['@gmail.com', '@naver.com', '@hanmail.net'];

export default function EmailInput() {
  return (
    <div className={styles.form}>
      <div>
        <span>이메일</span>
        <span className={styles.required}>*</span>
      </div>
      <input type="text" className={styles.input} />
      <div className={styles.email_wrapper}>
        <select className={styles.select}>
          {EMAILS.map((email) => <option value={email}>{email}</option>)}
        </select>
        <button type="button" className={styles.button}>중복검사</button>
      </div>
    </div>
  );
}
