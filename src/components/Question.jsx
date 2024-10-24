function Question({ faq }) {
  return (
    <li>
      <label htmlFor={faq.id}>
        <div className="flex-wrap">
          <h5>{faq.title}</h5>
        </div>
        <span>-{`>`}</span>
      </label>
      <input type="radio" name="accordion" id={faq.id} />
      <div className="content body-text-s">{faq.content}</div>
    </li>
  );
}
export default Question;
