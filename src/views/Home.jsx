import AppFeatures from '../components/AppFeatures';
import AppFeatures2 from '../components/AppFeatures2';
import FAQ from '../components/Faq';
import HowItWorks from '../components/HowItWorks';
import Logos from '../components/Logos';
import Showcase from '../components/Showcase';
import Subscribe from '../components/Subscribe';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <main>
      <Showcase />
      <Logos />
      <AppFeatures />
      <HowItWorks />
      <AppFeatures2 />
      <Testimonials />
      <FAQ />
      <Subscribe />
    </main>
  );
}
export default Home;
