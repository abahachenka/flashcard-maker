import React from 'react';
import TypeSwitcher from './TypeSwitcher';
import CardOrientation from './CardOrientation';
import CardsPerPage from './CardsPerPage';
import './Settings.scss';

export default function Settings() {
  return (
    <form className='settings'>
      <TypeSwitcher />
      <CardOrientation />
      <CardsPerPage />
    </form>
  );
}
