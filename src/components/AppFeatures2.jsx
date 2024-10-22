import SendMoneyTo from '../assets/send-money-to.svg';
import Contacts from '../assets/contacts.svg';
import CreditCardSymbol from '../assets/credit-card-symbol.svg';
import WalletSymbol from '../assets/wallet-symbol.svg';

function AppFeatures2() {
  return (
    <section className="app-features-2">
      <div className="features-2-card">
        <h2>Make your money transfer simple and clear</h2>
        <ul>
          <li>Banking transactions are free for you</li>
          <li>No monthly cash commission</li>
          <li>Manage payments and transactions online</li>
        </ul>
        <a href="#" role="button" className="btn-m btn-primary">
          Learn more -{`>`}
        </a>
      </div>
      <div className="features-2-card">
        <img src={SendMoneyTo} alt="Picture of how to transfer money" />
      </div>
      <div className="features-2-card">
        <img src={Contacts} alt="Send money to your contacts" />
      </div>
      <div className="features-2-card">
        <h2>Receive payment from international bank details</h2>
        <div className="two-column-grid">
          <div className="features-column">
            <figure className="symbol-box">
              <img src={CreditCardSymbol} alt="creditcard symbol" />
            </figure>
            <article>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                distinctio?
              </p>
            </article>
          </div>
          <div className="features-column">
            <figure className="symbol-box">
              <img src={WalletSymbol} alt="wallet symbol" />
            </figure>
            <article>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                distinctio?
              </p>
            </article>
          </div>
        </div>
        <a href="#" role="button" className="btn-m btn-primary">
          Learn more -{`>`}
        </a>
      </div>
    </section>
  );
}
export default AppFeatures2;
