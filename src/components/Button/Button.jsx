import React from 'react';
import css from './Button.module.css';

export default function Button({ onClick }) {

  return (
    <button onClick={onClick} className={css.button}>
      Load more
    </button>
  )
}
