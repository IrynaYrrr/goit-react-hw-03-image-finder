import React from 'react';
import css from './Modal.module.css';

export default function Modal({ largeImageURL, onClick}) {

const keyDownEvent = (e) => {
  if(e.code === 'Escape'){
    onClick()
  }
}
  return (
    <div id='modalDiv' onClick={onClick} tabIndex={0} onKeyDown={keyDownEvent} className={css.overlay}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="largeCard" />
      </div>
    </div>
  )
}
