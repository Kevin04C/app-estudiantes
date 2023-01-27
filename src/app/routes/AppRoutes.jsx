import { Routes, Route, Navigate } from 'react-router-dom';
import ArticlesPage from '../pages/ArticlesPage';
import { CalculadoraPage } from '../pages/CalculadoraPage';
import { CoursePage } from '../pages/CoursePage';
import { AppLayout } from '../layout/AppLayout';
import { HomePage } from '../pages/HomePage';
import { Chores } from '../components/chores/Chores';
import ArticlesSaved from '../pages/ArticlesSaved';
import { ProfilePage } from '../pages/ProfilePage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path='search?q=' element={<ArticlesPage />} />
        <Route path='articles' element={<ArticlesSaved />} />
        <Route path='courses' element={<CoursePage />} />
        <Route path='chores' element={<Chores />} />
        <Route path='search' element={<ArticlesPage />} />
        <Route path='calculator' element={<CalculadoraPage />} />
        <Route path='profile' element={<ProfilePage />} />
      </Route>

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};
