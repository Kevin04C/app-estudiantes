import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from '../app/pages/LandingPage';
import { AppRoutes } from '../app/routes/AppRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { CheckingAuthView } from '../auth/view/CheckingAuthView';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
  const { loadingApp } = useCheckAuth();

  if (loadingApp) {
    return <CheckingAuthView />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/*'
          element={
            <PublicRoutes>
              <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='auth/*' element={<AuthRoutes />} />
              </Routes>
            </PublicRoutes>
          }
        />
        <Route
          path='app/*'
          element={
            <PrivateRoutes>
              <AppRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
