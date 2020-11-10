import React from 'react';
import Header from '@/components/Header';
// import CardsList from '../CardsList';
import Settings from '@/components/Settings';
import { CardContextProvider } from '@/context/CardContext';
import { SettingsContextProvider } from '@/context/SettingsContext';
import '../../scss/global.scss';
import styles from './App.module.scss';

export default function App() {
  function onPrint() {
    window.print();
  }

  return (
    <React.Fragment>
      <Header />
      <div className={styles.appContainer}>
        {
          <SettingsContextProvider>
            <Settings />
            {/* <CardContextProvider>
            <CardsList />
          </CardContextProvider> */}
          </SettingsContextProvider>
        }
        <button onClick={onPrint} className={styles.printBtn}>
          Print
        </button>
      </div>
    </React.Fragment>
  );
}
