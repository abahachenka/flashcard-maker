import React from 'react';
import Card from '@/components/Card';
import AddCard from '@/components/AddCard';
import cn from 'classnames';
import Sheet from '@/components/Sheet';
import { useCardState } from '@/context/CardContext';
import { useSettingsState } from '@/context/SettingsContext';
import { ORIENTATION_H } from '@/constants';
import styles from './styles.scss';

export default function CardsList() {
  const cards = useCardState();
  const { cardsPerPage, orientation } = useSettingsState();

  function generateCardsJSX(sheetId) {
    const jsx = [];
    const startInd = sheetId * cardsPerPage;
    const lastInd = cards.length - 1;
    let endInd = startInd + cardsPerPage - 1;

    endInd = endInd > lastInd ? lastInd : endInd;

    for (let i = startInd; i <= endInd; i++) {
      jsx.push(<Card card={cards[i]} key={i} />);
    }

    // Adding the add button at the very end
    if (endInd - startInd < cardsPerPage - 1) {
      jsx.push(<AddCard key={lastInd + 1} />);
    }

    return jsx;
  }

  function generateSheetsJSX() {
    let jsx = [];
    const cardsToDisplay = cards.length + 1; // adding extra empty card which is the add button

    const sheetsNumber = Math.ceil(cardsToDisplay / cardsPerPage);
    let sheet = '';

    for (let i = 0; i < sheetsNumber; i++) {
      sheet = (
        <Sheet key={i}>
          <ul
            className={cn(styles.cardsList, {
              [styles.cardsListVertical]: orientation === ORIENTATION_H,
            })}>
            {generateCardsJSX(i)}
          </ul>
        </Sheet>
      );

      jsx.push(sheet);
    }

    return jsx;
  }

  return <div className='print'>{generateSheetsJSX()}</div>;
}
