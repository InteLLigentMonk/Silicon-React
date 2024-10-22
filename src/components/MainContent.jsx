import AppFeatures from './AppFeatures';
import AppFeatures2 from './AppFeatures2';
import Faq from './Faq';
import HowItWorks from './HowItWorks';
import Logos from './Logos';
import Showcase from './Showcase';
import Subscribe from './Subscribe';
import Testimonials from './Testimonials';

export default function MainContent() {
  return (
    <main>
      <Showcase />
      <Logos />
      <AppFeatures />
      <HowItWorks />
      <AppFeatures2 />
      <Testimonials />
      <Faq />
      <Subscribe />
    </main>
  );
}
