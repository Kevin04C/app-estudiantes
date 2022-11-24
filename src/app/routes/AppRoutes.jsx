import { Routes, Route, Navigate } from 'react-router-dom';
import ArticlesPage from '../pages/Articles/ArticlesPage';
import { CalculadoraPage } from '../pages/CalculadoraPage';
import { CoursePage } from '../pages/CoursePage';
import { AppLayout } from '../layout/AppLayout';
import { TodoPages } from '../pages/TodoPage';
<<<<<<< HEAD
import TaskPage from '../pages/TaskPage';
=======
import React from 'react';
>>>>>>> e117d35bdad2fadebb7d161609fa9b47bf109532
import { HomePage } from '../pages/HomePage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
<<<<<<< HEAD
        <Route index element={<HomePage />} />
        <Route path='search=:search' element={<ArticlesPage />} />
=======
        <Route index element={<HomePage />}/>
>>>>>>> e117d35bdad2fadebb7d161609fa9b47bf109532
        <Route path='todos' element={<TodoPages />} />
        <Route path='courses' element={<CoursePage />} />
        <Route path='todos' element={<TodoPages />} />
        <Route path='tasks' element={<TaskPage />} />
        <Route path='search' element={<ArticlesPage />} />
        <Route path='calculator' element={<CalculadoraPage />} />
      </Route>

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
