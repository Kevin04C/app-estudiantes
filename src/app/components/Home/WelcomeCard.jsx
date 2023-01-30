import { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getGreeting } from '../../helpers/greeting';

const WelcomeCard = () => {
  const { user } = useSelector((state) => state.auth);
  const [greeting, setGreting] = useState('');

  useLayoutEffect(() => {
    setGreting(getGreeting());
  }, []);

  return (
    <article className='card'>
      <div className='card-over'>
        <h1 className='card-over__title'>
          {greeting}, <span>{user.name}</span>
        </h1>
        <p>Espero que cumplas tus objetivos para este día!</p>
      </div>
      <figure className='card-img__container'>
        <img src='/assets/undraw_welcome_cats_thqn.svg' />
      </figure>
    </article>
  );
};

export default WelcomeCard;
