import React from 'react';
import SettingsGroup from '@/components/SettingsGroup';
import SettingCard from '@/components/SettingCard';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import {
  useSettingsActions,
  useSettingsState,
} from '@/context/SettingsContext';
import { TYPE_IMG_TEXT, TYPE_TEXT } from '@/constants';

export default function TypeSwitcher() {
  const { updateType } = useSettingsActions();
  const { type } = useSettingsState();

  return (
    <SettingsGroup title='Type'>
      <SettingCard
        isActive={type === TYPE_IMG_TEXT}
        onClick={() => updateType(TYPE_IMG_TEXT)}
        icon={faImage}
        label='Text'
      />

      <SettingCard
        isActive={type === TYPE_TEXT}
        onClick={() => updateType(TYPE_TEXT)}
        label='Text'
      />
    </SettingsGroup>
  );
}
