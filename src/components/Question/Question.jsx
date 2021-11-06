import React, { useContext } from "react";
import QuestionDescriptive from "./QuestionDescriptive";
import QuestionRating from "./QuestionRating";
import QuestionTest from "./QuestionTest";
import { QuestionType } from "../../config/QuestionConfig";
import { DATA_QUESTION } from "../../data/data";
import AnswerContext from "../../context/AnswerContext";

const Question = ({ id }) => {
  const question = DATA_QUESTION.questions.find((a) => a.id === id);
  const { answers, dispatchAnswer } = useContext(AnswerContext);
  const answer = answers.answers.find((a) => a.id === id);
  switch (question.type) {
    case QuestionType.Rating:
      return (
        <div className="col-12 p-3 box me">
          <QuestionRating
            q={question.q}
            a={answer.a}
            dispatchAnswer={dispatchAnswer}
          />
        </div>
      );
    case QuestionType.Test:
      return (
        <div className="col-12 p-3 box me">
          <QuestionTest
            q={question.q}
            a={answer.a}
            dispatchAnswer={dispatchAnswer}
          />
        </div>
      );
    case QuestionType.Descriptive:
      return (
        <div className="col-12 p-3 box me">
          <QuestionDescriptive
            q={question.q}
            a={answer.a}
            dispatchAnswer={dispatchAnswer}
          />
        </div>
      );
    default:
      return <div>No type suported.</div>;
  }
};
export default Question;
