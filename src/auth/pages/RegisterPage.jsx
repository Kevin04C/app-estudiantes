import { AuthLayout } from '../layout/AuthLayout';
import { Link } from 'react-router-dom';
import { MdOutlineEmail, MdOutlineSecurity } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startRegister } from '../../store/auth/thunks';
import { useEffect, useMemo } from 'react';
import { Spinner } from '../../app/components/Spinner';
import toast from 'react-hot-toast';

const formData = {
  name: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const formValidation = (stateForm) => {
  const { name, username, email, password, confirmPassword } = stateForm;
  const errors = {};

  if (!name.trim()) {
    errors.name = 'El nombre es requerido';
  } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(name)) {
    errors.name = 'El nombre no solo debe contener letras y espacio';
  }

  if (!username.trim()) {
    errors.username = 'El nombre de usuario es requerido';
  } else if (username.length < 5) {
    errors.username = 'El nombre de usuario debe ser mayor a 4 caracteres';
  }

  if (!email.trim()) {
    errors.email = 'El correo es requerido';
  } else if (!/^([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(email)) {
    errors.email = 'El correo no es valido';
  }

  if (!password.trim()) {
    errors.password = 'La contraseña es requerida';
  } else if (password.length < 6) {
    errors.password = 'La contraseña debe de tener minimo 6 caracteres';
  }

  if (!confirmPassword.trim()) {
    errors.confirmPassword = 'La confirmación contraseña es requerida';
  } else if (confirmPassword.length < 6) {
    errors.confirmPassword = 'La contraseña debe de tener minimo 6 caracteres';
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'Las contraseñas no coinciden';
  }

  return errors;
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage, successMessage } = useSelector((state) => state.auth);

  const submit = (data) => {
    dispatch(startRegister(data));
  };

  const {
    name,
    username,
    email,
    password,
    confirmPassword,

    formErrors,
    touched,

    handleBlur,
    handleInputChange,
    handleSubmit,
  } = useForm(formData, formValidation, submit);

  useEffect(() => {
    if (successMessage.length > 0) {
      toast.success(successMessage, {position: 'top-left',duration: 10000});
    }
  }, [successMessage]);
  


  const disbled = useMemo(() => status === 'checking', [status]);

  return (
    <AuthLayout>
      <div className='auth__wrapper'>
        <div className='welcome order-2'>
          <div className='welcome__wrapper'>
            <h2 className='welcome__title'>HOLA, ESTUDIANTE</h2>
            <p className='welcome__paragraph'>
              AppStudent es una herramienta que te brinda todas las necesidades
              básicas para ti en un solo lugar, todo lo que buscas lo buscas lo
              encuentras aquí.
            </p>
            <picture className='welcome__picture'>
              <img
                src='/assets/register.svg'
                alt='welcome svg'
                className='welcome__img'
              />
            </picture>
          </div>
        </div>
        <div className='auth__form order-1'>
          <div className='auth__form__wrapper'>
            <form className='form' onSubmit={handleSubmit}>
              <h2 className='form__title'>Registrar</h2>
              <div className='form__group'>
                <label className='form__content'>
                  <AiOutlineUser className='form__icon' />
                  <input
                    type='text'
                    className='form__input'
                    placeholder='Nombre'
                    name='name'
                    value={name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    autoComplete='off'
                  />
                </label>
                {formErrors.name && touched.name && (
                  <span className='form__error'>{formErrors.name}</span>
                )}
              </div>

              <div className='form__group'>
                <label className='form__content'>
                  <ImProfile className='form__icon' />
                  <input
                    type='text'
                    className='form__input'
                    placeholder='Nombre de usuario'
                    name='username'
                    value={username}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    autoComplete='off'
                  />
                </label>
                {formErrors.username && touched.username && (
                  <span className='form__error'>{formErrors.username}</span>
                )}
              </div>
              <div className='form__group'>
                <label className='form__content'>
                  <MdOutlineEmail className='form__icon' />
                  <input
                    type='text'
                    className='form__input'
                    placeholder='Correo'
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    autoComplete='off'
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
                    placeholder='Contraseña'
                    name='password'
                    value={password}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    autoComplete='off'
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
                    className='form__input'
                    placeholder='Confirmar contraseña'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                </label>
                {formErrors.confirmPassword && touched.confirmPassword && (
                  <span className='form__error'>
                    {formErrors.confirmPassword}
                  </span>
                )}
              </div>
              {!!errorMessage && (
                <span className='form__error form__error--form-send'>
                  {errorMessage}
                </span>
              )}
              <button
                type='submit'
                className={`form__btn-submit ${
                  disbled ? 'grayscale not-pointer' : ''
                }`}
                disabled={disbled}
              >
                {status === 'checking' ? <Spinner /> : 'Ingresar'}
              </button>
            </form>
            <div className='not-account'>
              <span className='not-account__title'>¿Ya tienes cuenta?</span>

              <Link to='/auth/login' className='not-account__link'>
                Ingresar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
