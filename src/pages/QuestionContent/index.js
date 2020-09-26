import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import { useLocation } from 'react-router-dom';
import useQuestions from '../../hooks/useQuestions';

import { ReactComponent as StarIcon } from '../../assets/images/star.svg';

function QuestionContent() {
  const { state } = useLocation();
  const [questions] = useQuestions(state.id);

  return (
    <>
      <PageHeader title={state.name} />
      <div id='question-content-container' className='container'>
        <div className='subtitle'>
          <span>Questão 1</span>
          <span className='rate-balloon'>
            <StarIcon className='.star-filled' />
            <StarIcon className='.star-filled' />
            <StarIcon className='star-empty' />
            <p>Médio</p>
          </span>
        </div>
        <div className='question-container'>
          <p>{questions[0]?.question} </p>
        </div>
        <div className='answer-container'>
          {questions[0]?.answers.map((answer) => (
            <div
              key={answer}
              onClick={() => console.log({ answer })}
              className='answer-box'
            >
              <p>{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default QuestionContent;
