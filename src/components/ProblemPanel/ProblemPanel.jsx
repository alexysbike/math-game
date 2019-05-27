import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useMappedState, useDispatch } from 'redux-react-hook';
import Problem from './components/Problem';
import ProblemOptions from './components/ProblemOptions';
import useProblemData from './useProblemData';

const icons = [
  'nes-bcrikko',
  'nes-mario',
  'nes-ash',
  'nes-pokeball',
  'nes-bulbasaur',
  'nes-charmander',
  'nes-squirtle',
  'nes-kirby',
];

const Container = styled.div`margin-top: 2em;`;
const IconContainer = styled.div`
    position: fixed;
    bottom: 0;
    text-align: center;
    left: 0;
    right: 0;
    padding-bottom: 2em;
`;

const ProblemPanel = () => {
  // State
  const [left, right, result, options, generate] = useProblemData(1, 9, 3);
  const [response, setResponse] = useState(null);
  // Store
  const mapState = useCallback(state => ({
    resolved: state.problems.resolved,
  }), []);
  const dispatch = useDispatch();
  const { resolved } = useMappedState(mapState);
  // callbacks
  const onOptionClick = useCallback((option) => {
    setResponse(option);
    if (result === option) {
      dispatch.problems.setResolved(resolved + 1);
      setTimeout(() => {
        setResponse(null);
        generate();
      }, 1000);
    }
  }, [result, generate]);
  return (
    <>
      <Container className="nes-container with-title">
        <div className="title">{`Resolved: ${resolved}`}</div>
        <Problem left={left} right={right} result={result} response={response} />
      </Container>
      <ProblemOptions
        disabled={result === response}
        options={options}
        result={result}
        onOptionClick={onOptionClick}
      />
      {response === result && (
        <IconContainer>
          <i className={icons[Math.floor(resolved / 5)] || icons[icons.length - 1]} />
        </IconContainer>
      )}
    </>
  );
};

ProblemPanel.propTypes = {};

ProblemPanel.defaultProps = {};

export default ProblemPanel;
