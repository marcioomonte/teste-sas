import React, { useEffect, useRef, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { useHistory, useLocation } from 'react-router-dom';
import useQuestions from '../../hooks/useQuestions';
import './styles.css';
import Modal from '../../components/Modal';
import Drawer from '../../components/Drawer';
import Button from '../../components/Button';

import { useTestContext, addAnswer } from '../../contexts/testContext';

import RateBalloon from '../../components/RateBalloon';

function QuestionContent() {
  const { state } = useLocation();
  const history = useHistory();
  const [questions, loadingQuestion, , getQuestions] = useQuestions();

  const [
    modalAnswerSelectedVisibility,
    setModalAnswerrSelectedVisibility,
  ] = useState(false);

  const [modalAnswerVisibility, setModalAnswerVisibility] = useState(false);
  const [referenceTest, setReferenceTest] = useState();
  const [question, setQuestion] = useState(questions[0]);
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [success, setSuccess] = useState(false);
  const { tests, testDispatcher } = useTestContext();

  const buttonRefs = useRef([]);

  const DIFFICULTS = ['easy', 'medium', 'hard'];

  useEffect(() => {
    const matchTest = tests?.tests?.find(
      (test) => test.category === state.name
    );

    if (matchTest.answers.length > 9) {
      history.push('/results', state.name);
    }

    const [lastQuestion] = matchTest.answers.slice(-1);

    const getDifficulty = () => {
      if (matchTest.answers.length < 2) {
        return 'medium';
      }
      const lastTwoAnswers = matchTest.answers.slice(-2);
      if (matchTest.answers.length >= 2) {
        if (lastTwoAnswers[0].correct && lastTwoAnswers[1].correct) {
          switch (lastQuestion.difficulty) {
            case 'medium':
              return 'hard';
            case 'hard':
              return 'hard';
            case 'easy':
              return 'medium';
            default:
              break;
          }
        }
        if (!lastTwoAnswers[0].correct && !lastTwoAnswers[1].correct) {
          switch (lastQuestion.difficulty) {
            case 'medium':
              return 'easy';
            case 'hard':
              return 'medium';
            case 'easy':
              return 'easy';
            default:
              break;
          }
        }
      }
      return lastQuestion.difficulty;
    };

    console.log(matchTest);

    setQuestion(getQuestions(state.id, getDifficulty()));

    setReferenceTest(
      tests?.tests?.find((test) => test.category === state.name)
    );

    setModalAnswerVisibility(false);
  }, [tests]);

  useEffect(() => {
    if (referenceTest?.answers.length === 0) {
      setQuestion(getQuestions(state.id, DIFFICULTS[1]));
    }
  }, [referenceTest]);

  const onAnswerSelected = (question, answer) => {
    setSelectedAnswer(answer);
    setModalAnswerrSelectedVisibility(true);
  };

  const handleAnswer = () => {
    if (questions[0].correct_answer === selectedAnswer) {
      setModalAnswerrSelectedVisibility(false);
      setSuccess(true);
      setModalAnswerVisibility(true);
    } else {
      setModalAnswerrSelectedVisibility(false);
      setSuccess(false);
      setModalAnswerVisibility(true);
    }
  };

  const handleNext = () => {
    testDispatcher(
      addAnswer({
        ...questions[0],
        selected_answer: selectedAnswer,
        correct: questions[0].correct_answer === selectedAnswer,
      })
    );
  };

  return (
    <>
      <PageHeader title={state.name} />
      <div id='question-content-container' className='container'>
        <div className='subtitle'>
          <span>Question {referenceTest?.answered_questions + 1} / 10</span>
          <RateBalloon difficulty={questions[0]?.difficulty} />
        </div>
        {!loadingQuestion ? (
          <>
            <div className='question-container'>
              <p>{questions[0]?.question} </p>
            </div>
            <div className='answer-container'>
              {questions[0]?.answers.map((answer, i) => (
                <div
                  key={answer}
                  onClick={() => onAnswerSelected(questions[0], answer)}
                  className='answer-box'
                  ref={(el) => (buttonRefs.current[i] = el)}
                >
                  <p>{answer}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          'Loading...'
        )}
      </div>
      <Drawer visible={modalAnswerSelectedVisibility}>
        <Button onClick={() => handleAnswer()} icon='arrow'>
          Answer
        </Button>
      </Drawer>
      <Modal success={success} visible={modalAnswerVisibility}>
        <Drawer visible={true}>
          <Button onClick={() => handleNext()}>Next</Button>
        </Drawer>
      </Modal>
    </>
  );
}

export default QuestionContent;
