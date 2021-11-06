import React, { useState } from "react";
import { ANSWER_ACTION_TYPE } from "../../reducer/AnswerReducer";
import "./Rating.scss";
const Rating = ({ n, a, dispatchAnswer }) => {
  const [value, setValue] = useState(a.answer);
  const handleChange = async (e) => {
    const temp = Math.abs(
      n - Number.parseInt(e.target.getAttribute("data-value"))
    );
    await setValue(temp);
    a.answer = await temp;
    await dispatchAnswer({ type: ANSWER_ACTION_TYPE.UPDATE_ANSWER });
  };
  return (
    <span className="rating">
      {[...Array(n).keys()].map((i) => {
        return (
          <React.Fragment key={i}>
            {n - i === value ? (
              <input
                className="rating__ratio"
                type="radio"
                name="rating"
                id={`rate-${i}`}
                data-value={i}
                onChange={handleChange}
                checked
              />
            ) : (
              <input
                className="rating__ratio"
                type="radio"
                name="rating"
                id={`rate-${i}`}
                data-value={i}
                onChange={handleChange}
              />
            )}

            <label
              className="fs-3 rating__icon bi bi-star-fill"
              htmlFor={`rate-${i}`}
            />
          </React.Fragment>
        );
      })}
    </span>
  );
};
export default Rating;
