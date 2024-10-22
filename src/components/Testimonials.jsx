import femaleAvatar from '../assets/female-avatar.svg';
import maleAvatar from '../assets/male-avatar.svg';

function Testimonials() {
  return (
    <div className="testimonials-container">
      <section className="testimonials">
        <h2>
          Clients are
          <br /> Loving Our App
        </h2>
        <div className="comment-card">
          <div className="quote-box">
            <i className="fa-solid fa-quote-left fa-xl"></i>
          </div>
          <div className="comment">
            <div className="rating">
              <i className="fa-solid fa-star star-filled"></i>
              <i className="fa-solid fa-star star-filled"></i>
              <i className="fa-solid fa-star star-filled"></i>
              <i className="fa-solid fa-star star-filled"></i>
              <i className="fa-solid fa-star star-filled"></i>
            </div>
            <cite>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              minima cupiditate enim nulla ea consectetur? Assumenda deleniti
              magnam sit beatae necessitatibus facere, quod temporibus maxime.
              Consectetur repellat veritatis cum ipsum!"
            </cite>
            <div className="user">
              <figure className="avatar">
                <img src={femaleAvatar} alt="avatar" />
              </figure>
              <div className="user-details">
                <h6>Fannie Summers</h6>
                <small>Designer</small>
              </div>
            </div>
          </div>
        </div>
        <div className="comment-card">
          <div className="quote-box">
            <i className="fa-solid fa-quote-left fa-xl"></i>
          </div>
          <div className="comment">
            <div className="rating">
              <i className="fa-solid fa-star star-filled"></i>
              <i className="fa-solid fa-star star-filled"></i>
              <i className="fa-solid fa-star star-filled"></i>
              <i className="fa-solid fa-star star-filled"></i>
              <i className="fa-regular fa-star star-outline"></i>
            </div>
            <cite>
              "Accusamus, voluptnus repudiandae, dolor omnis dolorum. A,
              mollitia libero qui rem, architecto quis, vitae quod quidem labore
              possimus eveniet."
            </cite>
            <div className="user">
              <figure className="avatar">
                <img src={maleAvatar} alt="avatar" />
              </figure>
              <div className="user-details">
                <h6>Albert Flores</h6>
                <small>Developer</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Testimonials;
