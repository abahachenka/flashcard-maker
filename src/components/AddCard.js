import React, { useContext } from 'react';
import './Card.scss';
import CardContext from '@/context/CardContext';
import { ORIENTATION_H, TYPE_IMG_WORDS } from '@/constants';

const AddCard = () => {
  const { addCard, cardSettings } = useContext(CardContext);

  const cardClassName =
    cardSettings.orientation === ORIENTATION_H
      ? 'add-card card card_horizontal'
      : 'add-card card';

  return (
    <button onClick={addCard} className={cardClassName}>
      +
    </button>
  );
};

export default AddCard;
