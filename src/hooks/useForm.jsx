import { useState } from 'react';

export const useForm = (initialForm) => {
  const [stateForm, setStateForm] = useState(initialForm);

  const reset = () => {
    setStateForm(initialForm);
  };

  const handleInputChange = ({ target }) => {
    setStateForm({
      ...stateForm,
      [target.name]: target.value,
    });
  };

  return {
    stateForm,
    ...stateForm,

    reset,
    handleInputChange,
  };
};
