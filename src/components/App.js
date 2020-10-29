import React from "react";
import AddCard from "@components/AddCard";
import CardsList from "@components/CardsList";
import CardContext from "@/context.js";
import styles from "@components/App.css";

export default function App() {
  const [cards, setCards] = React.useState([]);

  function addCard() {
    const newCard = {
      label: `Test Label ${cards.length + 1}`,
      img: "/",
      id: cards.length + 1,
    };

    setCards(cards.concat([newCard]));
  }

  function removeCard(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

  return (
    <CardContext.Provider value={{ removeCard }}>
      <div className={styles.container}>
        <h1>This is the Flashcards Maker</h1>
        {/* add flashcard type switcher*/}
        <CardsList cards={cards} />
        <AddCard addCard={addCard} />
      </div>
    </CardContext.Provider>
  );
}
