import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/images/arrow-right.svg';
import './styles.css';

function Button({ children, onClick, icon }) {
  const button = {
    color: '#ffffff',
    width: '237px',
    heigth: '48px',
    borderRadius: '1.4rem',
    backgroundColor: '#000',
    font: '700 2rem',
    textDecoration: 'none',

    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <>
      <div className='button-container'>
        <a onClick={onClick} className=''>
          {children}
          {icon === 'arrow' && <Arrow />}
        </a>
      </div>
    </>
  );
}

export default Button;
