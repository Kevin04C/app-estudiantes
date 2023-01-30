import React from 'react';
import { useEffect } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Spinner } from '../../app/components/Spinner';
import { useForm } from '../../hooks/useForm';
import { startSearchEmail } from '../../store/auth/thunks';
import { AuthLayout } from '../layout/AuthLayout';

const initalForm = {
  email: '',
};

const validate = (formState) => {
  const { email } = formState;
  const errors = {};

  if (!email.trim()) {
    errors.email = 'El correo es requerido';
  } else if (!/^([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(email)) {
    errors.email = 'El correo ingresado no es válido';
  }

  return errors;
};

export const RecoverAccount = () => {
  const dispatch = useDispatch();
  const { errorMessage, foundEmail, searchingEmail } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const submit = (formState) => {
    dispatch(startSearchEmail(formState));
  };

  const { password, handleSubmit, handleInputChange, handleBlur, formErrors, touched } = useForm(
    initalForm,
    validate,
    submit,
  );

  useEffect(() => {
    if (foundEmail) {
      navigate('/auth/recover-password', { replace: true });
    }
  }, [foundEmail]);

  return (
    <AuthLayout>
      <div className='auth__wrapper '>
        <div className='auth__wrapper__unique-center'>
          <div className='auth__form'>
            <div className='auth__form__wrapper'>
              <form className='form' onSubmit={handleSubmit}>
                <h2 className='form__title'>Recupera tu cuenta</h2>
                <div className='form__group'>
                  <label className='form__content'>
                    <MdOutlineEmail className='form__icon' />
                    <input
                      type='text'
                      className='form__input'
                      placeholder='ingresa tu correo'
                      name='email'
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      value={password}
                      autoComplete='off'
                    />
                  </label>

                  {formErrors.email && touched.email && (
                    <span className='form__error'>{formErrors.email}</span>
                  )}
                </div>
                {!!errorMessage && (
                  <span className='form__error form__error--form-send'>{errorMessage}</span>
                )}
                <button
                  type='submit'
                  className={`form__btn-submit ${searchingEmail ? 'grayscale not-pointer' : ''}`}
                  disabled={searchingEmail}
                >
                  {searchingEmail ? <Spinner /> : 'Buscar'}
                </button>
                <div className='not-account'>
                  <span className='not-account__title'>¿Ya tienes cuenta?</span>

                  <Link to='/auth/login' className='not-account__link'>
                    Ingresar
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
