import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProblemContainer = styled.div`
  display: flex;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 1em;
  
  div {
    flex-grow: 1;
    text-align: center;
    min-width: 3em;
  }
`;

const Problem = ({
  left, right, result, response,
}) => {
  const resultClass = !response
    ? ''
    : result === response
      ? 'is-success'
      : 'is-error';
  return (
    <ProblemContainer>
      <div className="left">{left}</div>
      <div className="sign">+</div>
      <div className="right">{right}</div>
      <div className="equal">=</div>
      <div className="result"><span className={`nes-text ${resultClass}`}>{response || '?'}</span></div>
    </ProblemContainer>
  );
};

Problem.propTypes = {
  left: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
  result: PropTypes.number.isRequired,
  response: PropTypes.number,
};

Problem.defaultProps = {
  response: null,
};

export default Problem;
