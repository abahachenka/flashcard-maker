import React from 'react';
import Header from '@/components/Header';
import CardsList from '@/components/CardsList';
import Settings from '@/components/Settings';
import { CardContextProvider } from '@/context/CardContext';
import { SettingsContextProvider } from '@/context/SettingsContext';
import '@/scss/global.scss';
import styles from './styles.scss';

export default function App() {
  function getGeneratedPageURL({ html, cssURL }) {
    const getBlobURL = (code, type) => {
      const blob = new Blob([code], { type });
      return URL.createObjectURL(blob);
    };

    const source = `
      <html>
        <head>
         <link rel="stylesheet" type="text/css" href="${cssURL}" />
        </head>
        <body>
          ${html || ''}
        </body>
      </html>
    `;

    return getBlobURL(source, 'text/html');
  }

  function closePrint() {
    document.body.removeChild(this.__container__);
  }

  function setPrint() {
    this.contentWindow.__container__ = this;
    this.contentWindow.onbeforeunload = closePrint;
    this.contentWindow.onafterprint = closePrint;
    this.contentWindow.focus(); // Required for IE
    this.contentWindow.print();
  }

  function printPage() {
    var oHiddFrame = document.createElement('iframe');
    oHiddFrame.onload = setPrint;
    oHiddFrame.style.position = 'fixed';
    oHiddFrame.style.right = '0';
    oHiddFrame.style.bottom = '0';
    oHiddFrame.style.width = '0';
    oHiddFrame.style.height = '0';
    oHiddFrame.style.border = '0';

    const url = getGeneratedPageURL({
      html: document.querySelector('.print').innerHTML,
      cssURL: document.querySelector('link').href,
    });

    oHiddFrame.src = url;
    document.body.appendChild(oHiddFrame);
  }

  return (
    <React.Fragment>
      <Header />
      <div className={styles.appContainer}>
        <SettingsContextProvider>
          <Settings />
          <CardContextProvider>
            <CardsList />
          </CardContextProvider>
        </SettingsContextProvider>
        <button onClick={printPage} className={styles.printBtn}>
          Print
        </button>
      </div>
    </React.Fragment>
  );
}
