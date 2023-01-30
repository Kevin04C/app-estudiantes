import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm, validate, submit) => {
  const [stateForm, setStateForm] = useState(initialForm);
  const [formErrors, setFormErrors] = useState({ formSubmited: false });
  const [touched, setTouched] = useState({});
  const [emptyFields, setEmptyFields] = useState(true);

  const isValid = useMemo(() => {
    return Object.keys(formErrors).length === 0;
  }, [formErrors, stateForm]);

  const handleInputChange = ({ target }) => {
    setStateForm({
      ...stateForm,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    const empty = Object.values(stateForm).every((field) => field.trim() === '');
    setFormErrors(validate(stateForm));

    setEmptyFields(empty); 
  }, [stateForm]);

  const handleBlur = (e) => {
    handleInputChange(e);
    setFormErrors(validate(stateForm));

    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValid) {
      const touchedData = {};
      setFormErrors(validate(stateForm));

      for (const key of Object.keys(initialForm)) {
        if (Object.hasOwn(initialForm, key)) {
          touchedData[key] = true;
        }
      }

      setTouched(touchedData);
    }

    if (isValid) {
      submit(stateForm);
    }
  };

  const reset = () => {
    setStateForm(initialForm);
  };

  return {
    //propterties
    stateForm,
    ...stateForm,
    formErrors,
    touched,
    isValid,
    emptyFields,

    //methods
    reset,
    handleInputChange,
    handleBlur,
    handleSubmit,
  };
};
