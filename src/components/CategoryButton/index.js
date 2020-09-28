import React from 'react';

import './styles.css';

function CategoryButton({ category, onClick }) {
  return (
    <div className='buttons-container'>
      <a onClick={onClick}>{category.name}</a>
    </div>
  );
}

export default CategoryButton;
