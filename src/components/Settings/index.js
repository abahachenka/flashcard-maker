import React from 'react';
import TypeSwitcher from '@/components/TypeSwitcher';
import CardOrientation from '@/components/CardOrientation';
import CardsPerPage from '@/components/CardsPerPage';
import styles from './styles.scss';

export default function Settings() {
  return (
    <form className={styles.settings}>
      <TypeSwitcher />
      <CardOrientation />
      <CardsPerPage />
    </form>
  );
}
