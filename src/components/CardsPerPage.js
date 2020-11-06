import React from 'react';
import {
  useSettingsActions,
  useSettingsState,
} from '@/context/SettingsContext';
import styles from './Settings.module.scss';

export default function CardsNumber() {
  const { updateCardsPerPage } = useSettingsActions();
  const { cardsPerPage } = useSettingsState();

  return (
    <div className={styles['settings__group']}>
      <h3 className={styles['settings__title']}>Cards per page</h3>

      <div className={styles['setting-preview']}>
        <select
          defaultValue={cardsPerPage}
          className={styles['setting-preview__cards-number']}
          onChange={(e) => updateCardsPerPage(parseInt(e.target.value))}>
          <option value='2'>2</option>
          <option value='4'>4</option>
          <option value='6'>6</option>
          <option value='8'>8</option>
          <option value='10'>10</option>
        </select>
      </div>
    </div>
  );
}
