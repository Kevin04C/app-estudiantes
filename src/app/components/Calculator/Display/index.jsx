import PropTypes from 'prop-types';

export const Display = ({ text }) => {
  return (
    <div className='display'>
      <p className='display__paragraph'>{text}</p>
    </div>
  );
};

Display.propTypes = {
  text: PropTypes.string,
};
