import { Routes, Route, Navigate } from 'react-router-dom'
import ArticlesPage from '../pages/ArticlesPage'
import { HomePage } from '../pages/HomePage'
//import { HomePage } from '../pages/HomePage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search=:search" element={<ArticlesPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
