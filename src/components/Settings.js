import React, { useState } from 'react';
import TypeSwitcher from './TypeSwitcher';
import CardOrientation from './CardOrientation';
import SettingsContext from '@/context/SettingsContext';
import { TYPE_IMG_TEXT, ORIENTATION_V } from '@/constants';
import './Settings.scss';

export default function Settings({ onSubmit }) {
  const [settings, setSettings] = useState({
    type: TYPE_IMG_TEXT,
    orientation: ORIENTATION_V,
    cardsPerList: 2, // 2,4,6,8,10
  });

  function submitSettings(e) {
    e.preventDefault();

    onSubmit(settings);
  }

  function updateType(type) {
    setSettings((current) => {
      return { ...current, type };
    });
  }

  function updateOrientation(orientation) {
    setSettings((current) => {
      return { ...current, orientation };
    });
  }

  const settingsAPI = {
    updateType,
    updateOrientation,
  };

  const { type, orientation } = settings;

  return (
    <form className='settings' onSubmit={submitSettings}>
      <SettingsContext.Provider value={settingsAPI}>
        <TypeSwitcher type={type} />
        <CardOrientation orientation={orientation} />
      </SettingsContext.Provider>
    </form>
  );
}
