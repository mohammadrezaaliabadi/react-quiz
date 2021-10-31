import React, { useState } from "react";
import "./Question.scss";
const QuestionTest = ({ q, a, dispatchAnswer }) => {
  const [value, setValue] = useState(a.answer);
  const handleChange = async (e) => {
    const temp = Number.parseInt(e.target.getAttribute("data-value"));
    await setValue(temp);
    a.answer = await temp;
    await dispatchAnswer({ type: "UPDATE_ANSWER" });
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
              {i + 1 === value ? (
                <label
                  htmlFor={`rate-${i}`}
                  className="choice col-12 col-md-5 p-3 m-3"
                >
                  {d} <i class="bi bi-check-lg px-3 svg-shadow"></i>
                </label>
              ) : (
                <label
                  htmlFor={`rate-${i}`}
                  className="choice col-12 col-md-5 p-3 m-3"
                >
                  {d}
                </label>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default QuestionTest;
