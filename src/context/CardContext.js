import React, { createContext, useContext, useState } from 'react';

const CardContext = createContext();

export function CardContextProvider({ children }) {
  const [cards, setCards] = useState([]);

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

  const actions = {
    addCard,
    updateCard,
    removeCard,
  };

  return (
    <CardContext.Provider value={{ cards, actions }}>
      {children}
    </CardContext.Provider>
  );
}

export function useCardState() {
  return useContext(CardContext).cards;
}

export function useCardActions() {
  return useContext(CardContext).actions;
}
