import '../scss/main.scss';
import Darktoggle from './Darktoggle';
import MobileNav from './MobileNav';

function Nav() {
  return (
    <>
      <nav>
        <Darktoggle />
        <MobileNav />
        <button className="btn-s btn-primary">
          <i className="fa-regular fa-user"></i>
          <span> Sign in / up</span>
        </button>
      </nav>
    </>
  );
}

export default Nav;
