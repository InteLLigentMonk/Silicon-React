import logoipsum1 from '../assets/logoipsum1.svg';
import logoipsum2 from '../assets/logoipsum2.svg';
import logoipsum3 from '../assets/logoipsum3.svg';
import logoipsum4 from '../assets/logoipsum4.svg';
import logoipsum5 from '../assets/logoipsum5.svg';
import logoipsum6 from '../assets/logoipsum6.svg';

function Logos() {
  return (
    <section className="logos">
      <a href="index.html" className="logo-card">
        <img src={logoipsum1} alt="logo 1" />
      </a>
      <a href="index.html" className="logo-card">
        <img src={logoipsum2} alt="logo 2" />
      </a>
      <a href="index.html" className="logo-card">
        <img src={logoipsum3} alt="logo 3" />
      </a>
      <a href="index.html" className="logo-card">
        <img src={logoipsum4} alt="logo 4" />
      </a>
      <a href="index.html" className="logo-card">
        <img src={logoipsum5} alt="logo 5" />
      </a>
      <a href="index.html" className="logo-card">
        <img src={logoipsum6} alt="logo 6" />
      </a>
    </section>
  );
}
export default Logos;
