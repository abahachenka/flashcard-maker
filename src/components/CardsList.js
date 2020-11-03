import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import AddCard from './AddCard';
import './CardsList.scss';

function CardsList({ cards }) {
  return (
    <ul className='cards-list'>
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
