import { Component } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  render() {
    const { largeImageURL } = this.props;
    return (
      createPortal(
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <img src={largeImageURL} alt="" />
          </div>
        </div>
      ),
      modalRoot
    );
  }
}

export default Modal;
