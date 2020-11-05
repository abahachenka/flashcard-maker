import React from 'react';
import TypeSwitcher from './TypeSwitcher';
import CardOrientation from './CardOrientation';
import CardsPerPage from './CardsPerPage';
import { SettingsContextProvider } from '@/context/SettingsContext';
import './Settings.scss';

export default function Settings() {
  return (
    <form className='settings'>
      <SettingsContextProvider>
        <TypeSwitcher />
        <CardOrientation />
        <CardsPerPage />
      </SettingsContextProvider>
    </form>
  );
}
