import React, { useState } from 'react';

import './styles.css';

import tickImg from '../../assets/images/tick.svg';
import crossImg from '../../assets/images/cross.svg';

function Modal({ children, visible, success }) {
  // const [_visible, setVisible] = useState(visible);

  const modalStyle = {
    display: visible ? 'block' : 'none',
    position: 'fixed',
    backgroundColor: 'rgba(0,0,0,0.4)',
  };

  const modalContent = {
    border: success ? '3px solid #32cb82' : '3px solid #FF4F4F',
  };

  return (
    <div style={modalStyle} className='modal'>
      <div className='modal-content' style={modalContent}>
        <img src={success ? tickImg : crossImg} />
        {success ? <p>Você acertou!</p> : <p> Você errou! </p>}
      </div>
      {children}
    </div>
  );
}

export default Modal;
