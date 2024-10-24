import { useState } from 'react';
import notificationIcon from '../assets/notification-icon-1.svg';

function Subscribe() {
  const [email, setEmail] = useState({
    email: '',
  });
  const [errors, setErrors] = useState('');
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('');
    setErrors('');

    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.email) {
      setErrors('Email is required');
      return;
    } else if (!regEx.test(email.email)) {
      setErrors('Must be valid E-mail');
      return;
    }
    sendDataToApi();
    console.log('Email submitted:', email.email);
    setEmail({ email: '' });
  }

  function sendDataToApi() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(email),
    };
    fetch(
      'https://win24-assignment.azurewebsites.net/api/forms/subscribe',
      requestOptions
    )
      .then((response) => response)
      .then((data) => setStatus(data.status));
  }

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
      <div>
        <form onSubmit={handleSubmit} className="newsletter">
          <div className="mail-icon">
            <i className="fa-regular fa-envelope fa-lg"></i>
          </div>
          <input
            type="text"
            name="email"
            id="email"
            value={email.email}
            onChange={(e) => setEmail({ email: e.target.value })}
            placeholder="Your email"
          />
          <input type="submit" value="Subscribe" className="btn-primary" />
        </form>
        {errors && <span className="error">{errors}</span>}
        {status === 200 && (
          <span className="success">You have been subscribed!</span>
        )}
      </div>
    </section>
  );
}
export default Subscribe;
