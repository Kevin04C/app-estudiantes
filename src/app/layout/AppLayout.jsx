import { Outlet } from 'react-router-dom';
import Aside from '../components/aside/Aside';
import Backpack from '../components/backpack/Backpack';
import Header from '../components/header/Header';
export const AppLayout = () => {
  return (
    <div className='home-page'>
      <Header />
      <Aside />
      <main className='main'>
        <Outlet />
        <Backpack />
      </main>
    </div>
  );
};
