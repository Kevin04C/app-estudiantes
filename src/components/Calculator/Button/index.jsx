import PropTypes from 'prop-types'

export const Button = ({ text }) => {
  return <button>{text}</button>
}

Button.propTypes = {
  text: PropTypes.string
}
