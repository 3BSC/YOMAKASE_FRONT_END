import React from 'react';
import styles from './FacilityModal.module.scss';

const FACILITIES = ['주차 가능', '발렛 파킹', '반려동물 동반', '콜키지 프리', '콜키지 가능', '노키즈 존'];
export default function FacilityModal({ closeModal }) {
  return (
    <div className={styles['modal--wrapper']}>
      <div className={styles.modal}>
        <span className={styles.modal__label}>편의시설</span>
        <div className={styles.modal__facilities}>
          {FACILITIES.map((facility) => (
            <button className={styles.modal__facility} type="button">
              {facility}
            </button>
          ))}
        </div>
        <button type="button" className={styles['modal__close--button']} onClick={() => closeModal(true)}>확인</button>
      </div>
    </div>
  );
}
