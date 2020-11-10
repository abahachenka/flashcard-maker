import React from 'react';
import cn from 'classnames';
import {
  useSettingsActions,
  useSettingsState,
} from '@/context/SettingsContext';
import { ORIENTATION_V, ORIENTATION_H } from '@/constants';
import SettingsGroup from '@/components/SettingsGroup';
import SettingCard from '@/components/SettingCard';

export default function CardOrientation() {
  const { updateOrientation } = useSettingsActions();
  const { orientation } = useSettingsState();

  return (
    <SettingsGroup title='Orientation'>
      <SettingCard
        isActive={orientation === ORIENTATION_V}
        onClick={() => updateOrientation(ORIENTATION_V)}
      />

      <SettingCard
        isActive={orientation === ORIENTATION_H}
        isHorizontal={true}
        onClick={() => updateOrientation(ORIENTATION_H)}
      />
    </SettingsGroup>
  );
}
