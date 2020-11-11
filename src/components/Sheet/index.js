import React, { useEffect } from 'react';
import styles from './styles.scss';
import cn from 'classnames';
import { useSettingsState } from '@/context/SettingsContext';
import { ORIENTATION_H, ORIENTATION_V } from '@/constants';

export default function Sheet({ children }) {
  const { cardsPerPage, orientation } = useSettingsState();

  function checkPortrait(cardsPerPage, orientation) {
    if (cardsPerPage === 2 && orientation === ORIENTATION_H) {
      return true;
    }

    if (cardsPerPage === 2 && orientation === ORIENTATION_V) {
      return false;
    }
  }

  useEffect(() => {
    const isPortrait = checkPortrait(cardsPerPage, orientation);
    const head = document.head || document.getElementsByTagName('head')[0];
    let styleEl = document.querySelector('#pageStyles');
    let isNew = !styleEl;

    if (isNew) {
      styleEl = document.createElement('style');
      styleEl.setAttribute('type', 'text/css');
      styleEl.id = 'pageStyles';
      head.appendChild(styleEl);
    }

    let css = '';

    if (isPortrait) {
      css = '@page{size: A4;}';
      styleEl.textContent = css; // TODO: fix, does not work

      document.body.classList.remove('landscape');
    } else {
      css = '@page{size: A4 landscape;}'; // TODO: fix, does not work
      styleEl.textContent = css;
      document.body.classList.add('landscape');
    }
  }, [orientation]);

  const isPortrait = checkPortrait(cardsPerPage, orientation);

  return (
    <div
      className={cn(styles.sheet, {
        [styles.sheetPortrait]: isPortrait,
        [styles.sheetLandscape]: !isPortrait,
      })}>
      {children}
    </div>
  );
}
