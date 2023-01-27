import { HambugerButton } from './HambugerButton';
import { MenuDesktop } from './MenuDesktop';
import { MenuMobile } from './MenuMobile';

export const Header = () => {
  const linkClass = 'nav__link';

  return (
    <header>
      <nav className='nav'>
        <h1 className='nav__logo'>
          App <span>Students</span>
        </h1>

        <HambugerButton />

        <MenuDesktop linkClass={linkClass} />
        <MenuMobile linkClass={linkClass} />
      </nav>
    </header>
  );
};
