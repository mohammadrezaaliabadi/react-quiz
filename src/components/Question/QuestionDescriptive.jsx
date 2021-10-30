import React, { useCallback, useState } from "react";
import "./Question.scss";
const QuestionDescriptive = ({ q, a }) => {
  const [value, setValue] = useState(a.answer);
  const handleChange = useCallback(
    (e) => {
      a.answer = e.target.value;
      setValue(a.answer);
    },
    [value]
  );
  return (
    <>
      <h4>{q.question}</h4>
      <div className="row justify-content-center align-items-center px-2">
        <textarea
          className="answer"
          placeholder="Answer"
          value={value}
          onChange={handleChange}
        ></textarea>
      </div>
    </>
  );
};

export default QuestionDescriptive;
