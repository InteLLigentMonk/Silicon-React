import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import ScrollToHashElement from '@cascadia-code/scroll-to-hash-element';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <ScrollToHashElement behavior="smooth" />
      <Header />
      <Breadcrumb />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
