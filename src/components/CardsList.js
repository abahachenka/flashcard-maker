import React from 'react';
import Card from './Card';
import AddCard from './AddCard';
import { useCardState } from '@/context/CardContext';
import './CardsList.scss';

export default function CardsList() {
  const cards = useCardState();

  return (
    <ul className='cards-list'>
      <React.Fragment>
        {cards.map((card, index) => {
          return <Card card={card} key={index} />;
        })}
        <AddCard />
      </React.Fragment>
    </ul>
  );
}
