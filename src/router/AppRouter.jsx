import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../app/routes/AppRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
// import { CheckingAuthView } from '../auth/view/CheckingAuthView';
// import { useCheckAuth } from '../hooks/useCheckAuth';

export const AppRouter = () => {
  // const { status, loadingApp} = useCheckAuth();

  // if (loadingApp) {
  //   return <CheckingAuthView />;
  // }

  return (
    <BrowserRouter>
      <Routes>
        {status === 'authenticated' ? (
          <Route path='/*' element={<AppRoutes />} />
        ) : (
          <Route path='/auth/*' element={<AuthRoutes />} />
        )}

        <Route path='*' element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
