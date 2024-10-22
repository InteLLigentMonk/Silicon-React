import logo from '../assets/logo.svg';
import '../scss/main.scss';
import Nav from './Nav';

function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <a href="index.html">
            <img src={logo} alt="Silicon logo" />
          </a>
          <h2>Silicon</h2>
          <a href="#">
            <div className="features navigation-text">Features</div>
          </a>
        </div>
        <Nav />
      </header>
    </>
  );
}
export default Header;
