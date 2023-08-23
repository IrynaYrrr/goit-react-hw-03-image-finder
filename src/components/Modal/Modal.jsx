import React, { Component } from 'react';
import css from './Modal.module.css';

export default class Modal extends Component {

  keyDownEvent = (e) => {
    if (e.code === 'Escape') {
      this.props.onClick();
    };
  };

  onClickEvent = (e) => {
    if(e.srcElement.localName !== 'img') {
      this.props.onClick();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDownEvent);
    document.addEventListener('click', this.onClickEvent);

  }
  componentWillUnmount() {
    document.removeEventListener('keydown',this.keyDownEvent);
    document.removeEventListener('click', this.onClickEvent);
  }

  render() {
    const { largeImageURL } = this.props;

    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={largeImageURL} alt="largeCard" />
        </div>
      </div>
    )
  }

}
