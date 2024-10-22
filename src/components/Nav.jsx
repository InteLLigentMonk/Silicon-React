import '../scss/main.scss';
import Darktoggle from './Darktoggle';

const Nav = () => {
  return (
    <>
      <nav>
        <Darktoggle />
        <button
          className="mobile-nav-button"
          aria-expanded="false"
          aria-label="Open navigation menu"
        >
          <svg
            id="hamburger"
            className="hamburger"
            viewBox="0 0 100 100"
            width="2rem"
          >
            <rect
              className="line top-bar"
              width="70"
              height="10"
              x="15"
              y="25"
              rx="5"
            ></rect>
            <rect
              className="line middle-bar"
              width="70"
              height="10"
              x="15"
              y="45"
              rx="5"
            ></rect>
            <rect
              className="line bottom-bar"
              width="70"
              height="10"
              x="15"
              y="65"
              rx="5"
            ></rect>
          </svg>
        </button>
        <div id="mobile-nav1" className="mobile-nav">
          <form action="#" className="signin">
            <label htmlFor="username" className="visually-hidden">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username / E-mail"
            />
            <label htmlFor="password" className="visually-hidden">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button id="login" className="btn-s btn-primary">
              <i className="fa-regular fa-user"></i>
              <span>Sign in</span>
            </button>
            <a href="#" className=" body-text-xs">
              not a member?
            </a>
          </form>
        </div>
        <a href="#" className="btn-s btn-primary">
          <i className="fa-regular fa-user"></i>
          <span> Sign in / up</span>
        </a>
      </nav>
    </>
  );
};

export default Nav;
