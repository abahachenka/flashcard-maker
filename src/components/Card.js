import React from 'react';
import PropTypes from 'prop-types';
import RemoveCard from '@components/RemoveCard';
import styles from './Card.css';
console.log(styles);

function Card({card}) {
    return (
        <li className={styles.card}>
            {card.label}<br/>
            {card.img}

            <RemoveCard id={card.id} />
        </li>
    )
}

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card;