import { Link } from 'react-router-dom';
import Header from './Header';

function NotFound404() {
  return (
    <>
      <Header />
      <main className="container">
        <h1>404 Not Found</h1>
        <p className="body-text-xl">
          No, No, No!, It appears that you gotten lost!
        </p>
        <Link to="/" className="btn-l btn-secondary btn-primary">
          Find your way home!
        </Link>
      </main>
    </>
  );
}
export default NotFound404;
