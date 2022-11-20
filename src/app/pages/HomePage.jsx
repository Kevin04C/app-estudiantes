import { Outlet } from 'react-router-dom';
import Aside from '../../components/aside/Aside';
// import { BsWater } from 'react-icons/bs';
import Header from '../../components/header/Header';

export const HomePage = () => {
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
