import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {

  state = {
    isShowModal: false
  };

  handleModalOpen = () => {
    this.setState(() => ({
      isShowModal: true
    }))
  }


  handleModalClose = () => {
    this.setState(() => ({
      isShowModal: false
    }))
  }

  render() {
    const { isShowModal } = this.state;
    const { webformatURL, largeImageURL, id } = this.props;

    return (
      <li
        className={css.imageGalleryItem}
        key={id}
        onClick={this.handleModalOpen}
      >
        <img
          className={css.imageGalleryItemImage}
          src={webformatURL}
          alt="webCard"
        />
        {isShowModal && (
          <Modal
            largeImageURL={largeImageURL}
            onClick={this.handleModalClose}
          />)}
      </li>
    )
  }
}
