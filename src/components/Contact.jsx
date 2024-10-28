import Header from './Header';
import ContactUs from './ContactUs';
import ContactForm from './ContactForm';
import ContactAdress from './ContactAdress';
import Footer from './Footer';

function Contact() {
  return (
    <>
      <Header />
      <main className="contact-main">
        <ContactUs />
        <ContactForm />
        <ContactAdress />
        <Footer />
      </main>
    </>
  );
}
export default Contact;
