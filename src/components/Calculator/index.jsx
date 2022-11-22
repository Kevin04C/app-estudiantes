import { Button } from './Button'
import { CalculatorLogic } from './CalculatorLogic'
import { Display } from './Display'

const Calculator = () => {
  const { values } = CalculatorLogic()

  return (
    <section>
      {values.map((value) => (
        <Button key={'calculator' + value} text={value} />
      ))}
      <Display />
    </section>
  )
}

export default Calculator
