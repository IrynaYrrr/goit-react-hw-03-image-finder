import React, { Component } from 'react';
import css from './Modal.module.css';

// export default function Modal({ largeImageURL, onClick }) {

//   const keyDownEvent = (e) => {
//     if (e.code === 'Escape') {
//       onClick()
//     }
//   }
//   return (
//     <div onClick={onClick} tabIndex={0} onKeyDown={keyDownEvent} className={css.overlay}>
//       <div className={css.modal}>
//         <img src={largeImageURL} alt="largeCard" />
//       </div>
//     </div>
//   )
// }

export default class Modal extends Component {

  keyDownEvent = (e) => {
    if (e.code === 'Escape') {
      // onClick()
      console.log('code === Escape:)');
    };
  };

  componentDidMount(){
    document.addEventListener('keydown',this.keyDownEvent);
  }
  // this.componentWillUnmount(){ }


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
