import { useEffect, useRef, useState } from 'react';
import LoginForm from './LoginForm';

function MobileNav() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (formref.current && !formref.current.contains(event.target)) {
        setIsFormVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [formref]);

  return (
    <>
      <button
        className="mobile-nav-button"
        aria-expanded={isFormVisible}
        aria-label="Open navigation menu"
        onClick={() => setIsFormVisible(!isFormVisible)}
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
      {isFormVisible ? (
        <div ref={formref} id="mobile-nav1" className="mobile-nav flex">
          <LoginForm />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
export default MobileNav;
