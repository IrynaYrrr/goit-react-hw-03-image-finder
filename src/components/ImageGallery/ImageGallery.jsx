import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import React from 'react'

export default function ImageGallery({ cards }) {
  return (
    <ul class="gallery">
      {cards.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem webformatURL={webformatURL} />
      ))}

    </ul>
  )
}
