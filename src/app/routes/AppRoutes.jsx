import { Routes, Route, Navigate } from 'react-router-dom';
import { CalculadoraPage } from '../pages/CalculadoraPage';
import { CoursePage } from '../pages/CoursePage';
import { AppLayout } from '../layout/AppLayout';
import { TodoPages } from '../pages/TodoPage';
import React from 'react';
import { HomePage } from '../pages/HomePage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<HomePage />}/>
        <Route path='todos' element={<TodoPages />} />
        <Route path='courses' element={<CoursePage />} />
        <Route path='calculator' element={<CalculadoraPage />} />
      </Route>

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
