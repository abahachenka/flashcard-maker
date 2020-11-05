import React from 'react';
import Header from './Header';
import CardsList from './CardsList';
import Settings from './Settings';
import { CardContextProvider } from '@/context/CardContext';
import { SettingsContextProvider } from '@/context/SettingsContext';
import '@/scss/index.scss';

export default function App() {
  function onPrint() {
    window.print();
  }

  return (
    <React.Fragment>
      <Header />
      <div className='container'>
        <SettingsContextProvider>
          <Settings />
          <CardContextProvider>
            <CardsList />
          </CardContextProvider>
        </SettingsContextProvider>
        <button onClick={onPrint} className='print-btn'>
          Print
        </button>
      </div>
    </React.Fragment>
  );
}
