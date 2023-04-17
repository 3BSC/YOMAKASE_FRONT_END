import React from 'react';
import styles from './FileInput.module.scss';

const RES_TYPES = ['오마카세', '우마카세', '양마카세', '돈마카세', '순마카세'];
export default function FileInput() {
  return (
    <div className={styles.form}>
      <span>사업자 등록증</span>
      <span className={styles.form__required}>*</span>
      <div className={styles.fileinput}>
        <div className={styles['fileinput__confirm--box']}>첨부됨</div>
        <label htmlFor="fileinput" className={styles['fileinput__pc--button']}>
          선택
          <input id="fileinput" type="file" className={styles.fileinput__input} />
        </label>
        <select className={styles.select}>
          {RES_TYPES.map((type) => <option id={type}>{type}</option>)}
        </select>
      </div>
    </div>
  );
}
