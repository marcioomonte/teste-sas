import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import "./styles.css";
import { useLocation } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";

function QuestionContent() {
  const { state } = useLocation();
  const [questions, , , { getQuestions }] = useQuestions(state.id);

  useEffect(() => {
    getQuestions(state.id);
  }, [getQuestions, state]);

  return (
    <>
      <PageHeader title={state.name} />
      <h1>teste1</h1>
    </>
  );
}

export default QuestionContent;
