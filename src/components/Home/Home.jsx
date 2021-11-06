/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from "react";
import AnswerContext from "../../context/AnswerContext";
import { DATA_QUESTION } from "../../data/data";
import { ANSWER_ACTION_TYPE } from "../../reducer/AnswerReducer";
import Question from "../Question/Question";

const Home = () => {
  let { answers, dispatchAnswer } = useContext(AnswerContext);
  function getIndex() {
    return answers.index;
  }
  const [finishClassBtn, setFinishClassBtn] = useState("d-none");
  const [nextClassBtn, setNextClassBtn] = useState("");
  const [prevClassBtn, setPrevClassBtn] = useState("");
  const questions = DATA_QUESTION.questions;
  const [id, setId] = useState(() => questions[getIndex()]["id"]);

  const updateAction = (i) => {
    if (i + 1 === questions.length) {
      setFinishClassBtn("");
      setNextClassBtn("disabled");
    } else {
      setNextClassBtn("");
      setFinishClassBtn("d-none");
    }
    if (i === 0) {
      setPrevClassBtn("disabled");
    } else {
      setPrevClassBtn("");
    }
    answers.index = i;
    dispatchAnswer({ type: ANSWER_ACTION_TYPE.UPDATE_ANSWER });
  };
  const handleNext = () => {
    const i = Math.min(questions.length - 1, getIndex() + 1);
    setId(questions[i]["id"]);
    updateAction(i);
  };
  const handlePrev = () => {
    const i = Math.max(0, getIndex() - 1);
    setId(questions[i]["id"]);
    updateAction(i);
  };
  const handleFinish = () => {
    answers.duration = 0;
    answers.finish = true;
  };

  return (
    <div className="m-3  gy-5 rounded">
      <div className="row justify-content-center">
        <Question id={id} />
      </div>
      <div className="p-4 m-5 box d-grid gap-2 d-md-flex justify-content-star">
        <button className={`btn-my ${prevClassBtn}`} onClick={handlePrev}>
          Prev
        </button>
        <button className={`btn-my ${nextClassBtn}`} onClick={handleNext}>
          Next
        </button>
        <button className={`btn-my ${finishClassBtn}`} onClick={handleFinish}>
          Finish
        </button>
      </div>
    </div>
  );
};

export default Home;
