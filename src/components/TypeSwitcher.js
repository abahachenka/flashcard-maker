import React from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import {
  useSettingsActions,
  useSettingsState,
} from '@/context/SettingsContext';
import { TYPE_IMG_TEXT, TYPE_TEXT } from '@/constants';
import styles from './Settings.module.scss';

export default function TypeSwitcher() {
  const { updateType } = useSettingsActions();
  const { type } = useSettingsState();

  return (
    <div className={styles['settings__group']}>
      <h3 className={styles['settings__title']}>Type</h3>

      <div className={styles['setting-preview']}>
        <span
          className={cn(styles['setting-preview__card'], {
            [styles['setting-preview__card_active']]: type === TYPE_IMG_TEXT,
          })}
          onClick={() => updateType(TYPE_IMG_TEXT)}>
          <FontAwesomeIcon icon={faImage} />
          <span className={styles['setting-preview__card-text']}>Text</span>
        </span>

        <span
          className={cn(styles['setting-preview__card'], {
            [styles['setting-preview__card_active']]: type === TYPE_TEXT,
          })}
          onClick={() => updateType(TYPE_TEXT)}>
          <span className={styles['setting-preview__card-text']}>Text</span>
        </span>
      </div>
    </div>
  );
}
