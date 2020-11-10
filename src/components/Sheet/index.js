import React from 'react';
import styles from './styles.scss';

export default function Sheet({ children }) {
  return <div className={styles.sheet}>{children}</div>;
}
