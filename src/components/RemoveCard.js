import React, { useContext } from 'react';
import CardContext from '@/context/CardContext';

function RemoveCard({ id }) {
  const { removeCard } = useContext(CardContext);

  return (
    <button className='remove-btn' onClick={() => removeCard(id)}>
      x
    </button>
  );
}

export default RemoveCard;
