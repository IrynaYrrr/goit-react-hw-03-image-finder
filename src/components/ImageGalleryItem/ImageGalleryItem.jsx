import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {

  state = {
    isShowModal: false
  };

  componentDidUpdate(prevProps, prevState) { document.getElementById('modalDiv')?.focus() }

  handleModalClick = () => {
    this.setState((prev) => ({
      isShowModal: !prev.isShowModal
    }))
  }

  render() {
    if (this.state.isShowModal) {
      return (<Modal largeImageURL={this.props.largeImageURL} onClick={this.handleModalClick} />)
    } else {
      return (
        <li className={css.imageGalleryItem} key={this.props.id} onClick={this.handleModalClick}>
          <img className={css.imageGalleryItemImage} src={this.props.webformatURL} alt="webCard" />
        </li>
      )
    }

  }
}
