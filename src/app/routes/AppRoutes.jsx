import { Routes, Route, Navigate } from 'react-router-dom';
import { CalculadoraPage } from '../pages/CalculadoraPage';
import { CoursePage } from '../pages/CoursePage';
import { AppLayout } from '../layout/AppLayout';
import { TodoPages } from '../pages/TodoPage';
import HomePage from '../pages/HomePage';
import TaskPage from '../pages/TaskPage';
import SearchPage from '../pages/SearchPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route path='home' element={<HomePage />} />
        <Route path='courses' element={<CoursePage />} />
        <Route path='todos' element={<TodoPages />} />
        <Route path='tasks' element={<TaskPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='calculator' element={<CalculadoraPage />} />
      </Route>

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
