import { Button } from './Button';
import { CalculatorLogic } from './CalculatorLogic';
import { Display } from './Display';

const Calculator = () => {
  const { values, handleClick, calculator } = CalculatorLogic();

  return (
    <article className='calculator'>
      <Display text={calculator.display} />
      <div className='calculator__button'>
        {values.flat().map((value) => (
          <Button key={value} text={value} handleClick={handleClick} />
        ))}
      </div>
    </article>
  );
};

export default Calculator;
