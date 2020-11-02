import React, { useContext } from 'react';
import styles from './AddCard.scss';
import cardStyles from './Card.scss';
import CardContext from '@/context/CardContext';

const AddCard = () => {
  const { addCard } = useContext(CardContext);

  return (
    <button
      onClick={addCard}
      className={`${cardStyles.card} ${styles.addCard}`}>
      +
    </button>
  );
};

export default AddCard;
