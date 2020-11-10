import React from 'react';
import cn from 'classnames';
import { useSettingsState } from '@/context/SettingsContext';
import { useCardActions } from '@/context/CardContext';
import { ORIENTATION_H } from '@/constants';
import styles from './styles.scss';

const AddCard = () => {
  const { addCard } = useCardActions();
  const { orientation, cardsPerPage } = useSettingsState();
  const isHorizontal = orientation === ORIENTATION_H;

  return (
    <button
      onClick={addCard}
      className={cn(styles.addCardBtn, {
        [styles.addCardBtnHorizontalCol2]: isHorizontal && cardsPerPage === 2,
        [styles.addCardBtnVerticalCol2]: !isHorizontal && cardsPerPage === 2,
      })}>
      +
    </button>
  );
};

export default AddCard;
