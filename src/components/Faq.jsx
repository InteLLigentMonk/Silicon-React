import { useEffect, useState } from 'react';
import Question from './Question';

const BASE_URL = 'https://win24-assignment.azurewebsites.net/api';

function FAQ() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      const response = await fetch(`${BASE_URL}/faq`);
      const faqs = await response.json();
      setFaqs(faqs);
    };

    fetchFaqs();
  }, []);
  return (
    <section className="faq">
      <h2>
        Any questions?
        <br />
        Check out the FAQs
      </h2>
      <p className="body-text-l">
        Still have unanswered questions and nned to get in touch?
      </p>
      <div className="accordion-container">
        <ul
          id="accordion"
          aria-label="accordion menu for frequently asked questions"
        >
          {faqs.map((faq) => {
            return <Question key={faq.id} faq={faq} />;
          })}
        </ul>
      </div>
      <a href="#" className="btn-l btn-primary">
        Contact us now
      </a>
      <div className="contact-us">
        <div className="contact-box phone">
          <div id="icon-primary">
            <i className="fa-solid fa-phone-volume fa-lg"></i>
          </div>
          <small className="body-text-s">Still have questions?</small>
          <a href="#">Contact us -{`>`}</a>
        </div>
        <div className="contact-box chat">
          <div id="icon-green">
            <i className="fa-solid fa-comment-dots fa-flip-horizontal fa-lg"></i>
          </div>
          <small className="body-text-s">Don't like phone calls?</small>
          <a href="#">Contact us -{`>`}</a>
        </div>
      </div>
    </section>
  );
}
export default FAQ;
