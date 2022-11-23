import PropTypes from 'prop-types'

export const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>
}
// text isn't defined in button Prototype because could be string or number
Button.propTypes = {
  handleClick: PropTypes.func
}
