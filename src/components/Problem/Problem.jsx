import React from 'react';
import styled from 'styled-components';
import Button from '../Nes/Button';

const ProblemContainer = styled.div`
  display: flex;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 1em;
  
  div {
    flex-grow: 1;
    text-align: center;
  }
`;
const ProblemOptions = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: center;
  
  > .item {
    margin-left: 1em;
    margin-right: 1em;
  }
`;

const Problem = () => (
  <div>
    <ProblemContainer>
      <div className="left">10</div>
      <div className="sign">+</div>
      <div className="right">5</div>
      <div className="equal">=</div>
      <div className="result">?</div>
      <div className="correct"><span className="nes-text is-success">Good</span></div>
    </ProblemContainer>
    <ProblemOptions>
      <Button className="item">12</Button>
      <Button className="item" variant="primary">15</Button>
      <Button className="item" variant="error">10</Button>
    </ProblemOptions>
  </div>
);

Problem.propTypes = {};

Problem.defaultProps = {};

export default Problem;
