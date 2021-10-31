import React from "react";
import Rating from "../Rating/Rating";
import "./Question.scss";
const QuestionRating = ({ q, a, dispatchAnswer }) => {
  return (
    <>
      <h4>{q.question}</h4>
      <div className="text-center">
        <Rating n={5} a={a} dispatchAnswer={dispatchAnswer} />
      </div>
    </>
  );
};

export default QuestionRating;
