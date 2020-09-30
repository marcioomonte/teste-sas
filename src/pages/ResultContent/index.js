import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import mascote from '../../assets/images/mascote.png';
import './styles.css';

function ResultContent() {
  const history = useHistory();
  const { state } = useLocation();
  return (
    <>
      <PageHeader title={state} />
      <div id='resultContaier' className='container'>
        <img src={mascote} alt='mascote' />
        <hr />
        <div className='balloon'>
          <h4>Check your performance in the test</h4>
        </div>
        <div className='total-container'>
          <div className='total'>
            <strong>7</strong>
            <p>Corrects</p>
          </div>

          <div className='total'>
            <strong>7</strong>
            <p>Incorrects</p>
          </div>
        </div>

        <div className='score-container'>
          <div>
            <strong>Easy</strong> <p>Correct: 1</p>
            <p>Incorrect: 2</p>
          </div>
          <div>
            <strong>Medium</strong> <p>Correct: 1</p>
            <p>Medium: 2</p>
          </div>
          <div>
            <strong>Hard</strong> <p>Correct: 1</p>
            <p>Incorrect: 2</p>
          </div>
        </div>
        <div className='button-back'>
          <Button onClick={() => history.push('/')}>Back to start</Button>
        </div>
      </div>
    </>
  );
}

export default ResultContent;
