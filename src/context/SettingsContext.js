import React, { useState, useContext, createContext } from 'react';
import { TYPE_IMG_TEXT, ORIENTATION_V } from '@/constants';

const SettingsContext = createContext();

export function SettingsContextProvider({ children }) {
  const [settings, setSettings] = useState({
    type: TYPE_IMG_TEXT,
    orientation: ORIENTATION_V,
    cardsPerPage: 2, // 2,4,6,8,10
  });

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

  function updateCardsPerPage(cardsPerPage) {
    setSettings((current) => {
      return { ...current, cardsPerPage };
    });
  }

  const actions = {
    updateType,
    updateOrientation,
    updateCardsPerPage,
  };

  return (
    <SettingsContext.Provider value={{ settings, actions }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsState() {
  return useContext(SettingsContext).settings;
}

export function useSettingsActions() {
  return useContext(SettingsContext).actions;
}
