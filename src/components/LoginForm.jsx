import { useEffect, useRef, useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  function testEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return 'Email is required';
    } else if (!emailRegex.test(email)) {
      return 'Must be valid E-mail';
    }
    return '';
  }

  function testPassword() {
    const passwordRegex = /^(?=.*\S).+$/;
    if (!passwordRegex.test(password)) {
      return 'Password is required';
    }
    return '';
  }

  function handleSubmit(e) {
    e.preventDefault();
    const emailError = testEmail();
    const passwordError = testPassword();

    setErrors({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      console.log('You have been logged in');
      setEmail('');
      setPassword('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-signin">
      <h5>Sign in</h5>
      <label htmlFor="login-email" className="visually-hidden">
        email
      </label>
      {errors.email ? <span className="error">{errors.email}</span> : ''}
      <input
        className={errors.email ? 'input-error' : ''}
        type="text"
        name="email"
        id="login-email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
      />
      <label htmlFor="password" className="visually-hidden">
        Password:
      </label>
      {errors.password && <span className="error">{errors.password}</span>}
      <input
        className={errors.password ? 'input-error' : ''}
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button id="login" className="btn-s btn-primary">
        <i className="fa-regular fa-user"></i>
        <span>Sign in</span>
      </button>
      <a href="#" className="body-text-xs">
        not a member?
      </a>
    </form>
  );
}
export default LoginForm;
