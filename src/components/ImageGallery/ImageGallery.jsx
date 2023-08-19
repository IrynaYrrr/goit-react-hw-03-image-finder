import React from 'react'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export default function ImageGallery({ cards }) {
  return (
    <ul className={css.imageGallery}>
      {cards.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem  key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />
      ))}
    </ul>
  )
}
