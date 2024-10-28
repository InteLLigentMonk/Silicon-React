import { useState } from 'react';

function ContactForm() {
  const [contactInfo, setContactInfo] = useState({
    fullName: '',
    email: '',
    specialist: '',
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    specialist: '',
  });

  function handleSubmit(e) {
    e.preventDefault();

    setStatus('');
    setErrors('');

    const fullNameError = testFullName();
    const emailError = testEmail();
    const specialistError = testSpecialist();

    setErrors({
      email: emailError,
      fullName: fullNameError,
      specialist: specialistError,
    });

    if (!emailError && !fullNameError && !specialistError) {
      sendDataToApi();

      setContactInfo({
        fullName: '',
        email: '',
        specialist: '',
      });
    }
  }

  function testFullName() {
    const fullNameRegex = /^[A-Z][a-z]* [A-Z][a-z]*$/;
    if (!contactInfo.fullName.trim()) {
      return 'Full Name is required';
    } else if (!fullNameRegex.test(contactInfo.fullName.trim())) {
      return 'Full Name must be two words separated by a space, each starting with a capital letter and containing only letters';
    }
    return '';
  }

  function testEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactInfo.email.trim()) {
      return 'Email is required';
    } else if (!emailRegex.test(contactInfo.email.trim())) {
      return 'Must be valid E-mail';
    }
    return '';
  }
  function testSpecialist() {
    if (!contactInfo.specialist.trim()) {
      return 'Specialist is required';
    }
    return '';
  }

  function sendDataToApi() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactInfo),
    };
    fetch(
      'https://win24-assignment.azurewebsites.net/api/forms/subscribe',
      requestOptions
    )
      .then((response) => response)
      .then((data) => {
        setStatus(data.status);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <section className="contact-form-container">
      <h2>Get Online Consutltation</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          {errors.fullName && <span className="error">{errors.fullName}</span>}
          <input
            onChange={(e) =>
              setContactInfo({ ...contactInfo, fullName: e.target.value })
            }
            value={contactInfo.fullName}
            type="text"
            id="name"
            name="name"
            autoComplete="on"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          {errors.email && <span className="error">{errors.email}</span>}
          <input
            onChange={(e) =>
              setContactInfo({ ...contactInfo, email: e.target.value })
            }
            value={contactInfo.email}
            type="email"
            id="email"
            name="email"
            autoComplete="on"
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialist">Specialist</label>
          {errors.specialist && (
            <span className="error">{errors.specialist}</span>
          )}
          <select
            onChange={(e) =>
              setContactInfo({ ...contactInfo, specialist: e.target.value })
            }
            value={contactInfo.specialist}
            id="specialist"
            name="specialist"
          >
            <option value=""></option>
            <option value="bookie">Bookie</option>
            <option value="gambler">Gambler</option>
            <option value="ponzie-specialist">Ponzie Specialist</option>
            <option value="robber">Robber</option>
          </select>
        </div>
        <button className="btn-l btn-primary" type="submit">
          Make an appointment
        </button>
        {status && (
          <span className="success">
            Status code: {status}, We will contact you!
          </span>
        )}
      </form>
    </section>
  );
}
export default ContactForm;
