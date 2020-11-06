import React from 'react';
import cn from 'classnames';
import {
  useSettingsActions,
  useSettingsState,
} from '@/context/SettingsContext';
import { ORIENTATION_V, ORIENTATION_H } from '@/constants';
import styles from './Settings.module.scss';

export default function CardOrientation() {
  const { updateOrientation } = useSettingsActions();
  const { orientation } = useSettingsState();

  return (
    <div className={styles['settings__group']}>
      <h3 className={styles['settings__title']}>Orientation</h3>

      <div className={styles['setting-preview']}>
        <span
          className={cn(styles['setting-preview__card'], {
            [styles['setting-preview__card_active']]:
              orientation === ORIENTATION_V,
          })}
          onClick={() => updateOrientation(ORIENTATION_V)}></span>

        <span
          className={cn(
            styles['setting-preview__card'],
            styles['setting-preview__card_horizontal'],
            {
              [styles['setting-preview__card_active']]:
                orientation === ORIENTATION_H,
            }
          )}
          onClick={() => updateOrientation(ORIENTATION_H)}></span>
      </div>
    </div>
  );
}
