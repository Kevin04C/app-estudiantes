import React from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { MdOutlineSecurity } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spinner } from '../../app/components/Spinner';
import { useForm } from '../../hooks/useForm';
import { startChangePassword } from '../../store/auth/thunks';
import { AuthLayout } from '../layout/AuthLayout';

const initalForm = {
  password: '',
  confirmPassword: '',
};

const validate = (formState) => {
  const { password, confirmPassword } = formState;
  const errors = {};

  if (!password.trim()) {
    errors.password = 'La contraseña es requerida';
  } else if (password.length < 6) {
    errors.password = 'La contraseña debe ser mayor a 6 dígitos';
  }

  if (!confirmPassword.trim()) {
    errors.confirmPassword = 'La confirmación de la contraseña es requerida';
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = 'Las contraseñas no son iguales';
  }

  return errors;
};
export const RecoverPassword = () => {
  const dispatch = useDispatch();
  const { errorMessage, successMessage, changingPassword } = useSelector((state) => state.auth);

  function submit(formState) {
    const { password } = formState;
    const userId = localStorage.getItem('id');
    const cryptotoken = localStorage.getItem('cryptotoken');

    dispatch(startChangePassword({ password, userId, cryptotoken }));
  }

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
  }, [successMessage]);

  const {
    password,
    confirmPassword,
    formErrors,
    touched,
    handleSubmit,
    handleInputChange,
    handleBlur,
  } = useForm(initalForm, validate, submit);

  return (
    <AuthLayout>
      <div className='auth__wrapper '>
        <div className='auth__wrapper__unique-center'>
          <div className='auth__form'>
            <div className='auth__form__wrapper'>
              <form className='form' onSubmit={handleSubmit}>
                <h2 className='form__title'>Restablece tu contraseña</h2>
                <div className='form__group'>
                  <label className='form__content'>
                    <MdOutlineSecurity className='form__icon' />
                    <input
                      type='password'
                      placeholder='Contraseña'
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      name='password'
                      className='form__input'
                      value={password}
                    />
                  </label>
                  {formErrors.password && touched.password && (
                    <span className='form__error'>{formErrors.password}</span>
                  )}
                </div>
                <div className='form__group'>
                  <label className='form__content'>
                    <MdOutlineSecurity className='form__icon' />
                    <input
                      type='password'
                      placeholder='Confirma tu contraseña'
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      name='confirmPassword'
                      className='form__input'
                      value={confirmPassword}
                    />
                  </label>
                  {formErrors.confirmPassword && touched.confirmPassword && (
                    <span className='form__error'>{formErrors.confirmPassword}</span>
                  )}
                </div>

                {!!errorMessage && (
                  <span className='form__error form__error--form-send'>{errorMessage}</span>
                )}

                <button
                  type='submit'
                  className={`form__btn-submit ${changingPassword ? 'grayscale not-pointer' : ''}`}
                  disabled={changingPassword}
                >
                  {changingPassword ? <Spinner /> : 'Ingresar'}
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
