import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from './CardsList.css'

function CardsList({cards}) {
    return (
        <ul className={styles.cardsList}>
            {cards.map((card, index) => {
                return (
                    <Card card={card} key={index} />
                )
            })}
        </ul>
    )
}

CardsList.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CardsList;
