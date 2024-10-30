import { useState, useEffect } from 'react';
import CommentCard from './CommentCard';

const BASE_URL = 'https://win24-assignment.azurewebsites.net/api';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch(`${BASE_URL}/testimonials`);
      const testimonials = await response.json();
      setTestimonials(testimonials);
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="testimonials-container">
      <section className="testimonials">
        <h2>
          Clients are
          <br /> Loving Our App
        </h2>
        {testimonials.map((testimonial) => {
          return <CommentCard key={testimonial.id} testimonial={testimonial} />;
        })}
      </section>
    </div>
  );
}
export default Testimonials;
