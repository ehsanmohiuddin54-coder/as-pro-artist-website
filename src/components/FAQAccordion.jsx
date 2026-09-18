import { useState } from "react";
import { IconPlus } from "./Icons";

const FAQAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className="faq-item" key={item.question}>
            <button
              className="faq-item__question"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              {item.question}
              <IconPlus className={`faq-item__icon${isOpen ? " faq-item__icon--open" : ""}`} />
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`faq-item__answer${isOpen ? " faq-item__answer--open" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
