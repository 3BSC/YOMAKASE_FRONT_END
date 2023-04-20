import React from 'react';
import styles from './TimeInput.module.scss';

export default function TimeImput() {
  return (
    <div className={styles.form}>
      <div>
        <span className={styles.form__label}>영업시간</span>
        <div className={styles['form__time--input']}>
          <input className={styles['form__input--time']} type="time" />
          <span> ~ </span>
          <input className={styles['form__input--time']} type="time" />
        </div>
      </div>
      <div>
        <span className={styles.form__label}>브레이크 타임</span>
        <div className={styles['form__time--input']}>
          <input className={styles['form__input--time']} type="time" />
          <span> ~ </span>
          <input className={styles['form__input--time']} type="time" />
        </div>
      </div>
      <div>
        <span className={styles.form__label}>휴무일</span>
        <input className={styles['form__input--day']} type="text" />
      </div>
    </div>
  );
}
