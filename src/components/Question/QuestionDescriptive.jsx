import React, { useCallback, useState } from "react";
import { ANSWER_ACTION_TYPE } from "../../reducer/AnswerReducer";
import "./Question.scss";
const QuestionDescriptive = ({ q, a, dispatchAnswer }) => {
  const [value, setValue] = useState(a.answer);
  const handleChange = useCallback(
    async (e) => {
      a.answer = e.target.value;
      await setValue(a.answer);
      await dispatchAnswer({ type: ANSWER_ACTION_TYPE.UPDATE_ANSWER });
    },
    [value]
  );
  return (
    <>
      <h4>{q.question}</h4>
      <div className="row justify-content-center align-items-center px-2">
        <textarea
          className="input-text-my"
          placeholder="Answer"
          value={value}
          onChange={handleChange}
          rows={5}
        ></textarea>
      </div>
    </>
  );
};

export default QuestionDescriptive;
