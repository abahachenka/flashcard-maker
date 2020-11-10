import React from 'react';
import { useCardActions } from '@/context/CardContext';
import styles from './styles.scss';

function RemoveCard({ id }) {
  const { removeCard } = useCardActions();

  return (
    <button className={styles.removeBtn} onClick={() => removeCard(id)}>
      x
    </button>
  );
}

export default RemoveCard;
