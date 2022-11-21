import { Outlet } from 'react-router-dom';
import Aside from '../components/aside/Aside';
import Header from '../components/header/Header';

export const AppLayout = () => {
  return (
    <div className='home-page'>
      <Header />
      <Aside />
      <main className='main'>
        <Outlet />
      </main>
    </div>
  );
};
