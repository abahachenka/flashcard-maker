import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import AddCard from './AddCard';
import styles from './CardsList.scss';

function CardsList({ cards }) {
  return (
    <ul className={styles.cardsList}>
      {cards.map((card, index) => {
        return <Card card={card} key={index} />;
      })}
      <AddCard />
    </ul>
  );
}

CardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardsList;
