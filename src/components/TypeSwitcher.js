import React, { useState, useContext } from 'react';
import SettingsContext from '@/context/SettingsContext';
import { TYPE_IMG_WORDS, TYPE_WORDS } from '@/constants';

export default function TypeSwitcher({ type }) {
  const { updateType } = useContext(SettingsContext);

  return (
    <div className='settings__group'>
      <h3>Choose card type</h3>
      <label htmlFor=''>
        Image + phrase
        <input
          type='radio'
          name='type'
          checked={type === TYPE_IMG_WORDS}
          onChange={() => updateType(TYPE_IMG_WORDS)}
        />
      </label>

      <label htmlFor=''>
        Phrase
        <input
          type='radio'
          name='type'
          checked={type === TYPE_WORDS}
          onChange={() => updateType(TYPE_WORDS)}
        />
      </label>
    </div>
  );
}
