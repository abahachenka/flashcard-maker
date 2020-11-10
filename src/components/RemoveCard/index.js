import React from 'react';
import { useSettingsActions } from '@/context/SettingsContext';
import styles from './styles.scss';

function RemoveCard({ id }) {
  const { removeCard } = useSettingsActions();

  return (
    <button className={styles.removeBtn} onClick={() => removeCard(id)}>
      x
    </button>
  );
}

export default RemoveCard;
