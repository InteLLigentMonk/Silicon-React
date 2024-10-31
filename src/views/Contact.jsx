import ContactUs from '../components/ContactUs';
import ContactForm from '../components/ContactForm';
import ContactAdress from '../components/ContactAdress';

function Contact() {
  return (
    <>
      <main className="contact-main">
        <ContactUs />
        <ContactForm />
        <ContactAdress />
      </main>
    </>
  );
}
export default Contact;
