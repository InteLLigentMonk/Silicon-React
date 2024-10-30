function ContactUs() {
  return (
    <div className="contact-container">
      <section className="contact-section">
        <h1>Contact Us</h1>
        <div className="contact-card">
          <div className="contact-card-icon">
            <i className="fa-regular fa-envelope"></i>
          </div>
          <div className="contact-card-body">
            <h3>Email us</h3>
            <p>
              Please feel free to drop us a line. We will respond as soon as
              possible.
            </p>
            <a href="mailto:info@silicon.com">Leave a message {`->`}</a>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-card-icon">
            <i className="fa-solid fa-users"></i>
          </div>
          <div className="contact-card-body">
            <h3>Careers</h3>
            <p>
              Please feel free to drop us a line. We will respond as soon as
              possible.
            </p>
            <a href="mailto:application@silicon.com">
              Send an application {`->`}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ContactUs;
