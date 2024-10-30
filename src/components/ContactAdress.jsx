import map from '../assets/map.png';

function ContactAdress() {
  return (
    <section className="contact-adress">
      <div className="adress-wrapper">
        <div className="adress-map">
          <img src={map} alt="Map to our locations" />
        </div>
        <div className="adress-box-wrapper">
          <div className="adress-box">
            <h4>Medical Center 1</h4>
            <p className="adress-line">
              <i className="fa-solid fa-location-dot"></i>
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>
            <p className="adress-line">
              <i className="fa-solid fa-phone-volume"></i>
              (406) 555-0120
            </p>
            <div className="open-hours">
              <div>
                <i className="fa-regular fa-clock"></i>
              </div>
              <div className="open-hours-line">
                <p>
                  <strong>Mon-Fri:</strong> 9:00am - 22:00pm
                </p>
                <p>
                  <strong>Sat-Sun:</strong> 9:00am - 20:00pm
                </p>
              </div>
            </div>
          </div>
          <div className="adress-box">
            <h4>Medical Center 2</h4>
            <p className="adress-line">
              <i className="fa-solid fa-location-dot"></i>
              2464 Royal Ln. Mesa,New Jersey 45463
            </p>
            <p className="adress-line">
              <i className="fa-solid fa-phone-volume"></i>
              (406) 555-0123
            </p>
            <div className="open-hours">
              <div>
                <i className="fa-regular fa-clock"></i>
              </div>
              <div className="open-hours-line">
                <p>
                  <strong>Mon-Fri:</strong> 9:00am - 22:00pm
                </p>
                <p>
                  <strong>Sat-Sun:</strong> 9:00am - 20:00pm
                </p>
              </div>
            </div>
          </div>
          <div className="social-media">
            <a href="http://www.facebook.com" target="_blank">
              <div className="social-media-box">
                <i className="fa-brands fa-square-facebook"></i>
              </div>
            </a>
            <a href="http://www.x.com" target="_blank">
              <div className="social-media-box">
                <i className="fa-brands fa-twitter"></i>
              </div>
            </a>
            <a href="http://www.instagram.com" target="_blank">
              <div className="social-media-box">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </a>
            <a href="http://www.youtube.com" target="_blank">
              <div className="social-media-box">
                <i className="fa-brands fa-youtube"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactAdress;
