/* eslint-disable react/no-array-index-key */
import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../Nes/Button';

const Container = styled.div`
  margin-top: 5em;
  display: flex;
  justify-content: center;
  
  > .item {
    margin-left: 1em;
    margin-right: 1em;
    width: 5em;
  }
`;

const getVariant = (option, result) => (option !== result ? 'error' : 'success');

const ProblemOptions = ({
  options, onOptionClick, result, disabled,
}) => {
  const [dirty, setDirty] = useState([]);
  const onButtonClick = useCallback((option, index) => {
    onOptionClick(option);
    setDirty(prev => [...prev, index]);
  }, [onOptionClick]);
  // Reset
  useEffect(() => {
    setDirty([]);
  }, [options]);
  return (
    <Container>
      {options.map((option, index) => (
        <Button
          key={`${option}${index}`}
          onClick={() => onButtonClick(option, index)}
          className="item"
          variant={!dirty.includes(index) ? null : getVariant(option, result)}
          disabled={disabled}
        >
          {option}
        </Button>
      ))}
    </Container>
  );
};

ProblemOptions.propTypes = {
  onOptionClick: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.number),
  result: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
};

const dummy = () => {};
const dummyArray = [];
ProblemOptions.defaultProps = {
  onOptionClick: dummy,
  options: dummyArray,
  disabled: false,
};

export default ProblemOptions;
