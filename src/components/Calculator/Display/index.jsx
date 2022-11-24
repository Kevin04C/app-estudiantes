import PropTypes from 'prop-types'

export const Display = ({ text }) => {
  return (
    <article className="display">
      <p className="display__paragraph">{text}</p>
    </article>
  )
}

Display.propTypes = {
  text: PropTypes.string
}
