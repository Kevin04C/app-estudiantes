import { createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../app/routes/AppRoutes'
import { AuthRoutes } from '../auth/routes/AuthRoutes'

export const router = createBrowserRouter([
  {
    path: '/auth/*',
    element: <AuthRoutes />
  },
  {
    path: '/',
    element: <AppRoutes />
  }
])
