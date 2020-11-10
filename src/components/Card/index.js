import React, { useState, useRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import RemoveCard from '@/components/RemoveCard';
import { useCardActions } from '@/context/CardContext';
import { useSettingsState } from '@/context/SettingsContext';
import { ORIENTATION_H, TYPE_IMG_TEXT } from '@/constants';
import styles from './styles.scss';

function Card({ card }) {
  const [isEditMode, toggleEditMode] = useState(0);
  const { updateCard } = useCardActions();
  const { orientation, type } = useSettingsState();
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

  return (
    <li
      className={cn(styles.card, {
        [styles.cardHorizontal]: orientation === ORIENTATION_H,
      })}>
      {type === TYPE_IMG_TEXT ? (
        <div className={styles.cardImage}>
          {card.img ? (
            <img src='' ref={imgRef} alt='' />
          ) : (
            <div className={styles.cardImageUpload}>
              <label
                htmlFor='upload-image'
                className={styles.cardUploadBtn}></label>
              <input
                className={styles.cardUploadBrowse}
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
        <h2 className={styles.cardTitle} onClick={editModeToggle}>
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
