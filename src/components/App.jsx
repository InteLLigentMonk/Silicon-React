import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import ScrollToHashElement from '@cascadia-code/scroll-to-hash-element';
function App() {
  return (
    <>
      <ScrollToHashElement behavior="smooth" />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
