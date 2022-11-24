import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <form>
        <h2>Registrar</h2>
        <div>
          <label>Email</label>
          <input type='email' />
        </div>
        <div>
          <label>Password</label>
          <input type='password' />
        </div>
        <button type='submit'>Ingresar</button>
      </form>
    </AuthLayout>
  );
};
