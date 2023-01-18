import { useState } from 'react';
import PropTypes from 'prop-types';

export const useModal = (initialState) => {
  const [active, setActive] = useState(initialState);

  const toggleActiveModal = () => {
    setActive(!active);
  };

  return [active, toggleActiveModal];
};

useModal.propTypes = {
  initialState: PropTypes.bool,
};
