import React from 'react';

import './styles.css';

function Drawer({ children, visible }) {
  const drawerContainer = {
    display: visible ? 'block' : 'none',
    position: 'fixed',
    width: '100%',
    height: 76,
    left: 0,
    bottom: 0,
    background: '#FFFFFF',
    boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.12)',
    transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s',
  };

  return (
    <>
      <div style={drawerContainer}>{children}</div>
    </>
  );
}

export default Drawer;
