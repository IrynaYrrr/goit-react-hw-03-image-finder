import React from 'react';
import css from './Modal.module.css';

export default function Modal() {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src="" alt="" />
      </div>
    </div>
  )
}
