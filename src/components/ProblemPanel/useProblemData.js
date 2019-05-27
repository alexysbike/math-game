import { useState, useMemo } from 'react';
import { randomInt, shuffleArray } from '../../utils/helpers';

const getOption = (result, whitelist = []) => {
  const accuration = randomInt(30, 180) / 100;
  const generated = Math.round(accuration * result);
  if ((Array.isArray(whitelist) && whitelist.includes(generated)) || whitelist === generated) {
    return getOption(accuration, result, whitelist);
  }
  return generated;
};

const getOptions = (num, result) => {
  const whitelist = [result];
  return [...Array(num)].map(() => {
    const option = getOption(result, whitelist);
    whitelist.push(option);
    return option;
  });
};

const useProblemData = (min, max, nOptions) => {
  const [counter, setCounter] = useState(0);
  return useMemo(() => {
    const generate = () => setCounter(counter + 1);
    const left = randomInt(min, max);
    const right = randomInt(min, max);
    const unshuffle = [left + right, ...getOptions(nOptions - 1, left + right)];
    const options = shuffleArray(unshuffle);
    return [left, right, left + right, options, generate];
  }, [counter, max, min, nOptions]);
};

export default useProblemData;
