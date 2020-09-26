import React from 'react';
import { ReactComponent as StarIcon } from '../../assets/images/star.svg';
import './styles.css';

function RateBalloon({ difficulty }) {
  const switchText = () => {
    switch (difficulty) {
      case 'easy':
        return 'Easy';
      case 'medium':
        return 'Medium';
      case 'hard':
        return 'Hard';
      default:
        break;
    }
  };
  return (
    <span className='rate-balloon'>
      <StarIcon className='star-filled' />
      <StarIcon
        className={difficulty === 'easy' ? 'star-empty' : 'star-filled'}
      />
      <StarIcon
        className={difficulty === 'hard' ? 'star-filled' : 'star-empty'}
      />

      <p>{switchText()}</p>
    </span>
  );
}

export default RateBalloon;
