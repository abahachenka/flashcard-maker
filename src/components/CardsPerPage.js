import React, { useContext } from 'react';
import SettingsContext from '@/context/SettingsContext';

export default function CardsNumber({ cardsPerPage }) {
  const { updateCardsPerPage } = useContext(SettingsContext);

  return (
    <div className='settings__group'>
      <h3 className='settings__title'>Cards per page</h3>

      <div className='setting-preview'>
        <select
          defaultValue={cardsPerPage}
          className='setting-preview__cards-number'
          onChange={(e) => updateCardsPerPage(e.target.value)}>
          <option value='2'>2</option>
          <option value='4'>4</option>
          <option value='6'>6</option>
          <option value='8'>8</option>
          <option value='10'>10</option>
        </select>
      </div>
    </div>
  );
}