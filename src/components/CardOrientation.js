import React, { useContext } from 'react';
import SettingsContext from '@/context/SettingsContext';
import { ORIENTATION_V, ORIENTATION_H } from '@/constants';

export default function CardOrientation({ orientation }) {
  const { updateOrientation } = useContext(SettingsContext);

  return (
    <div className='settings__group'>
      <h3>Choose card orientation</h3>
      <label htmlFor=''>
        Vertical
        <input
          type='radio'
          name='orientation'
          checked={orientation === ORIENTATION_V}
          onChange={() => updateOrientation(ORIENTATION_V)}
        />
      </label>

      <label htmlFor=''>
        Horizontal
        <input
          type='radio'
          name='orientation'
          checked={orientation === ORIENTATION_H}
          onChange={() => updateOrientation(ORIENTATION_H)}
        />
      </label>
    </div>
  );
}
