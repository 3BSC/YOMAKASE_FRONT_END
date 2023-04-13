import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TypeSelect.module.scss';

export default function TypeSelect() {
  return (
    <section className={styles.wrapper}>
      <img src="/asset/Logo_large.svg" alt="logo" className={styles.logo} />
      <Link to="/register-normal" className={styles.option}>
        <img src="/asset/User_normal.svg" alt="normal_user" />
        <div className={styles.type}>
          <span className={styles.type_name}>일반 회원</span>
          <span className={styles.type_explain}>일반 회원으로 가입합니다</span>
        </div>
      </Link>
      <Link to="/register-owner" className={styles.option}>
        <img src="/asset/User_owner.svg" alt="owner_user" />
        <div className={styles.type}>
          <span className={styles.type_name}>사장님 회원</span>
          <span className={styles.type_explain}>사장님 회원으로 가입합니다</span>
        </div>
      </Link>
    </section>
  );
}
