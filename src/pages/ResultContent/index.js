import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import mascote from '../../assets/images/mascote.png';
import './styles.css';
import { useTestContext } from '../../contexts/testContext';
import { jsPDF } from 'jspdf';
import { savePdf } from '../../utils/savePdf';

function ResultContent() {
  const history = useHistory();

  const { state } = useLocation();
  const { tests } = useTestContext();
  const [referenceTest, setReferenceTest] = useState();
  useEffect(() => {
    setReferenceTest(tests?.tests?.find((test) => test.category === state));
  }, []);

  const totalCorrect = () =>
    referenceTest &&
    referenceTest.answers.filter((question) => question.correct).length;

  const totalByDifficulty = (difficulty) => {
    const correct =
      referenceTest &&
      referenceTest.answers.filter(
        (question) => question.correct && question.difficulty === difficulty
      ).length;
    const incorrect =
      referenceTest &&
      referenceTest.answers.filter(
        (question) => !question.correct && question.difficulty === difficulty
      ).length;

    return { correct, incorrect };
  };

  const doc = new jsPDF();

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
            <strong>{totalCorrect()}</strong>
            <p>Corrects</p>
          </div>

          <div className='total'>
            <strong>{10 - totalCorrect()}</strong>
            <p>Incorrects</p>
          </div>
        </div>

        <div className='score-container'>
          <div>
            <strong>Easy</strong>{' '}
            <p>Correct: {totalByDifficulty('easy').correct}</p>
            <p>Incorrect: {totalByDifficulty('easy').incorrect}</p>
          </div>
          <div>
            <strong>Medium</strong>{' '}
            <p>Correct: {totalByDifficulty('medium').correct}</p>
            <p>Incorrect: {totalByDifficulty('medium').incorrect}</p>
          </div>
          <div>
            <strong>Hard</strong>{' '}
            <p>Correct: {totalByDifficulty('hard').correct}</p>
            <p>Incorrect: {totalByDifficulty('hard').incorrect}</p>
          </div>
        </div>
        <div className='button-save'>
          <Button
            onClick={() => {
              savePdf(referenceTest);
            }}
          >
            Save PDF
          </Button>
        </div>
        <div className='button-back'>
          <Button onClick={() => history.push('/')}>Back to start</Button>
        </div>
      </div>
    </>
  );
}

export default ResultContent;
