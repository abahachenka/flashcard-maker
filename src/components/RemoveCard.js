import React, { useContext } from 'react';
import CardContext from '@/context/CardContext';
import styles from '@components/RemoveCard.scss';

function RemoveCard({ id }) {
  const { removeCard } = useContext(CardContext);

  return (
    <button className={styles.remove} onClick={() => removeCard(id)}>
      x
    </button>
  );
}

export default RemoveCard;
