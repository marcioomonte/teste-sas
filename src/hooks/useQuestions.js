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

  const newAnswers = [
    ...incorrect_answers.map((i) => atob(i)),
    atob(correct_answer),
  ];

  return {
    category: atob(category),
    correct_answer: atob(correct_answer),
    difficulty: atob(difficulty),
    answers: newAnswers.sort(() => Math.random() - 0.5), //randomiza a resposta
    question: atob(question),
    type: atob(type),
  };
};

function useQuestions(category, difficulty, serializer = defaultSerializer) {
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const getQuestions = (category, difficulty) => {
    setLoading(true);
    api
      .get(
        `api.php?amount=1&type=multiple&category=${category}&encode=base64&difficulty=${difficulty}`
      )
      .then((response) => response.data.results)
      .then((_questions) => _questions.map(serializer))
      .then(setQuestions)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (category && difficulty) {
      getQuestions(category, difficulty);
    }
  }, [category, difficulty]);

  return [questions, loading, error, getQuestions];
}

export default useQuestions;
