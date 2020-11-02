import React from 'react';
import CardsList from '@components/CardsList';
import CardContext from '@/context/CardContext';
import styles from '@components/App.scss';

export default function App() {
  const [cards, setCards] = React.useState([]);

  function addCard() {
    const newCard = {
      label: `Test Label ${cards.length + 1}`,
      img: '/',
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

  const cardAPI = {
    addCard,
    updateCard,
    removeCard,
  };

  return (
    <React.Fragment>
      <header className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageHeaderTitle}>Flashcards Maker</h1>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.cards}>
          <CardContext.Provider value={cardAPI}>
            <CardsList cards={cards} />
          </CardContext.Provider>
        </div>
      </div>
    </React.Fragment>
  );
}
