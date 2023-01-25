import { useSelector } from 'react-redux';

const WelcomeCard = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  return (
    <article className='card'>
      <div className='card-over'>
        <h1 className='card-over__title'>
          Buenos Días, <span>{user.name}</span>
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
