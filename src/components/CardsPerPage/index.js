import React from 'react';
import {
  useSettingsActions,
  useSettingsState,
} from '@/context/SettingsContext';
import SettingsGroup from '@/components/SettingsGroup';
import styles from './CardsPerPage.module.scss';

export default function CardsNumber() {
  const { updateCardsPerPage } = useSettingsActions();
  const { cardsPerPage } = useSettingsState();

  return (
    <SettingsGroup title='Cards per page'>
      <select
        defaultValue={cardsPerPage}
        className={styles.cardsPerPageSelect}
        onChange={(e) => updateCardsPerPage(parseInt(e.target.value))}>
        <option value='2'>2</option>
        <option value='4'>4</option>
        <option value='6'>6</option>
        <option value='8'>8</option>
        <option value='10'>10</option>
      </select>
    </SettingsGroup>
  );
}
