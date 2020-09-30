import React, { createContext, useContext, useEffect, useReducer } from 'react';

import useLocalStorage from './useLocalStorage';

const INITIAL_STATE = {
  tests: null,
};

export const TestContext = createContext();

export const KEY_TEST = 'tests';

export const START_TEST = 'START_TEST';

export const ADD_ANSWER = 'ADD_ANSWER';

export const INIT_TEST = 'INIT_TEST';

export const CLEAR_TEST = 'CLEAR_TEST';

export const startTest = (tests) => ({ type: START_TEST, tests });

export const addAnswer = (answer) => ({ type: ADD_ANSWER, answer });

export const initTest = (tests) => ({
  type: INIT_TEST,
  tests,
});

export const clearTest = () => ({ type: CLEAR_TEST });

export const testReducer = (state, action) => {
  switch (action.type) {
    case START_TEST:
      const { tests } = state;

      const matchTest = tests?.find(
        (test) => test.category === action.tests.category
      );

      if (tests === null) {
        return { tests: [action.tests] };
      }
      if (matchTest) {
        return state;
      }

      return { tests: [...tests, action.tests] };

    case INIT_TEST:
      return {
        tests: [],
      };

    case ADD_ANSWER:
      return {
        ...state,
        tests: state.tests.map((test) => {
          if (test.category === action.answer.category) {
            test.answers.push(action.answer);
            test.answered_questions = test.answered_questions + 1;
          }
          return test;
        }),
      };

    case CLEAR_TEST:
      return INITIAL_STATE;

    default:
      return state;
  }
};

const TestProvider = (props) => {
  const [testSalved, saveTest] = useLocalStorage(KEY_TEST, INITIAL_STATE);
  const [tests, testDispatcher] = useReducer(testReducer, testSalved);

  useEffect(() => {
    saveTest(tests);
  }, [tests]);

  return <TestContext.Provider value={{ tests, testDispatcher }} {...props} />;
};

const useTestContext = () => useContext(TestContext);

export { TestProvider, useTestContext };
