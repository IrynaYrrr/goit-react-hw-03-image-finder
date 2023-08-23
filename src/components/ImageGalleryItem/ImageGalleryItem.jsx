import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {

  state = {
    isShowModal: false
  };

  handleModalClick = () => {
    this.setState((prev) => ({
      isShowModal: !prev.isShowModal
    }))
  }

  render() {
    const { isShowModal } = this.state;
    const { webformatURL, largeImageURL, id } = this.props;

    return (
      <li
        className={css.imageGalleryItem}
        key={id}
        onClick={this.handleModalClick}
      >
        <img
          className={css.imageGalleryItemImage}
          src={webformatURL}
          alt="webCard"
        />
        {isShowModal && (
          <Modal
            largeImageURL={largeImageURL}
            onClick={this.handleModalClick}
          />)}
      </li>
    )
  }
}
