import React, {useContext} from 'react';
import CardContext from '@/context.js';
import styles from '@components/RemoveCard.css';

function RemoveCard({id}) {
    const {removeCard} = useContext(CardContext);
    return (
        <button className={styles.remove} onClick={() => removeCard(id)}>x</button>
    )
}

export default RemoveCard;