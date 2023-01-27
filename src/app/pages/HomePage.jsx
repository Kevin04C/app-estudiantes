import WelcomeCard from '../components/Home/WelcomeCard';
import CourseModule from '../components/Home/CourseModule';

export const HomePage = () => {
  return (
    <div className='home'>
      <WelcomeCard />
      <CourseModule />
    </div>
  );
};
