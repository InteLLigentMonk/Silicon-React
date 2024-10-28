import MobileWithCard from '../assets/mobile-w-card.svg';
import CreditCardSymbol from '../assets/credit-card-symbol.svg';
import ShieldSymbol from '../assets/shield-symbol.svg';
import BarsGraphicSymbol from '../assets/bars-graphic-symbol.svg';
import CommunicationSymbol from '../assets/communication-symbol.svg';
import WalletSymbol from '../assets/wallet-symbol.svg';
import SmileySymbol from '../assets/smiley-symbol.svg';

function AppFeatures() {
  return (
    <section className="app-features" id="app-features">
      <div className="app-features-heading">
        <h2>App Features</h2>
      </div>
      <p className="app-features-text body-text-l">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        architecto doloribus culpa tempora expedita? Non voluptate dolores
        explicabo expedita nam accusantium blanditiis a sint magnam.
      </p>
      <figure className="mobile-w-card">
        <img src={MobileWithCard} alt="phone with creditcard" />
      </figure>
      <section className="feature-card">
        <figure className="symbol-box">
          <img src={CreditCardSymbol} alt="creditcard symbol" />
        </figure>
        <article>
          <h3>Easy Payments</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            distinctio?
          </p>
        </article>
      </section>
      <section className="feature-card">
        <figure className="symbol-box">
          <img src={ShieldSymbol} alt="creditcard symbol" />
        </figure>
        <article>
          <h3>Data Security</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            distinctio?
          </p>
        </article>
      </section>
      <section className="feature-card">
        <figure className="symbol-box">
          <img src={BarsGraphicSymbol} alt="creditcard symbol" />
        </figure>
        <article>
          <h3>Cost Statistics</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            distinctio?
          </p>
        </article>
      </section>
      <section className="feature-card">
        <figure className="symbol-box">
          <img src={CommunicationSymbol} alt="creditcard symbol" />
        </figure>
        <article>
          <h3>Support 24/7</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            distinctio?
          </p>
        </article>
      </section>
      <section className="feature-card">
        <figure className="symbol-box">
          <img src={WalletSymbol} alt="creditcard symbol" />
        </figure>
        <article>
          <h3>Regular Cashback</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            distinctio?
          </p>
        </article>
      </section>
      <section className="feature-card">
        <figure className="symbol-box">
          <img src={SmileySymbol} alt="creditcard symbol" />
        </figure>
        <article>
          <h3>Top Standards</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            distinctio?
          </p>
        </article>
      </section>
    </section>
  );
}
export default AppFeatures;
