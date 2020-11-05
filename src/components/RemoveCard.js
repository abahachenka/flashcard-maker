import React from 'react';
import { useSettingsActions } from '@/context/SettingsContext';

function RemoveCard({ id }) {
  const { removeCard } = useSettingsActions();

  return (
    <button className='remove-btn' onClick={() => removeCard(id)}>
      x
    </button>
  );
}

export default RemoveCard;
