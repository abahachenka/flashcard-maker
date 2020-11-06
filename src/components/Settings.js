import React from 'react';
import TypeSwitcher from './TypeSwitcher';
import CardOrientation from './CardOrientation';
import CardsPerPage from './CardsPerPage';
import styles from './Settings.module.scss';

export default function Settings() {
  return (
    <form className={styles.settings}>
      <TypeSwitcher />
      <CardOrientation />
      <CardsPerPage />
    </form>
  );
}
