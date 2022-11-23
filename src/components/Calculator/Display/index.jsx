import PropTypes from 'prop-types'

export const Display = ({ text }) => {
  return (
    <article>
      <p>{text}</p>
    </article>
  )
}

Display.propTypes = {
  text: PropTypes.string
}
