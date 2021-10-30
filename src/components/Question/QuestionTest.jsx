import React from "react";
import "./Question.scss";
const QuestionTest = ({ q, a }) => {
  const handleChange = (e) => {
    a.answer = Number.parseInt(e.target.getAttribute("data-value"));
  };
  return (
    <>
      <h4>{q.question}</h4>
      <div className="row justify-content-center align-items-center">
        {q.choices.map((d, i) => {
          return (
            <React.Fragment key={i}>
              <input
                className="d-none"
                type="radio"
                name="choice"
                id={`rate-${i}`}
                data-value={i + 1}
                onChange={handleChange}
              />
              <label htmlFor={`rate-${i}`} className="choice col-4 p-3 m-3">
                {d}
              </label>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default QuestionTest;
