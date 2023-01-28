import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { RecoverAccount } from '../pages/RecoverAccount';
import { RecoverPassword } from '../pages/RecoverPassword';
import { RegisterPage } from '../pages/RegisterPage';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/recover-account' element={<RecoverAccount />} />
      <Route path='/recover-password' element={<RecoverPassword />} />

      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};
