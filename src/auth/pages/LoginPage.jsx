import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { MdOutlineEmail, MdOutlineSecurity } from 'react-icons/md';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../../store/auth/thunks';
import { Spinner } from '../../app/components/Spinner';

const initialForm = {
  email: '',
  password: '',
};

const validate = (stateForm) => {
  const { email, password } = stateForm;
  const errors = {};

  if (!email.trim()) {
    errors.email = 'El correo es requerido';
  } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email)) {
    errors.email = 'El correo no tiene un formato válido';
  }

  if (!password.trim()) {
    errors.password = 'La contraseña es requerida';
  } else if (password.length < 6) {
    errors.password = 'La contraseña debe ser mayor a 6 caracteres';
  }

  return errors;
};

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);

  const submit = (data) => {
    dispatch(startLogin(data));
  };

  const {
    email,
    password,
    formErrors,
    touched,

    handleInputChange,
    handleSubmit,
    handleBlur,
  } = useForm(initialForm, validate, submit);

  const disbled = useMemo(() => status === 'checking', [status]);

  return (
    <AuthLayout>
      <div className='auth__wrapper'>
        <div className='welcome '>
          <div className='welcome__wrapper'>
            <picture className='welcome__picture'>
              <img src='/assets/welcome.svg' alt='welcome svg' className='welcome__img' />
            </picture>
            <h2 className='welcome__title'>¡BIENVENIDO DE NUEVO!</h2>
            <p className='welcome__paragraph'>Sé lo mejor de ti mismo</p>
          </div>
        </div>
        <div className='auth__form'>
          <div className='auth__form__wrapper'>
            <form className='form' onSubmit={handleSubmit}>
              <h2 className='form__title'>Iniciar Sesión</h2>
              <div className='from__group'>
                <label className='form__content'>
                  <MdOutlineEmail className='form__icon' />
                  <input
                    type='email'
                    className='form__input'
                    placeholder='Email'
                    name='email'
                    onChange={handleInputChange}
                    autoComplete='off'
                    value={email}
                    onBlur={handleBlur}
                  />
                </label>
                {formErrors.email && touched.email && (
                  <span className='form__error'>{formErrors.email}</span>
                )}
              </div>

              <div className='form__group'>
                <label className='form__content'>
                  <MdOutlineSecurity className='form__icon' />
                  <input
                    type='password'
                    className='form__input'
                    placeholder='Password'
                    name='password'
                    onChange={handleInputChange}
                    autoComplete='off'
                    value={password}
                    onBlur={handleBlur}
                  />
                </label>
                {formErrors.password && touched.password && (
                  <span className='form__error'>{formErrors.password}</span>
                )}
              </div>
              {!!errorMessage && (
                <span className='form__error form__error--form-send'>{errorMessage}</span>
              )}

              <button
                type='submit'
                className={`form__btn-submit ${disbled ? 'grayscale not-pointer' : ''}`}
                disabled={disbled}
              >
                {status === 'checking' ? <Spinner /> : 'Ingresar'}
              </button>
            </form>
            <div className='recover-password'>
              <Link className='recover-password__link' to='/auth/recover-account'>
                ¿Has olvidado tu contraseña?
              </Link>
            </div>
            <div className='not-account'>
              <span className='not-account__title'>¿Aún no tienes cuenta?</span>

              <Link to='/auth/register' className='not-account__link'>
                Crear cuenta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
