import { Routes, Route, Navigate } from 'react-router-dom';
import ArticlesPage from '../pages/Articles/ArticlesPage';
import { CalculadoraPage } from '../pages/CalculadoraPage';
import { CoursePage } from '../pages/Courses/CoursePage';
import { AppLayout } from '../layout/AppLayout';
import { HomePage } from '../pages/HomePage';
import { Chores } from '../components/chores/Chores';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route element={<HomePage />} />
        <Route path='search=:search' element={<ArticlesPage />} />
        <Route path='chores' element={<Chores />} />
        <Route path='courses/*' element={<CoursePage />}>
          <Route path='new' element={<h1>Nuevo curso</h1>} />
        </Route>
        <Route path='search' element={<ArticlesPage />} />
        <Route path='calculator' element={<CalculadoraPage />} />
      </Route>

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
