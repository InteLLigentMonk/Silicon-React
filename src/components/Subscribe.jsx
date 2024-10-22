import notificationIcon from '../assets/notification-icon-1.svg';

function Subscribe() {
  return (
    <section className="subscribe">
      <div className="newsletter-logo">
        <figure>
          <img src={notificationIcon} alt="Bell-icon" />
        </figure>
        <div className="subscribe-heading">
          <h5 id="subscribe-mobile">Subscribe to our newsletter</h5>
          <h5 id="subscribe-desktop">to stay informed about latest updates</h5>
        </div>
      </div>
      <form action="#" className="newsletter">
        <div className="mail-icon">
          <i className="fa-regular fa-envelope fa-lg"></i>
        </div>
        <input type="email" name="email" id="email" placeholder="Your email" />
        <input type="submit" value="Subscribe" className="btn-primary" />
      </form>
    </section>
  );
}
export default Subscribe;
