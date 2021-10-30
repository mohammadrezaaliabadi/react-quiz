import React from "react";
import QuestionDescriptive from "./QuestionDescriptive";
import QuestionRating from "./QuestionRating";
import QuestionTest from "./QuestionTest";
import { QuestionType } from "../../config/QuestionConfig";
import { DATA_QUESTION, DATA_ANSWER } from "../../data/data";

const Question = ({ id }) => {
  const question = DATA_QUESTION.find((a) => a.id === id);
  const answer = DATA_ANSWER.find((a) => a.id === id);
  switch (question.type) {
    case QuestionType.Rating:
      return (
        <div className="col-12 p-3 shadow me">
          <QuestionRating q={question.q} a={answer.a} />
        </div>
      );
    case QuestionType.Test:
      return (
        <div className="col-12 p-3 shadow me">
          <QuestionTest q={question.q} a={answer.a} />
        </div>
      );
    case QuestionType.Descriptive:
      return (
        <div className="col-12 p-3 shadow me">
          <QuestionDescriptive q={question.q} a={answer.a} />
        </div>
      );
    default:
      return <div>No type suported.</div>;
  }
};
export default Question;
