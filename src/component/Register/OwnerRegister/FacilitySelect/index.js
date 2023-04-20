import React, { useState } from 'react';
import styles from './FacilitySelect.module.scss';
import FacilityModal from './FacilityModal';

const DUMMY = ['주차 가능', '발렛 파킹', '콜키지 가능'];
export default function FacilitySelect() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <span className={styles.form__label}>편의시설</span>
      <div className={styles['form__facility-wrapper']}>
        {DUMMY.map((data) => <div className={styles.form__facility} key={data}>{data}</div>)}
        <button className={styles['form__facility__plus--button']} onClick={() => setOpen(true)} type="button">+</button>
      </div>
      {isOpen && <FacilityModal closeModal={() => setOpen()} />}
    </div>
  );
}
