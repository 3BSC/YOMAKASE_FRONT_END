import React from 'react';
import styles from './NicknameInput.module.scss';

export default function NicknameInput() {
  return (
    <div>
      <div>
        <span className={styles.label}>닉네임</span>
        <span className={styles.required}>*</span>
      </div>
      <div className={styles.input_wrapper}>
        <input type="text" />
        <button type="button">중복검사</button>
      </div>
    </div>
  );
}
