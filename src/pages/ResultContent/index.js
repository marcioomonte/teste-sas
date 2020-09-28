import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';

// import { Container } from './styles';

function ResultContent() {
  const history = useHistory();
  return (
    <>
      <PageHeader title='teste' />
      <h1>Resultado</h1>
      <Button onClick={() => history.push('/')}> Back to start</Button>
    </>
  );
}

export default ResultContent;
