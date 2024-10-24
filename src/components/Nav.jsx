import '../scss/main.scss';
import Darktoggle from './Darktoggle';
import MobileNav from './MobileNav';

function Nav() {
  return (
    <>
      <nav>
        <Darktoggle />
        <MobileNav />
        <a href="#" className="btn-s btn-primary">
          <i className="fa-regular fa-user"></i>
          <span> Sign in / up</span>
        </a>
      </nav>
    </>
  );
}

export default Nav;
