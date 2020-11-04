import React, { useState } from 'react';
import Header from './Header';
import CardsList from './CardsList';
import Settings from './Settings';
import CardContext from '@/context/CardContext';
import '@/scss/index.scss';

export default function App() {
  const [cards, setCards] = useState([]);
  const [cardSettings, setSettings] = useState({});

  function addCard() {
    const newCard = {
      label: `Test Label ${cards.length + 1}`,
      img: null,
      id: cards.length + 1,
    };

    setCards((prevCards) => prevCards.concat([newCard]));
  }

  function updateCard(card) {
    setCards((prevCards) => {
      return prevCards.map((item) => {
        if (item.id === card.id) {
          return card;
        }
        return item;
      });
    });
  }

  function removeCard(id) {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  }

  function applySettings(settings) {
    setSettings(settings);
  }

  function onPrint() {
    window.print();
  }

  const cardAPI = {
    addCard,
    updateCard,
    removeCard,
    cardSettings,
  };

  return (
    <React.Fragment>
      <Header />
      <div className='container'>
        <Settings onSubmit={applySettings} />
        <CardContext.Provider value={cardAPI}>
          <CardsList cards={cards} />
          <button onClick={onPrint} className='print-btn'>
            Print
          </button>
        </CardContext.Provider>
      </div>
    </React.Fragment>
  );
}
