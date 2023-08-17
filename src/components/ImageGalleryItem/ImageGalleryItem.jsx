import React from 'react';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  return (
    <li className={css.imageGalleryItem} key={id}>
      <img className={css.imageGalleryItemImage} src={webformatURL} alt="card" />
    </li>
  )
}
