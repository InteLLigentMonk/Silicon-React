import Header from './Header';
import ContactUs from './ContactUs';
import ContactForm from './ContactForm';
import ContactAdress from './ContactAdress';

function Contact() {
  return (
    <>
      <Header />
      <main className="contact-main">
        <ContactUs />
        <ContactForm />
        <ContactAdress />
      </main>
    </>
  );
}
export default Contact;
