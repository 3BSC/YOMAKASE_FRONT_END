import React from 'react';
import NormalRegister from '../NornalRegisterPage';
import styles from './OwnerRegister.module.scss';
import FileInput from '../../../component/Register/OwnerRegister/FileInput';

export default function OwnerRegister() {
  return (
    <div className={styles.wrapper}>
      <NormalRegister />
      <div>
        <div className={styles.form}>
          <span>가게명</span>
          <span className={styles.form__required}>*</span>
        </div>
        <input className={styles.form__input} />
      </div>
      <div>
        <div className={styles.form}>
          <span>전화번호</span>
          <span className={styles.form__required}>*</span>
        </div>
        <input className={styles.form__input} />
      </div>
      <FileInput />
    </div>
  );
}
