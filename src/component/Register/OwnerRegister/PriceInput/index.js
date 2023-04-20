import React from 'react';
import styles from './PriceInput.module.scss';

const DUMMY = [{
  businessDay: '주말',
  type: '디너',
  price: 80000,
}, {
  businessDay: '평일',
  type: '런치',
  price: 40000,
}];

const DAY_TYPES = ['평일', '주말'];
const MEAL_TYPES = ['디너', '런치'];

export default function PriceInput() {
  return (
    <div className={styles.form}>
      <span>가격</span>
      <div className={styles['price--table']}>
        {DUMMY.map((data) => (
          <div className={styles['price--table__set']} key={data.index}>
            <div className={styles['price--table__element']}>{data.businessDay}</div>
            <div className={styles['price--table__element']}>{data.type}</div>
            <div className={styles['price--table__element']}>{data.price}</div>
            <img className={styles['price--table__delete--button']} src="/asset/register/trash_can.svg" alt="delete" />
          </div>
        ))}
      </div>
      <div className={styles['set--wrapper']}>
        <select className={styles.select}>
          {DAY_TYPES.map((type) => <option id={type}>{type}</option>)}
        </select>
        <select className={styles.select}>
          {MEAL_TYPES.map((type) => <option id={type}>{type}</option>)}
        </select>
        <input className={styles['price--input']} placeholder="가격" type="text" />
      </div>
      <button className={styles['add--button']} type="button">+ 가격 정보 추가</button>
    </div>
  );
}
