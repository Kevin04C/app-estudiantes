import { Outlet } from 'react-router-dom'
import { BsWater } from 'react-icons/bs'

export const HomePage = () => {
  return (
    <div>
      <div>
        <BsWater />
        sibebar
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
