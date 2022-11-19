import { Routes, Route, Navigate } from 'react-router-dom'
import { CoursePage } from '../pages/CoursePage'
import { HomePage } from '../pages/HomePage'
import { TodoPages } from '../pages/TodoPage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route
          path="todos"
          element={<TodoPages />}
        />
        <Route
          path="courses"
          element={<CoursePage />}
        />
      </Route>

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
