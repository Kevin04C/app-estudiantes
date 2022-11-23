import { Button } from './Button'
import { CalculatorLogic } from './CalculatorLogic'
import { Display } from './Display'

const Calculator = () => {
  const { values, handleClick, calculator } = CalculatorLogic()

  return (
    <section>
      <Display text={calculator.display} />
      {values.flat().map((value) => (
        <Button key={value} text={value} handleClick={handleClick} />
      ))}
    </section>
  )
}

export default Calculator
