import React from 'react';
import styles from './AddressInput.module.scss';

export default function AddressInput() {
  return (
    <div className={styles.form}>
      <span>주소</span>
      <span className={styles.form__required}>*</span>
      <div className={styles['address--search']}>
        <div className={styles['address--search__result']}>검색된 주aasdfsadfsdfssdfsadfsadf소</div>
        <button className={styles['address--search__button']} type="button">주소 검색</button>
      </div>
      <input className={styles.form__input} type="text" placeholder="상세 주소" />
    </div>
  );
}
