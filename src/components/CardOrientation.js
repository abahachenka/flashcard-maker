import React from 'react';
import cn from 'classnames';
import {
  useSettingsActions,
  useSettingsState,
} from '@/context/SettingsContext';
import { ORIENTATION_V, ORIENTATION_H } from '@/constants';

export default function CardOrientation() {
  const { updateOrientation } = useSettingsActions();
  const { orientation } = useSettingsState();

  return (
    <div className='settings__group'>
      <h3 className='settings__title'>Orientation</h3>

      <div className='setting-preview'>
        <span
          className={cn('setting-preview__card', {
            'setting-preview__card_active': orientation === ORIENTATION_V,
          })}
          onClick={() => updateOrientation(ORIENTATION_V)}></span>

        <span
          className={cn(
            'setting-preview__card',
            'setting-preview__card_horizontal',
            {
              'setting-preview__card_active': orientation === ORIENTATION_H,
            }
          )}
          onClick={() => updateOrientation(ORIENTATION_H)}></span>
      </div>
    </div>
  );
}
