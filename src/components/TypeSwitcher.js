import React, { useState, useContext } from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import SettingsContext from '@/context/SettingsContext';
import { TYPE_IMG_TEXT, TYPE_TEXT } from '@/constants';

export default function TypeSwitcher({ type }) {
  const { updateType } = useContext(SettingsContext);

  return (
    <div className='settings__group'>
      <h3 className='settings__title'>Type</h3>

      <div className='setting-preview'>
        <span
          className={cn('setting-preview__card', {
            'setting-preview__card_active': type === TYPE_IMG_TEXT,
          })}
          onClick={() => updateType(TYPE_IMG_TEXT)}>
          <FontAwesomeIcon icon={faImage} />
          <span className='setting-preview__card-text'>Text</span>
        </span>

        <span
          className={cn('setting-preview__card', {
            'setting-preview__card_active': type === TYPE_TEXT,
          })}
          onClick={() => updateType(TYPE_TEXT)}>
          <span className='setting-preview__card-text'>Text</span>
        </span>
      </div>
    </div>
  );
}
