import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../scss/main.scss';
import Nav from './Nav';

function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              alt="Silicon logo"
              onClick={() => {
                window.scroll(0, 0);
              }}
            />
          </Link>
          <h2>Silicon</h2>
          <NavLink to="/#app-features" className="features navigation-text">
            Features
          </NavLink>
          <NavLink
            to="/contact"
            className="contact navigation-text"
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
              });
            }}
          >
            Contact
          </NavLink>
        </div>
        <Nav />
      </header>
    </>
  );
}
export default Header;
