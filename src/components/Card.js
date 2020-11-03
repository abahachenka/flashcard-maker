import React, { useState, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import CardContext from '@/context/CardContext';
import RemoveCard from './RemoveCard';
import './Card.scss';
import { ORIENTATION_H, TYPE_IMG_WORDS } from '@/constants';

function Card({ card }) {
  const [isEditMode, toggleEditMode] = useState(0);
  const { updateCard, cardSettings } = useContext(CardContext);
  const fileRef = useRef();
  const imgRef = useRef();

  function editModeToggle() {
    toggleEditMode((current) => !current);
  }

  function onTitleChange(e) {
    const newCard = {
      ...card,
      label: e.target.value,
    };

    updateCard(newCard);
  }

  function onFileSelect() {
    const file = fileRef.current.files[0];

    // TODO: check file size

    if (!file.type.startsWith('image/')) {
      console.log('not an image'); //TODO: make proper error msg
      return;
    }

    // TODO: load to localstorage
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      imgRef.current.src = reader.result;
    });

    reader.readAsDataURL(file);

    const newCard = {
      ...card,
      img: fileRef.current.files[0] && fileRef.current.files[0].name,
    };

    updateCard(newCard);
  }

  const cardClassName =
    cardSettings.orientation === ORIENTATION_H
      ? 'card card_horizontal'
      : 'card';

  return (
    <li className={cardClassName}>
      {cardSettings.type === TYPE_IMG_WORDS ? (
        <div className='card__image'>
          {card.img ? (
            <img src='' ref={imgRef} alt='' />
          ) : (
            <div className='card__image-upload'>
              <label
                htmlFor='upload-image'
                className='card__upload-btn'></label>
              <input
                className='card__upload-browse'
                type='file'
                name='image'
                id='upload-image'
                ref={fileRef}
                onChange={onFileSelect}
              />
            </div>
          )}
        </div>
      ) : null}

      {isEditMode ? (
        <input type='text' onBlur={editModeToggle} onChange={onTitleChange} />
      ) : (
        <h2 className='card__title' onClick={editModeToggle}>
          {card.label}
        </h2>
      )}

      <RemoveCard id={card.id} />
    </li>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
