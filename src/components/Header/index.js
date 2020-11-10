import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>Flashcards Maker</h1>
      </div>
    </header>
  );
}
