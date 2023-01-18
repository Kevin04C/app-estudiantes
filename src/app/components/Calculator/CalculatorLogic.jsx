import { useState } from 'react';

export const CalculatorLogic = () => {
  const [calculator, setCalculator] = useState({
    prev: '0',
    next: '',
    operation: '',
    display: '',
  });

  const handleNumber = (current, value) => {
    return calculator[`${current}`] === '0' && value !== 0
      ? value
      : (!calculator.operation && current === 'prev') ||
        (calculator.operation && current === 'next')
      ? (calculator[`${current}`] += value)
      : calculator[`${current}`];
  };

  const addNumber = (value) => {
    setCalculator({
      ...calculator,
      display: (calculator.display += value),
      prev: handleNumber('prev', value),
      next: handleNumber('next', value),
    });
  };

  const reset = () => {
    setCalculator({
      ...calculator,
      prev: '0',
      next: '',
      operation: '',
      display: '',
    });
  };

  const addOperation = (value) => {
    if (calculator.operation) calculate();

    setCalculator((calc) => ({
      ...calc,
      display: calc.display + value,
      operation: value,
    }));
  };

  const backspace = () => {
    setCalculator((calc) => ({
      ...calc,
      next: calc.operation ? calc.next.slice(0, -1) : calc.next,
      prev: !calc.operation ? calc.prev.slice(0, -1) : calc.prev,
      display: calc.display.slice(0, -1),
    }));
  };

  const math = (a, b, operation) => {
    return operation === '+'
      ? a + b
      : operation === '-'
      ? a - b
      : operation === 'x'
      ? a * b
      : a / b;
  };

  const calculate = () => {
    if (calculator.operation && calculator.next !== '') {
      const result = math(
        Number(calculator.prev),
        Number(calculator.next),
        calculator.operation,
      ).toString();

      setCalculator({
        ...calculator,
        prev: result === 'NaN' ? '0' : result,
        next: '',
        operation: '',
        display: result === 'NaN' ? 'Error' : result,
      });
    }
  };

  const handleClick = (event) => {
    const valueBtn = event.target.innerHTML;

    if (valueBtn === 'reset') {
      reset();
    } else if (valueBtn === 'del') {
      backspace();
    } else if (valueBtn === '=') {
      calculate();
    } else if (
      valueBtn === '+' ||
      valueBtn === '-' ||
      valueBtn === '/' ||
      valueBtn === 'x'
    ) {
      addOperation(valueBtn);
    } else {
      addNumber(valueBtn);
    }
  };

  const values = [
    [7, 8, 9, 'del'],
    [4, 5, 6, '+'],
    [1, 2, 3, '-'],
    ['.', 0, '/', 'x'],
    ['reset', '='],
  ];

  return {
    values,
    handleClick,
    calculator,
  };
};
