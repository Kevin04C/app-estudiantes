import Aside from '../../components/aside/Aside';
// import { BsWater } from 'react-icons/bs';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';

export const HomePage = () => {
  return (
    <div className='home-page'>
      <Header />
      <Aside />
      <Main />
    </div>
  );
};
