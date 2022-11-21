import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <main className='main'>
      <h1>hola</h1>
      <Outlet />
    </main>
  );
};

export default Main;
