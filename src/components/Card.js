import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CardContext from '@/context/CardContext';
import RemoveCard from './RemoveCard';
import styles from './Card.scss';

function Card({ card }) {
  const [isEditMode, toggleEditMode] = useState(0);
  const { updateCard } = useContext(CardContext);

  function editModeToggle() {
    toggleEditMode((current) => !current);
  }

  function onTitleChange(e) {
    const newCard = {
      ...card,
      label: e.target.value,
    };

    updateCard(newCard);
  }

  return (
    <li className={styles.card}>
      {isEditMode ? (
        <input type='text' onBlur={editModeToggle} onChange={onTitleChange} />
      ) : (
        <h2 className={styles.cardTitle} onClick={editModeToggle}>
          {card.label}
        </h2>
      )}

      <figure className={styles.cardImage}>
        {card.img ? <img src={card.img} alt='' /> : <input type='file' />}
      </figure>

      <RemoveCard id={card.id} />
    </li>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
