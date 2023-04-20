import React from 'react';
import NormalRegister from '../NornalRegisterForm';
import styles from './OwnerRegister.module.scss';
import FileInput from '../../../component/Register/OwnerRegister/FileInput';
import PriceInput from '../../../component/Register/OwnerRegister/PriceInput';
import AddressInput from '../../../component/Register/OwnerRegister/AddressInput';
import TimeImput from '../../../component/Register/OwnerRegister/Timeinput';
import FacilitySelect from '../../../component/Register/OwnerRegister/FacilitySelect';

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
      <AddressInput />
      <PriceInput />
      <TimeImput />
      <FacilitySelect />
      <div>
        <div className={styles.form}>
          <span>소개</span>
        </div>
        <textarea className={styles.form__textarea} />
      </div>
      <button type="button" className={styles.form__submit}>회원가입</button>
    </div>
  );
}
