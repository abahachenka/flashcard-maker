import React, { useState } from 'react';
import TypeSwitcher from './TypeSwitcher';
import CardOrientation from './CardOrientation';
import SettingsContext from '@/context/SettingsContext';
import './Settings.scss';

export default function Settings({ onSubmit }) {
  const [settings, setSettings] = useState({
    type: 'imgWords',
    orientation: 'vertical',
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
      <h2 className='settings__title'>Set-up card settings</h2>
      <SettingsContext.Provider value={settingsAPI}>
        <TypeSwitcher type={type} />
        <CardOrientation orientation={orientation} />
      </SettingsContext.Provider>
      <input type='submit' value='Ok' className='settings__submit' />
    </form>
  );
}
