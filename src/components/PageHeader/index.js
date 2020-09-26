import React from 'react';
import './styles.css';

function PageHeader({ children, title }) {
  return (
    <header className='page-header'>
      <div className='header-content'>
        <strong>{title}</strong>
        {children}
      </div>
    </header>
  );
}

export default PageHeader;
