import { Routes, Route, Navigate } from 'react-router-dom';
import ArticlesPage from '../pages/Articles/ArticlesPage';
import { CalculadoraPage } from '../pages/CalculadoraPage';
import { CoursePage } from '../pages/Courses/CoursePage';
import { AppLayout } from '../layout/AppLayout';
import { TodoPages } from '../pages/TodoPage';
import { HomePage } from '../pages/HomePage';
import ArticlesSaved from '../pages/Articles/ArticlesSaved';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path='search?q=' element={<ArticlesPage />} />
        <Route path='articles' element={<ArticlesSaved />} />
        <Route path='todos' element={<TodoPages />} />
        <Route path='courses' element={<CoursePage />} />
        <Route path='search' element={<ArticlesPage />} />
        <Route path='calculator' element={<CalculadoraPage />} />
      </Route>

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
