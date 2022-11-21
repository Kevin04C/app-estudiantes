import React from 'react'
import { Link } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { MdOutlineEmail, MdOutlineSecurity } from 'react-icons/md'
import { useForm } from '../../hooks/useForm'

export const LoginPage = () => {
  const { stateForm, handleInputChange } = useForm({ email: '', password: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(stateForm)
  }

  return (
    <AuthLayout>
      <div className="auth__wrapper">
        <div className="welcome ">
          <div className="welcome__wrapper">
            <picture className="welcome__picture">
              <img
                src="/welcome.svg"
                alt="welcome svg"
                className="welcome__img"
              />
            </picture>
            <h2 className="welcome__title">¡BIENVENIDO DE NUEVO!</h2>
            <p className="welcome__paragraph">Sé lo mejor de ti mismo</p>
          </div>
        </div>
        <div className="auth__form">
          <div className="auth__form__wrapper">
            <form className="form" onSubmit={handleSubmit}>
              <h2 className="form__title">Iniciar Sesión</h2>

              <label className="form__group">
                <MdOutlineEmail className="form__icon" />
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email"
                  name="email"
                  onChange={handleInputChange}
                  autoComplete="off"
                />
              </label>
              <label className="form__group">
                <MdOutlineSecurity className="form__icon" />
                <input
                  type="password"
                  className="form__input"
                  placeholder="Password"
                  name="password"
                  onChange={handleInputChange}
                  autoComplete="off"
                />
              </label>

              <button type="submit" className="form__btn-submit">
                INGRESAR
              </button>
            </form>
            <div className="not-account">
              <span className="not-account__title">¿Aún no tienes cuenta?</span>

              <Link to="/auth/register" className="not-account__link">
                Crear cuenta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}
