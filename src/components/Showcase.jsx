import appleLogo from '../assets/apple-logo.svg';
import googleLogo from '../assets/play-logo.svg';
import Mobiles from '../assets/mobiles.svg';

function Showcase() {
  return (
    <>
      <div className="showcase-container">
        <section className="showcase">
          <h2 className="display-4" id="showcase-headline">
            <p>
              Manage All Your <br />
              Money in One App
            </p>
          </h2>
          <div className="showcase-text">
            <p>
              We offer you a new generation of the mobile banking. Save, spend &
              manage money in your pocket.
            </p>
          </div>
          <div className="appstore">
            <a
              href="https://www.apple.com/se/store"
              target="_blank"
              className="btn-l btn-store"
            >
              <img src={appleLogo} alt="Apple appstore" id="apple" />
              <div className="btn-store-text">
                <small>Download on the</small>
                <small>App Store</small>
              </div>
            </a>
            <a
              href="https://play.google.com/store/"
              target="_blank"
              className="btn-l btn-store"
            >
              <img src={googleLogo} alt="Google play store" />
              <div className="btn-store-text">
                <small>GET IT ON</small>
                <small>Google Play</small>
              </div>
            </a>
          </div>
          <div className="discover-more body-text-s">
            <button id="hero-round-btn" className="btn-round">
              ►
            </button>
            <label htmlFor="hero-round-btn">Discorver more</label>
          </div>
          <div className="mobiles">
            <img src={Mobiles} alt="" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Showcase;
