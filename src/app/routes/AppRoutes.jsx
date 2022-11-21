import { Routes, Route, Navigate } from 'react-router-dom';
import ArticlesPage from '../pages/ArticlesPage';
import { CalculadoraPage } from '../pages/CalculadoraPage';
import { CoursePage } from '../pages/CoursePage';
import { AppLayout } from '../layout/AppLayout';
import { TodoPages } from '../pages/TodoPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route path='search=:search' element={<ArticlesPage />} />
        <Route path='todos' element={<TodoPages />} />
        <Route path='courses' element={<CoursePage />} />
        <Route path='calculator' element={<CalculadoraPage />} />
      </Route>

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
