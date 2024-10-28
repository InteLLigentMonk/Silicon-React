import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../scss/main.scss';
import Nav from './Nav';

function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Silicon logo" />
          </Link>
          <h2>Silicon</h2>
          <Link to="/#app-features" className="features navigation-text">
            Features
          </Link>
          <Link to="/contact" className="contact navigation-text">
            Contact
          </Link>
        </div>
        <Nav />
      </header>
    </>
  );
}
export default Header;
