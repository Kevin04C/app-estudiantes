import { Outlet } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>
      <div>sibebar</div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
