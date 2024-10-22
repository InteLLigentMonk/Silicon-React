import MyBudgetNophone from '../assets/my-budget-nophone.svg';
import YourCards from '../assets/your-cards.svg';
import YourCardsNophone from '../assets/your-cards-nophone.svg';
import Transfer from '../assets/transfer.svg';
import TransferNophone from '../assets/transfer-nophone.svg';
import Transfer2Nophone from '../assets/transfer2-nophone.svg';

function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <section className="how-it-works">
        <h2>How Does It Work?</h2>
        <figure className="mobile-my-budget">
          <img src={MyBudgetNophone} alt="Picture of budget graph" />
        </figure>
        <figure className="mobile-your-cards">
          <img src={YourCards} alt="Picture of creditcards and transactions" />
        </figure>
        <figure className="mobile-your-cards-nophone">
          <img src={YourCardsNophone} alt="Picture of transaction details" />
        </figure>
        <figure className="mobile-transfers">
          <img src={Transfer} alt="Picture of transaction details" />
        </figure>
        <figure className="mobile-transfers-nophone">
          <img src={TransferNophone} alt="Picture of transaction details" />
        </figure>
        <figure className="mobile-transfers-2">
          <img src={Transfer2Nophone} alt="Picture of transaction details" />
        </figure>
        <article className="article-transfer">
          <h4>Transfers to people from your contact list</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem aut
            eius ratione dolorem? Minima at aspernatur nulla sint, explicabo
            fuga!
          </p>
        </article>
        <article className="article-step3">
          <h4>
            Step 3. Transfers to people from your contact list. your contact
            list
          </h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem aut
            eius ratione dolorem? Minima at aspernatur nulla sint, explicabo
            fuga!
          </p>
        </article>
        <article className="article-transaction">
          <h4>Latest transaction history your contact list</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem aut
            eius ratione dolorem? Minima at aspernatur nulla sint, explicabo
            fuga!
          </p>
        </article>
      </section>
    </div>
  );
}
export default HowItWorks;
