import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  return !user ? children : <Navigate to='/app/' />;
};
