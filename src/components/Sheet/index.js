import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';
import { useSettingsState } from '@/context/SettingsContext';
import { ORIENTATION_H, ORIENTATION_V } from '@/constants';

export default function Sheet({ children }) {
  const { cardsPerPage, orientation } = useSettingsState();

  function checkVertical(cardsPerPage, orientation) {
    if (cardsPerPage === 2 && orientation === ORIENTATION_H) {
      return true;
    }

    if (cardsPerPage === 2 && orientation === ORIENTATION_V) {
      return false;
    }
  }

  const isVertical = checkVertical(cardsPerPage, orientation);

  return (
    <div
      className={cn(styles.sheet, {
        [styles.sheetVertical]: isVertical,
        [styles.sheetHorizontal]: !isVertical,
      })}>
      {children}
    </div>
  );
}
