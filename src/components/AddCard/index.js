import React from 'react';
import cn from 'classnames';
import { useSettingsState } from '@/context/SettingsContext';
import { useCardActions } from '@/context/CardContext';
import { ORIENTATION_H } from '@/constants';
import styles from './styles.scss';

const AddCard = () => {
  const { addCard } = useCardActions();
  const { orientation } = useSettingsState();

  return (
    <button
      onClick={addCard}
      className={cn(styles.addCardBtn, {
        [styles.addCardBtnHorizontal]: orientation === ORIENTATION_H,
      })}>
      +
    </button>
  );
};

export default AddCard;
