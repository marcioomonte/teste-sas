import { useState, useEffect, useCallback } from "react";
import { api } from "../services/api";

function useQuestions({ category }) {
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const getQuestions = useCallback((category) => {
    setLoading(true);
    api
      .get(`?amount=10&type=multiple&category=${category}`) // a url ja esta na base
      .then((response) => response.data.results)
      .then(setQuestions)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    console.log(category);
    getQuestions(category);
  }, [getQuestions, category]);

  return [questions, loading, error, { getQuestions }];
}

export default useQuestions;
