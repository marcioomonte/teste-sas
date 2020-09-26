import { useState, useEffect, useCallback } from 'react';
import { api } from '../services/api';

const defaultSerializer = (questions) => {
  const {
    category,
    correct_answer,
    difficulty,
    incorrect_answers,
    question,
    type,
  } = questions;

  return {
    category: atob(category),
    correct_answer: atob(correct_answer),
    difficulty: atob(difficulty),
    answers: [
      ...incorrect_answers.map((i) => atob(i)),
      atob(correct_answer),
    ].sort(function () {
      return 0.5 - Math.random();
    }),
    question: atob(question),
    type: atob(type),
  };
};

function useQuestions(category, serializer = defaultSerializer) {
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const getQuestions = useCallback(
    (category) => {
      setLoading(true);
      api
        .get(
          `api.php?amount=10&type=multiple&category=${category}&encode=base64`
        ) // a url ja esta na base
        .then((response) => response.data.results)
        .then((_questions) => _questions.map(serializer))
        .then(setQuestions)
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    },
    [serializer]
  );

  useEffect(() => {
    getQuestions(category);
  }, [getQuestions, category]);

  return [questions, loading, error, { getQuestions }];
}

export default useQuestions;
