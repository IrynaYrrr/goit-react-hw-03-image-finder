import React from 'react';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  return (
    <li className={css.galleryItem} key={id}>
      <img src={webformatURL} alt="card" />
    </li>
  )
}
